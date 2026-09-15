import os
import sys
import webview
import re
from src.word_processor import gerar_documento
from src.pdf_processor import processar_pdf

def obter_caminho_raiz(caminho_relativo):
    if hasattr(sys, '_MEIPASS'):
        return os.path.join(sys._MEIPASS, caminho_relativo)
    return os.path.join(os.path.abspath("."), caminho_relativo)

class Api:
    def escolher_pasta(self):
        resultado = webview.windows[0].create_file_dialog(webview.FileDialog.FOLDER)
        if resultado:
            return resultado[0]
        return None

    def escolher_pdf(self):
        arquivos = webview.windows[0].create_file_dialog(
            webview.FileDialog.OPEN, 
            allow_multiple=False, 
            file_types=('Arquivos PDF (*.pdf)',)
        )
        if arquivos:
            return arquivos[0]
        return None

    def gerar_formulario(self, dados):
        print(f"Dados recebidos do JS: {dados}")

        if not dados or 'pasta_destino' not in dados or not dados['pasta_destino']:
            return "Erro: A pasta de destino é obrigatória e não foi enviada pelo formulário."

        pasta_destino = dados['pasta_destino']
   
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
        
        if tipo_beneficio == 'unificado':
            documentos_para_gerar = {
                f"INICIAL.docx": f"assets/templates/bpc_template_unificado{sufixo_rep}.docx",
                f"DECLARAÇÃO DA COMP.docx": "assets/templates/declaracao_renda_template.docx",
                f"PROCURAÇÃO.docx": f"assets/templates/procuracao{sufixo_rep}.docx",
                f"DECLARAÇÃO DE HIP.docx": f"assets/templates/declaracao_hipossuficiencia{sufixo_rep}.docx",
                f"DECLARAÇÃO DE RENUNCIA.docx": f"assets/templates/declaracao_renuncia{sufixo_rep}.docx"
            }
        else:
            # Rota para os benefícios de Auxílio-Doença (facultativo, contribuinte_individual, etc)
            documentos_para_gerar = {
                f"INICIAL.docx": f"assets/templates/template_auxilio_doenca_{tipo_beneficio}.docx",
                f"PROCURAÇÃO.docx": f"assets/templates/procuracao{sufixo_rep}.docx",
                f"DECLARAÇÃO DE HIP.docx": f"assets/templates/declaracao_hipossuficiencia{sufixo_rep}.docx",
                f"DECLARAÇÃO DE RENUNCIA.docx": f"assets/templates/declaracao_renuncia{sufixo_rep}.docx"
            }

        try:
            # Gera todos os documentos mapeados em lote
            for nome_saida, caminho_template_relativo in documentos_para_gerar.items():
                caminho_template = obter_caminho_raiz(caminho_template_relativo)
                caminho_arquivo_saida = os.path.join(pasta_destino, nome_saida)

                if os.path.exists(caminho_template):
                    gerar_documento(caminho_template, caminho_arquivo_saida, dados)
                else:
                    print(f"Aviso: Template {caminho_template_relativo} não encontrado. Pulando...")

            mensagem = f"Sucesso! Os documentos foram gerados em:\n{pasta_destino}"
            
            # Processa o PDF se houver
            if 'caminho_pdf' in dados and dados['caminho_pdf']:
                processar_pdf(dados['caminho_pdf'], pasta_destino, nome_cliente_seguro)
                mensagem += "\n\nO Indeferimento foi anexado!"

            if os.name == 'nt':
                os.startfile(pasta_destino)
                
            return mensagem
            
        except Exception as e:
            return f"Erro ao gerar arquivos: {str(e)}"
    
if __name__ == '__main__':
    minha_api = Api()
    html_path = obter_caminho_raiz(os.path.join('src', 'gui_web', 'index.html'))

    webview.create_window(
        'Banco de Petições',
        url=html_path,
        js_api=minha_api,
        width=950,
        height=600,
    )
    webview.start()