from docxtpl import DocxTemplate, InlineImage
from docx.shared import Mm
import os
import base64

def converter_para_maiusculo_recursivo(dado, chave_atual=None):
    if isinstance(dado, str):
        # Protege o XML do Word, mas NÃO altera maiúsculas/minúsculas
        texto = dado.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        return texto
        
    elif isinstance(dado, dict):
        return {k: converter_para_maiusculo_recursivo(v, chave_atual=k) for k, v in dado.items()}
    
    elif isinstance(dado, list):
        return [converter_para_maiusculo_recursivo(item, chave_atual=chave_atual) for item in dado]
    
    return dado

def _salvar_imagem_base64_temp(img_base64, caminho_temp, arquivos_temp):

    if ',' in img_base64:
        _, string_img = img_base64.split(',', 1)
    else:
        string_img = img_base64

    with open(caminho_temp, "wb") as f:
        f.write(base64.b64decode(string_img))
    arquivos_temp.append(caminho_temp)

def processar_lista_imagens(doc, lista_base64, prefixo, arquivos_temp):
    lista_inline = []
    if lista_base64:
        for i, img_base64 in enumerate(lista_base64):
            if img_base64:
                caminho_temp = f"temp_{prefixo}_{i}.png"
                _salvar_imagem_base64_temp(img_base64, caminho_temp, arquivos_temp)
                lista_inline.append(InlineImage(doc, caminho_temp, width=Mm(150)))
    return lista_inline

def gerar_documento(caminho_template, caminho_saida, dados_formulario):
    doc = DocxTemplate(caminho_template)

    dados_formulario = dict(dados_formulario)

    arquivos_temp = []

    dados_formulario['lista_img_renda'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_renda', []), 'renda', arquivos_temp)
    dados_formulario['lista_img_pericial'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_pericial', []), 'pericial', arquivos_temp)
    dados_formulario['lista_img_laudo'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_laudo', []), 'laudo', arquivos_temp)
    dados_formulario['lista_fotos_casa'] = processar_lista_imagens(doc, dados_formulario.get('fotos_casa', []), 'casa', arquivos_temp)
    dados_formulario['lista_img_coisa_julgada'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_coisa_julgada', []), 'cj', arquivos_temp)
    dados_formulario['lista_img_bolsa_familia'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_bolsa_familia', []), 'bolsa', arquivos_temp)
    dados_formulario['lista_img_cnis'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_cnis', []), 'cnis', arquivos_temp)
    dados_formulario['lista_img_relatorio_inss'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_relatorio_inss', []), 'inss_erro', arquivos_temp)
    dados_formulario['lista_img_cadunico'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_cadunico', []), 'cadunico', arquivos_temp)

    lista_anexos_medicos = []
    if 'anexos_medicos_dinamicos' in dados_formulario:
        for i, item in enumerate(dados_formulario['anexos_medicos_dinamicos']):
            if item.get('imagem_base64'):
                caminho_temp = f"temp_med_{i}.png"
                _salvar_imagem_base64_temp(item['imagem_base64'], caminho_temp, arquivos_temp)

                lista_anexos_medicos.append({
                    'titulo': item.get('titulo', ''),
                    'imagem': InlineImage(doc, caminho_temp, width=Mm(150))
                })
    dados_formulario['lista_anexos_medicos'] = lista_anexos_medicos

    dados_formulario = converter_para_maiusculo_recursivo(dados_formulario)

    try:
        doc.render(dados_formulario)
        doc.save(caminho_saida)
    finally:
        for caminho in arquivos_temp:
            if os.path.exists(caminho):                    
                os.remove(caminho)

    return True