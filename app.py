import os
import sys
import webview
import re
import json
import time
import logging
import tempfile

from logging.handlers import RotatingFileHandler

if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if sys.stderr and hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

# =========================================================
# LOG DE ERROS (erro.log ao lado do executável)
# =========================================================
def _pasta_do_log():
    base = os.path.dirname(sys.executable) if getattr(sys, 'frozen', False) else os.path.abspath(".")
    try:
        teste = os.path.join(base, ".teste_escrita")
        with open(teste, "w") as f:
            f.write("ok")
        os.remove(teste)
        return base
    except Exception:
        # Pasta sem permissão de escrita (ex.: Program Files): usa a pasta do usuário
        alternativa = os.path.join(os.environ.get('LOCALAPPDATA', tempfile.gettempdir()), 'BancoDePeticoes')
        os.makedirs(alternativa, exist_ok=True)
        return alternativa

CAMINHO_LOG = os.path.join(_pasta_do_log(), "logs.log")

_handler_log = RotatingFileHandler(CAMINHO_LOG, maxBytes=1_000_000, backupCount=3, encoding="utf-8")
_handler_log.setFormatter(logging.Formatter("%(asctime)s [%(levelname)s] %(message)s"))
logging.basicConfig(level=logging.INFO, handlers=[_handler_log])

def _registrar_excecao_nao_tratada(tipo, valor, tb):
    logging.error("Exceção não tratada", exc_info=(tipo, valor, tb))

sys.excepthook = _registrar_excecao_nao_tratada
logging.info("Aplicativo iniciado")

from src.word_processor import gerar_documento
from src.pdf_processor import processar_pdf

def obter_caminho_raiz(caminho_relativo): 
    if hasattr(sys, '_MEIPASS'):
        return os.path.join(sys._MEIPASS, caminho_relativo)
    return os.path.join(os.path.abspath("."), caminho_relativo)

