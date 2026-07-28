import os
import sys
import webview
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

    # Nova função para abrir a janela escolhendo apenas PDF
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

        sufixo_rep = "_rep" if dados.get('tem_representante', False) else ""
        
        # Monta o nome dinâmico (ex: bpc_deficiencia_rep.docx ou bpc_deficiencia.docx)
        nome_template = f"bpc_{dados['causa']}{sufixo_rep}.docx"
        caminho_relativo_template = f"assets/templates/{nome_template}" 
        
        caminho_template = obter_caminho_raiz(caminho_relativo_template)
        
        pasta_destino = dados['pasta_destino']
        
        nome_arquivo_word = f"Inicial - {dados['nome_cliente']}.docx"
        caminho_saida_word = os.path.join(pasta_destino, nome_arquivo_word)

        try:
            # 1. Gera o Word
            gerar_documento(caminho_template, caminho_saida_word, dados)
            mensagem = f"Sucesso! Arquivos salvos em:\n{pasta_destino}"
            
            # 2. Processa o PDF (se o usuário escolheu um)
            if 'caminho_pdf' in dados and dados['caminho_pdf']:
                processar_pdf(dados['caminho_pdf'], pasta_destino, dados['nome_cliente'])
                mensagem += "\n\nO PA também foi anexado!"
                
            return mensagem
        except FileNotFoundError:
            return f"Erro: O modelo de documento '{nome_template}' não foi encontrado"
        except Exception as e:
            return f"Erro ao gerar arquivos: {str(e)}"
    
if __name__ == '__main__':
    minha_api = Api()
    html_path = obter_caminho_raiz(os.path.join('src', 'gui_web', 'index.html'))

    webview.create_window(
        'Banco de Petições',
        url=html_path,
        js_api=minha_api,
        width=800,
        height=600
    )
    webview.start()