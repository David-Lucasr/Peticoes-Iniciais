from docxtpl import DocxTemplate, InlineImage
from docx.shared import Mm
import os
import base64

def gerar_documento(caminho_template, caminho_saida, dados_formulario):
    doc = DocxTemplate(caminho_template)
    arquivos_temp = []

    # 1. Processando Imagens Únicas (Renda, Perícia, Laudo, etc.)
    if 'imagens_categorizadas' in dados_formulario:
        for chave, img_base64 in dados_formulario['imagens_categorizadas'].items():
            if img_base64:
                formato, string_img = img_base64.split(',', 1)
                caminho_temp = f"temp_{chave}.png"
                with open(caminho_temp, "wb") as f:
                    f.write(base64.b64decode(string_img))
                arquivos_temp.append(caminho_temp)
                dados_formulario[chave] = InlineImage(doc, caminho_temp, width=Mm(150))

    # 2. NOVO: Processando a Lista Dinâmica de Documentos Médicos
    lista_anexos_medicos = []
    if 'anexos_medicos_dinamicos' in dados_formulario:
        for i, item in enumerate(dados_formulario['anexos_medicos_dinamicos']):
            if item['imagem_base64']:
                formato, string_img = item['imagem_base64'].split(',', 1)
                caminho_temp = f"temp_med_{i}.png"
                with open(caminho_temp, "wb") as f:
                    f.write(base64.b64decode(string_img))
                arquivos_temp.append(caminho_temp)

                lista_anexos_medicos.append({
                    'titulo': item['titulo'],
                    'imagem': InlineImage(doc, caminho_temp, width=Mm(150))
                })
    dados_formulario['lista_anexos_medicos'] = lista_anexos_medicos

    # 3. NOVO: Processando a Lista de Fotos da Casa
    lista_fotos_casa = []
    if 'fotos_casa' in dados_formulario:
        for i, img_base64 in enumerate(dados_formulario['fotos_casa']):
            if img_base64:
                formato, string_img = img_base64.split(',', 1)
                caminho_temp = f"temp_casa_{i}.png"
                with open(caminho_temp, "wb") as f:
                    f.write(base64.b64decode(string_img))
                arquivos_temp.append(caminho_temp)
                lista_fotos_casa.append(InlineImage(doc, caminho_temp, width=Mm(150)))
                
    dados_formulario['lista_fotos_casa'] = lista_fotos_casa

    try:
        doc.render(dados_formulario)
        doc.save(caminho_saida)
    finally:
        for caminho in arquivos_temp:
            if os.path.exists(caminho):                    
                os.remove(caminho)

    return True