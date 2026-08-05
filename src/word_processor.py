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

def processar_lista_imagens(doc, lista_base64, prefixo, arquivos_temp):
    lista_inline = []
    if lista_base64:
        for i, img_base64 in enumerate(lista_base64):
            if img_base64:
                if ',' in img_base64:
                    formato, string_img = img_base64.split(',', 1)
                else:
                    string_img = img_base64
                    
                caminho_temp = f"temp_{prefixo}_{i}.png"
                with open(caminho_temp, "wb") as f:
                    f.write(base64.b64decode(string_img))
                arquivos_temp.append(caminho_temp)
                
                lista_inline.append(InlineImage(doc, caminho_temp, width=Mm(150)))
    return lista_inline

def gerar_documento(caminho_template, caminho_saida, dados_formulario):
    doc = DocxTemplate(caminho_template)
    arquivos_temp = []

    # 1. Processando todas as listas de imagens gerais dinamicamente
    dados_formulario['lista_img_renda'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_renda', []), 'renda', arquivos_temp)
    dados_formulario['lista_img_pericial'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_pericial', []), 'pericial', arquivos_temp)
    dados_formulario['lista_img_laudo'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_laudo', []), 'laudo', arquivos_temp)
    dados_formulario['lista_fotos_casa'] = processar_lista_imagens(doc, dados_formulario.get('fotos_casa', []), 'casa', arquivos_temp)
    dados_formulario['lista_img_coisa_julgada'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_coisa_julgada', []), 'cj', arquivos_temp)

    # 2. Processando a Lista Dinâmica de Documentos Médicos (que possui títulos)
    lista_anexos_medicos = []
    if 'anexos_medicos_dinamicos' in dados_formulario:
        for i, item in enumerate(dados_formulario['anexos_medicos_dinamicos']):
            if item.get('imagem_base64'):
                if ',' in item['imagem_base64']:
                    formato, string_img = item['imagem_base64'].split(',', 1)
                else:
                    string_img = item['imagem_base64']
                    
                caminho_temp = f"temp_med_{i}.png"
                with open(caminho_temp, "wb") as f:
                    f.write(base64.b64decode(string_img))
                arquivos_temp.append(caminho_temp)

                lista_anexos_medicos.append({
                    'titulo': item.get('titulo', ''),
                    'imagem': InlineImage(doc, caminho_temp, width=Mm(150))
                })
    dados_formulario['lista_anexos_medicos'] = lista_anexos_medicos

    # 3. Converte os textos para Maiúsculo
    dados_formulario = converter_para_maiusculo_recursivo(dados_formulario)

    try:
        doc.render(dados_formulario)
        doc.save(caminho_saida)
    finally:
        for caminho in arquivos_temp:
            if os.path.exists(caminho):                    
                os.remove(caminho)

    return True