from docxtpl import DocxTemplate, InlineImage
from docx.shared import Mm
import os
import base64
import tempfile

def converter_para_maiusculo_recursivo(dado, chave_atual=None):
    if isinstance(dado, str):
        texto = dado.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        return texto
    elif isinstance(dado, dict):
        return {k: converter_para_maiusculo_recursivo(v, chave_atual=k) for k, v in dado.items()}
    elif isinstance(dado, list):
        return [converter_para_maiusculo_recursivo(item, chave_atual=chave_atual) for item in dado]
    return dado

def _salvar_imagem_base64_temp(img_base64, arquivos_temp):
    if not img_base64 or not isinstance(img_base64, str):
        return None
    try:
        if ',' in img_base64:
            _, string_img = img_base64.split(',', 1)
        else:
            string_img = img_base64

        # Cria um arquivo temporário seguro no sistema operacional
        fd, caminho_temp = tempfile.mkstemp(suffix=".png")
        os.close(fd)

        with open(caminho_temp, "wb") as f:
            f.write(base64.b64decode(string_img))
            
        arquivos_temp.append(caminho_temp)
        return caminho_temp
    except Exception as e:
        print(f"Aviso ao processar imagem temporária: {e}")
        return None

def processar_lista_imagens(doc, lista_base64, arquivos_temp):
    lista_inline = []
    if lista_base64 and isinstance(lista_base64, list):
        for img_base64 in lista_base64:
            if img_base64:
                caminho_temp = _salvar_imagem_base64_temp(img_base64, arquivos_temp)
                if caminho_temp:
                    lista_inline.append(InlineImage(doc, caminho_temp, width=Mm(150)))
    return lista_inline

def gerar_documento(caminho_template, caminho_saida, dados_formulario):
    doc = DocxTemplate(caminho_template)
    dados_formulario = dict(dados_formulario)
    arquivos_temp = []

    # Processamento seguro de todas as listas de imagens
    dados_formulario['lista_img_renda'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_renda', []), arquivos_temp)
    dados_formulario['lista_img_pericial'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_pericial', []), arquivos_temp)
    dados_formulario['lista_img_laudo'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_laudo', []), arquivos_temp)
    dados_formulario['lista_fotos_casa'] = processar_lista_imagens(doc, dados_formulario.get('fotos_casa', []), arquivos_temp)
    dados_formulario['lista_img_bolsa_familia'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_bolsa_familia', []), arquivos_temp)
    dados_formulario['lista_img_cnis'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_cnis', []), arquivos_temp)
    dados_formulario['lista_img_relatorio_inss'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_relatorio_inss', []), arquivos_temp)
    dados_formulario['lista_img_cadunico'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_cadunico', []), arquivos_temp)
    dados_formulario['lista_img_acidente'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_acidente', []), arquivos_temp)
    dados_formulario['lista_img_laudo_agravamento'] = processar_lista_imagens(doc, dados_formulario.get('lista_img_laudo_agravamento', []), arquivos_temp)

    lista_anexos_medicos = []
    if 'anexos_medicos_dinamicos' in dados_formulario and isinstance(dados_formulario['anexos_medicos_dinamicos'], list):
        for item in dados_formulario['anexos_medicos_dinamicos']:
            if isinstance(item, dict) and item.get('imagem_base64'):
                caminho_temp = _salvar_imagem_base64_temp(item['imagem_base64'], arquivos_temp)
                if caminho_temp:
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
        # Garante a remoção limpa de todos os temporários gerados
        for caminho in arquivos_temp:
            if caminho and os.path.exists(caminho):
                try:
                    os.remove(caminho)
                except Exception:
                    pass

    return True