## Build (Gerar o .exe)

### Pré-requisitos

- Python 3.10+
- `pip install pyinstaller pywebview docxtpl PyMuPDF Pillow jinja2`

### Comando

```bash
pyinstaller --noconsole --onefile --name "Banco de Petições" --clean \
  --add-data "src/gui_web;src/gui_web" \
  --add-data "assets;assets" \
  --icon="assets/img/icon.ico" \
  --hidden-import=webview \
  --hidden-import=docxtpl \
  --hidden-import=docx \
  --hidden-import=fitz \
  --hidden-import=jinja2 \
  --hidden-import=PIL \
  app.py   