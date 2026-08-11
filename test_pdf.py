import unittest
import os
import tempfile
import fitz
from src.pdf_processor import processar_pdf

class TestPDFProcessor(unittest.TestCase):
    def setUp(self):
        self.diretorio_temp = tempfile.TemporaryDirectory()
        self.pasta_destino = self.diretorio_temp.name

        self.pdf_entrada = os.path.join(self.pasta_destino, "teste.pdf")

        doc = fitz.open()

        for i in range(5):
            pagina = doc.new_page()
            if i == 3:
                pagina.insert_text((50, 50), "Aviso importante: caso discorde desta decisão, entre com recurso.")
            else:
                pagina.insert_text((50, 50), f"Página irrelevante número {i+1}")

        doc.save(self.pdf_entrada)
        doc.close()

    def tearDown(self):
        self.diretorio_temp.cleanup()

    def test_processar_pdf(self):
        resultado = processar_pdf(self.pdf_entrada, self.pasta_destino, "Cliente Teste")

        self.assertTrue(resultado, "A função deveria resultar True")

        caminho_saida = os.path.join(self.pasta_destino, "PA - Cliente Teste.pdf")
        self.assertTrue(os.path.exists(caminho_saida), "O PDF de saída não foi criado.")

        doc_gerado = fitz.open(caminho_saida)
        self.assertEqual(len(doc_gerado), 4, "O PDF gerado não possui o número correto de páginas.")

        texto_ultima_pagina = doc_gerado.load_page(3).get_text("text").lower()
        self.assertIn("caso discorde", texto_ultima_pagina, "A frase 'caso discorde' não foi encontrada na última página do PDF gerado.")

        doc_gerado.close()

if __name__ == '__main__':
    unittest.main()