import unittest
import os
from app import Api
from unittest.mock import patch
from src.word_processor import converter_para_maiusculo_recursivo

class TestWordProcessor(unittest.TestCase):
    def test_conversao_texto_simples(self):
        dado = "joão da silva"

        resultado = converter_para_maiusculo_recursivo(dado)
        self.assertEqual(resultado, "JOÃO DA SILVA")

    def test_conversao_dicionario(self):
        dados = {
            "nome_cliente": "maria souza",
            "detalhes_laudo": "Exame realizado"
        }
        resultado = converter_para_maiusculo_recursivo(dados)
        self.assertEqual(resultado["nome_cliente"], "MARIA SOUZA")
        self.assertEqual(resultado["detalhes_laudo"], "Exame realizado")

    def test_conversao_lista(self):
        dados = ["rua das flores", "centro"]

        resultado = converter_para_maiusculo_recursivo(dados)
        self.assertEqual(resultado[0], "RUA DAS FLORES")
        self.assertEqual(resultado[1], "CENTRO")

class TestSegurancaApi(unittest.TestCase):
    @patch('app.gerar_documento')
    def test_prevencao_path_tranversal(self, mock_gerar_documento):
        api = Api()

        pasta_segura = "/pasta/destino/segura"
        dados = {
            "nome_cliente": "../../../Windows/System32/cmd.exe",
            "pasta_destino": pasta_segura,
            "tem_representante": False
        }

        api.gerar_formulario(dados)

        args = mock_gerar_documento.call_args[0]
        caminho_salvamento = args[1]

        nome_esperado = "INICIAL - WINDOWSSYSTEM32CMDEXE.docx"
        caminho_esperado = os.path.join(pasta_segura, nome_esperado)

        self.assertEqual(caminho_salvamento, caminho_esperado, f"\nVulnerabilidade: O sitstema tentou salvar em: \n{caminho_salvamento}")

    def test_frontend(self):
        api = Api()

        dados_incompletos = {}

        resultado = api.gerar_formulario(dados_incompletos)

        self.assertIn("Erro: A pasta de destino é obrigatória", resultado, "A API deveria ter validado a falta")


if __name__ == '__main__':
    unittest.main()