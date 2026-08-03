from docxtpl import DocxTemplate, InlineImage
from docx.shared import Mm
import os
import base64

def converter_para_maiusculo_recursivo(dado, chave_atual=None):
    chaves_excecao = {
        'intro_lei_deficiencia', 
        'citacao_lei_deficiencia', 
        'detalhes_laudo'
    }
    
    if isinstance(dado, str):
        if chave_atual in chaves_excecao:
            return dado
        return dado.upper()
    elif isinstance(dado, dict):
        return {k: converter_para_maiusculo_recursivo(v, chave_atual=k) for k, v in dado.items()}
    elif isinstance(dado, list):
        return [converter_para_maiusculo_recursivo(item, chave_atual=chave_atual) for item in dado]
    return dado

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

    # 2. Processando a Lista Dinâmica de Documentos Médicos
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

    # 3. Processando a Lista de Fotos da Casa
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

    # GARANTIA TOTAL: Converte absolutamente todos os campos de texto do JSON para MAIÚSCULO
    dados_formulario = converter_para_maiusculo_recursivo(dados_formulario)

    try:
        doc.render(dados_formulario)
        doc.save(caminho_saida)
    finally:
        for caminho in arquivos_temp:
            if os.path.exists(caminho):                    
                os.remove(caminho)

    return True