class Api:
    def registrar_erro_js(self, origem, mensagem):
        logging.error("Erro no JavaScript (%s): %s", origem, mensagem)
        return True

    def escolher_pasta(self):
        try:
            resultado = webview.windows[0].create_file_dialog(webview.FileDialog.FOLDER)
            if resultado:
                return resultado[0]
            return None
        except Exception:
            logging.exception("Falha ao abrir o diálogo de pasta")
            raise

    def escolher_pdf(self):
        try:
            arquivos = webview.windows[0].create_file_dialog(
                webview.FileDialog.OPEN,
                allow_multiple=False,
                file_types=('Arquivos PDF (*.pdf)',)
            )
            if arquivos:
                return arquivos[0]
            return None
        except Exception:
            logging.exception("Falha ao abrir o diálogo de PDF")
            raise

    def gerar_formulario(self, dados):
        if not dados or 'pasta_destino' not in dados or not dados['pasta_destino']:
            return "Erro: A pasta de destino é obrigatória e não foi enviada pelo formulário."

        pasta_destino = dados['pasta_destino']

        # Registro de diagnóstico (sem dados pessoais): tipo, quantidade e peso das imagens
        inicio = time.time()
        try:
            qtd_imagens = 0
            for chave, valor in dados.items():
                if isinstance(valor, list):
                    for item in valor:
                        if isinstance(item, str) and item.startswith('data:image'):
                            qtd_imagens += 1
                        elif isinstance(item, dict) and item.get('imagem_base64'):
                            qtd_imagens += 1
            tamanho_mb = len(json.dumps(dados, default=str)) / (1024 * 1024)
            logging.info("Geração iniciada | tipo=%s | imagens=%d | payload=%.1f MB",
                         dados.get('tipo_beneficio_escolhido'), qtd_imagens, tamanho_mb)
        except Exception:
            logging.exception("Falha ao calcular o diagnóstico do payload")
   
        nome_cliente_bruto = (dados.get('nome_cliente') or 'Cliente_Sem_Nome').upper()
        nome_cliente_seguro = re.sub(r'[^\w\s-]', '', nome_cliente_bruto).strip()

        # === TRATAMENTO INTELIGENTE DOS DIAGNÓSTICOS ===
        lista_diag = dados.get('lista_diagnosticos', [])
        lista_diag_limpa = [d.replace('•', '').strip() for d in lista_diag if d.strip()]

        if len(lista_diag_limpa) == 1:
            dados['diagnosticos_texto_corrido'] = lista_diag_limpa[0]
        elif len(lista_diag_limpa) > 1:
            dados['diagnosticos_texto_corrido'] = ", ".join(lista_diag_limpa[:-1]) + " e " + lista_diag_limpa[-1]
        else:
            dados['diagnosticos_texto_corrido'] = ""

        # === SUFIXO PARA REPRESENTANTE ===
        sufixo_rep = "_rep" if dados.get('tem_representante') else ""

        tipo_beneficio = dados.get('tipo_beneficio_escolhido', 'unificado')

        if tipo_beneficio in ['unificado', 'bpc_deficiencia', 'bpc_impedimento', '']:
            if tipo_beneficio == 'bpc_impedimento':
                nome_arquivo_bpc = "bpc_template_impedimento.docx"
            else:
                nome_arquivo_bpc = "bpc_template_unificado.docx"

            documentos_para_gerar = {
                f"INICIAL.docx": f"assets/templates/{nome_arquivo_bpc}",
                f"DECLARAÇÃO DA COMP.docx": "assets/templates/declaracao_renda_template.docx",
                f"PROCURAÇÃO.docx": f"assets/templates/procuracao{sufixo_rep}.docx",
                f"DECLARAÇÃO DE HIP.docx": f"assets/templates/declaracao_hipossuficiencia{sufixo_rep}.docx",
                f"DECLARAÇÃO DE RENUNCIA.docx": f"assets/templates/declaracao_renuncia{sufixo_rep}.docx"
            }
        elif tipo_beneficio.startswith('ms_'):
            documentos_para_gerar = {
                f"MANDADO_DE_SEGURANCA.docx": f"assets/templates/{tipo_beneficio}_template.docx",
                f"PROCURAÇÃO.docx": f"assets/templates/procuracao{sufixo_rep}.docx",
                f"DECLARAÇÃO DE HIP.docx": f"assets/templates/declaracao_hipossuficiencia{sufixo_rep}.docx",
                f"DECLARAÇÃO DE RENUNCIA.docx": f"assets/templates/declaracao_renuncia{sufixo_rep}.docx"
            }
        elif tipo_beneficio == 'auxilio_acidente_conversao':
            documentos_para_gerar = {
                f"INICIAL.docx": f"assets/templates/auxilio_acidente_conversao_template.docx",
                f"PROCURAÇÃO.docx": f"assets/templates/procuracao{sufixo_rep}.docx",
                f"DECLARAÇÃO DE HIP.docx": f"assets/templates/declaracao_hipossuficiencia{sufixo_rep}.docx",
                f"DECLARAÇÃO DE RENUNCIA.docx": f"assets/templates/declaracao_renuncia{sufixo_rep}.docx"
            }
        elif tipo_beneficio == 'auxilio_acidente_aposentadoria':
            documentos_para_gerar = {
                f"INICIAL.docx": f"assets/templates/auxilio_acidente_aposentadoria_template.docx",
                f"PROCURAÇÃO.docx": f"assets/templates/procuracao{sufixo_rep}.docx",
                f"DECLARAÇÃO DE HIP.docx": f"assets/templates/declaracao_hipossuficiencia{sufixo_rep}.docx",
                f"DECLARAÇÃO DE RENUNCIA.docx": f"assets/templates/declaracao_renuncia{sufixo_rep}.docx"
            }
        else:
            documentos_para_gerar = {
                f"INICIAL.docx": f"assets/templates/template_auxilio_doenca_{tipo_beneficio}.docx",
                f"PROCURAÇÃO.docx": f"assets/templates/procuracao{sufixo_rep}.docx",
                f"DECLARAÇÃO DE HIP.docx": f"assets/templates/declaracao_hipossuficiencia{sufixo_rep}.docx",
                f"DECLARAÇÃO DE RENUNCIA.docx": f"assets/templates/declaracao_renuncia{sufixo_rep}.docx"
            }

        try:
            # Gera todos os documentos mapeados em lote
            templates_ausentes = []
            for nome_saida, caminho_template_relativo in documentos_para_gerar.items():
                caminho_template = obter_caminho_raiz(caminho_template_relativo)
                caminho_arquivo_saida = os.path.join(pasta_destino, nome_saida)
 
                if os.path.exists(caminho_template):
                    gerar_documento(caminho_template, caminho_arquivo_saida, dados)
                else:
                    logging.warning("Template %s não encontrado. Pulando...", caminho_template_relativo)
                    templates_ausentes.append(caminho_template_relativo)

            mensagem = f"Sucesso! Os documentos foram gerados em:\n{pasta_destino}"
            if templates_ausentes:
                mensagem += "\n\nATENÇÃO: template(s) não encontrado(s), documento(s) não gerado(s):\n" + "\n".join(templates_ausentes)

            logging.info("Geração concluída em %.1f s", time.time() - inicio)

            # Processa o PDF se houver
            if 'caminho_pdf' in dados and dados['caminho_pdf']:
                processar_pdf(dados['caminho_pdf'], pasta_destino)
                mensagem += "\n\nO Indeferimento foi anexado!"

            if os.name == 'nt':
                os.startfile(pasta_destino)

            return mensagem

        except Exception as e:
            logging.exception("Erro ao gerar arquivos")
            return f"Erro ao gerar arquivos: {str(e)}"

if __name__ == '__main__':
    minha_api = Api()
    html_path = obter_caminho_raiz(os.path.join('src', 'gui_web', 'index.html'))

    webview.create_window(
        'Banco de Petições',
        url=html_path,
        js_api=minha_api,
        width=950,
        height=640,
    )
    webview.start()