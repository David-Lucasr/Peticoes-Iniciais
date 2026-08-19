import os
import sys
import webview
import re
from datetime import datetime
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
        
        # Nome do arquivo de saída seguro
        nome_cliente_bruto = dados.get('nome_cliente', 'Cliente_Sem_Nome').upper()
        nome_cliente_seguro = re.sub(r'[^\w\s-]', '', nome_cliente_bruto).strip()

        # === TRATAMENTO INTELIGENTE DOS DIAGNÓSTICOS PARA TEXTO CORRIDO (TESES) ===
        lista_diag = dados.get('lista_diagnosticos', [])
        # Remove as bolinhas caso venham e limpa os espaços vazios
        lista_diag_limpa = [d.replace('•', '').strip() for d in lista_diag if d.strip()]
        
        if len(lista_diag_limpa) == 1:
            dados['diagnosticos_texto_corrido'] = lista_diag_limpa[0]
        elif len(lista_diag_limpa) > 1:
            dados['diagnosticos_texto_corrido'] = ", ".join(lista_diag_limpa[:-1]) + " e " + lista_diag_limpa[-1]
        else:
            dados['diagnosticos_texto_corrido'] = ""

        # === TRATAMENTO DA DATA ATUAL PARA A DECLARAÇÃO DE RENDA ===
        hoje = datetime.now()
        meses = ["", "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
        dados['dia_atual'] = f"{hoje.day:02d}"
        dados['mes_atual'] = meses[hoje.month]
        dados['ano_atual'] = hoje.year

        # Verifica se a chave de representante está ligada para colocar o sufixo da Inicial
        sufixo_rep = "_rep" if dados.get('tem_representante') else ""
        nome_template = f"bpc_template_unificado{sufixo_rep}.docx"
        
        caminho_template_inicial = obter_caminho_raiz(f"assets/templates/{nome_template}")
        caminho_saida_inicial = os.path.join(pasta_destino, f"INICIAL - {nome_cliente_seguro}.docx")

        # Caminho da Declaração de Renda
        caminho_template_renda = obter_caminho_raiz("assets/templates/declaracao_renda_template.docx")
        caminho_saida_renda = os.path.join(pasta_destino, f"DECLARACAO DA COMPOSIÇÃO E RENDA - {nome_cliente_seguro}.docx")

        try:
            # 1. Gera a Petição Inicial
            gerar_documento(caminho_template_inicial, caminho_saida_inicial, dados)

            # 2. Gera a Declaração de Renda (Se o template existir na pasta)
            if os.path.exists(caminho_template_renda):
                gerar_documento(caminho_template_renda, caminho_saida_renda, dados)
            else:
                print("Aviso: Template de Declaração de Renda não encontrado em assets/templates/.")

            mensagem = f"Sucesso! Arquivos salvos em:\n{pasta_destino}"
            
            # 3. Processa o PDF (se o usuário escolheu um)
            if 'caminho_pdf' in dados and dados['caminho_pdf']:
                processar_pdf(dados['caminho_pdf'], pasta_destino, dados['nome_cliente'])
                mensagem += "\n\nO PA foi anexado!"

            if os.name == 'nt':
                os.startfile(pasta_destino)
                
            return mensagem
            
        except FileNotFoundError:
            return f"Erro: O modelo '{nome_template}' não foi encontrado na pasta assets/templates."
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