import fitz
import os

def processar_pdf(pdf_entrada, pasta_destino, nome_cliente):
    if not pdf_entrada:
        return False
        
    caminho_saida = os.path.join(pasta_destino, f"INDEFERIMENTO - {nome_cliente}.pdf")

    doc_original = fitz.open(pdf_entrada)
    doc_novo = fitz.open()

    paginas_alvo = [0, 1, 2] 

    for num_pagina in range(len(doc_original)):
        pagina = doc_original.load_page(num_pagina)
    
        texto = pagina.get_text("text").lower()

        if "caso discorde" in texto:
            print(f"Frase encontrada na página {num_pagina + 1}!")
            if num_pagina not in paginas_alvo:
                paginas_alvo.append(num_pagina)
            break 

    paginas_alvo.sort()

    for num in paginas_alvo:
        if num < len(doc_original):
            doc_novo.insert_pdf(doc_original, from_page=num, to_page=num)

    doc_novo.save(caminho_saida)

    doc_original.close()
    doc_novo.close()

    return True