// =========================================================
// 0. REGISTRO GLOBAL DE ERROS (grava em erro.log pelo Python)
// =========================================================
function registrarErroJs(origem, erro) {
    try {
        const msg = (erro && erro.stack) ? erro.stack : String(erro);
        console.error('[' + origem + ']', erro);
        if (window.pywebview && window.pywebview.api && window.pywebview.api.registrar_erro_js) {
            window.pywebview.api.registrar_erro_js(origem, msg);
        }
    } catch (e) { /* o registro de erros nunca deve causar outro erro */ }
}

window.addEventListener('error', function(e) {
    registrarErroJs('window.onerror', (e.error || e.message) + ' @ linha ' + e.lineno);
});

window.addEventListener('unhandledrejection', function(e) {
    registrarErroJs('promessa não tratada', e.reason);
});

// =========================================================
// 1. GERENCIADOR DE TESES E MODO DE TELA
// =========================================================
function atualizarTeses() {

    const isAcidenteTrabalho = document.getElementById('chkAcidenteTrabalho') ? document.getElementById('chkAcidenteTrabalho').checked : false;
    const isTermoInicial = document.getElementById('chkTermoInicial') ? document.getElementById('chkTermoInicial').checked : false;

    const blocoTermoInicial = document.getElementById('blocoTermoInicial');
    if (blocoTermoInicial) blocoTermoInicial.style.display = isTermoInicial ? 'block' : 'none';

    const isAux = document.getElementById('telaFormulario') && document.getElementById('telaFormulario').classList.contains('modo-aux_doenca');

    // --- 1. CAPTURA DOS ESTADOS (ISOLAMENTO SEGURO) ---
    const isCoisaJulgada = isAux ? 
        (document.getElementById('chkCoisaJulgadaAux') && document.getElementById('chkCoisaJulgadaAux').checked) : 
        (document.getElementById('chkCoisaJulgada') && document.getElementById('chkCoisaJulgada').checked);

    const isPrioridade = isAux ? 
        (document.getElementById('chkPrioridadeAux') && document.getElementById('chkPrioridadeAux').checked) : 
        (document.getElementById('chkPrioridade') && document.getElementById('chkPrioridade').checked);

    // Exclusivos BPC (Deficiência)
    const isPericiaJudicial = document.getElementById('chkPericiaJudicial') ? document.getElementById('chkPericiaJudicial').checked : false;
    const isJulgamentoAntecipado = document.getElementById('chkJulgamentoAntecipado') ? document.getElementById('chkJulgamentoAntecipado').checked : false;
    const isProvaEmprestada = document.getElementById('chkProvaEmprestada') ? document.getElementById('chkProvaEmprestada').checked : false;
    const isFixacaoDib = document.getElementById('chkFixacaoDib') ? document.getElementById('chkFixacaoDib').checked : false;
    const isReafirmacaoDer = document.getElementById('chkReafirmacaoDer') ? document.getElementById('chkReafirmacaoDer').checked : false;

    // Exclusivos BPC (Renda)
    const isFlexibilizacao = document.getElementById('chkFlexibilizacaoRenda') ? document.getElementById('chkFlexibilizacaoRenda').checked : false;
    const isDespesas = document.getElementById('chkDespesasFamiliares') ? document.getElementById('chkDespesasFamiliares').checked : false;
    const isBolsaFamilia = document.getElementById('chkBolsaFamilia') ? document.getElementById('chkBolsaFamilia').checked : false;
    const isEquivoco = document.getElementById('chkEquivocoRenda') ? document.getElementById('chkEquivocoRenda').checked : false;

    // Exclusivos Auxílio-Doença
    const isRestabelecimento = document.getElementById('chkRestabelecimento') ? document.getElementById('chkRestabelecimento').checked : false;
    const isBeneficioAnterior = document.getElementById('chkBeneficioAnterior') ? document.getElementById('chkBeneficioAnterior').checked : false;
    const isAtestmed = document.getElementById('chkAtestmed') ? document.getElementById('chkAtestmed').checked : false;
    const isAtestmedLaudo = document.getElementById('chkAtestmedLaudo') ? document.getElementById('chkAtestmedLaudo').checked : false;


    // --- 2. APLICAÇÃO DA EXIBIÇÃO DOS BLOCOS (DISPLAY) ---
    const blocoPrioridade = document.getElementById('blocoPrioridade');
    if (blocoPrioridade) blocoPrioridade.style.display = (isPrioridade && !isAux) ? 'block' : 'none'; 

    const blocoCoisaJulgada = document.getElementById('blocoCoisaJulgada');
    if (blocoCoisaJulgada) blocoCoisaJulgada.style.display = isCoisaJulgada ? 'block' : 'none';

    // Blocos Exclusivos BPC (Deficiência e Renda)
    const blocoPericiaJudicial = document.getElementById('blocoPericiaJudicial');
    if (blocoPericiaJudicial) blocoPericiaJudicial.style.display = isPericiaJudicial ? 'block' : 'none';
    
    const blocoJulgamento = document.getElementById('blocoJulgamentoAntecipado');
    if (blocoJulgamento) blocoJulgamento.style.display = isJulgamentoAntecipado ? 'block' : 'none';

    const blocoProvaEmprestada = document.getElementById('blocoProvaEmprestada');
    if (blocoProvaEmprestada) blocoProvaEmprestada.style.display = isProvaEmprestada ? 'block' : 'none';

    const blocoFixacaoDib = document.getElementById('blocoFixacaoDib');
    if (blocoFixacaoDib) blocoFixacaoDib.style.display = isFixacaoDib ? 'block' : 'none';

    const blocoReafirmacaoDer = document.getElementById('blocoReafirmacaoDer');
    if (blocoReafirmacaoDer) blocoReafirmacaoDer.style.display = isReafirmacaoDer ? 'block' : 'none';

    const blocoFlex = document.getElementById('blocoFlexibilizacaoRenda');
    if (blocoFlex) blocoFlex.style.display = isFlexibilizacao ? 'block' : 'none';

    const blocoDesp = document.getElementById('blocoDespesasFamiliares');
    if (blocoDesp) blocoDesp.style.display = isDespesas ? 'block' : 'none';

    const blocoBolsa = document.getElementById('blocoBolsaFamilia');
    if (blocoBolsa) blocoBolsa.style.display = isBolsaFamilia ? 'block' : 'none';

    const blocoEquivoco = document.getElementById('blocoEquivocoRenda');
    if (blocoEquivoco) blocoEquivoco.style.display = isEquivoco ? 'block' : 'none';


    // Blocos Exclusivos Auxílio-Doença
    const blocoRestabelecimento = document.getElementById('blocoRestabelecimento');
    if (blocoRestabelecimento) blocoRestabelecimento.style.display = isRestabelecimento ? 'block' : 'none';

    const blocoBeneficioAnterior = document.getElementById('blocoBeneficioAnterior');
    if (blocoBeneficioAnterior) blocoBeneficioAnterior.style.display = isBeneficioAnterior ? 'block' : 'none';

    const blocoAtestmed = document.getElementById('blocoAtestmed');
    if (blocoAtestmed) blocoAtestmed.style.display = (isAtestmed || isAtestmedLaudo) ? 'block' : 'none';

    const isIncapacidadeAnterior = document.getElementById('chkIncapacidadeAnterior') ? document.getElementById('chkIncapacidadeAnterior').checked : false;
    const blocoIncapacidadeAnterior = document.getElementById('blocoIncapacidadeAnterior');
    if (blocoIncapacidadeAnterior) blocoIncapacidadeAnterior.style.display = isIncapacidadeAnterior ? 'block' : 'none';
}

function alternarHipoteseJulgamento() {
    const isReconhecida = document.getElementById('radHipReconhecida') && document.getElementById('radHipReconhecida').checked;
    const isNotoria = document.getElementById('radHipNotoria') && document.getElementById('radHipNotoria').checked;
    
    const camposReconhecida = document.getElementById('camposHipReconhecida');
    const camposNotoria = document.getElementById('camposHipNotoria');
    
    if (camposReconhecida) camposReconhecida.style.display = isReconhecida ? 'grid' : 'none';
    if (camposNotoria) camposNotoria.style.display = isNotoria ? 'grid' : 'none';
}

window.onload = atualizarTeses;

// =========================================================
// 2. LÓGICA DO CHECKBOX DO REPRESENTANTE E SINCRONIZAÇÃO DE RG
// =========================================================
function alternarRepresentante() {
    const checkbox = document.getElementById('temRepresentante');
    const grupo = document.getElementById('grupoRepresentante');
    
    if (checkbox.checked) {
        grupo.style.display = 'grid'; 
    } else {
        grupo.style.display = 'none';
        document.getElementById('nomeRepresentante').value = '';
        document.getElementById('cpfRepresentante').value = '';
        document.getElementById('rgRepresentante').value = '';
        document.getElementById('nacionalidadeRepresentante').value = '';
        document.getElementById('estadoCivilRepresentante').value = '';
        if (document.getElementById('parentescoRepresentante')) document.getElementById('parentescoRepresentante').value = '';
        
        if (document.getElementById('numeroProcessoInterdicaoAux')) document.getElementById('numeroProcessoInterdicaoAux').value = '';
        if (document.getElementById('comarcaInterdicaoAux')) document.getElementById('comarcaInterdicaoAux').value = '';

        const cbRgRep = document.getElementById('rgNovoRep');
        if (cbRgRep) cbRgRep.checked = false;
        sincronizarRgCpf('Representante');

        document.getElementById('cpfRepresentante').classList.remove('campo-invalido', 'campo-valido');
    }
    
    if (typeof sincronizarFamiliar2 === "function") {
        sincronizarFamiliar2();
    }
}

function sincronizarRgCpf(tipo) {
    const checkbox = document.getElementById(tipo === 'Cliente' ? 'rgNovoCliente' : 'rgNovoRep');
    const inputCpf = document.getElementById(tipo === 'Cliente' ? 'cpfCliente' : 'cpfRepresentante');
    const inputRg = document.getElementById(tipo === 'Cliente' ? 'rgCliente' : 'rgRepresentante');

    if (checkbox && checkbox.checked) {
        inputRg.value = inputCpf.value;
        inputRg.readOnly = true;
        inputRg.style.backgroundColor = 'var(--surface-3)';
        inputRg.style.opacity = '0.7';
    } else {
        if (inputRg.readOnly) inputRg.value = "";
        inputRg.readOnly = false;
        inputRg.style.backgroundColor = 'var(--surface-2)';
        inputRg.style.opacity = '1';
    }
}

// =========================================================
// 3. GESTÃO DE IMAGENS
// =========================================================
function escaparHtml(texto) {
    if (!texto) return "";
    return String(texto)
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

let imgBolsaFamilia = [];
let imgCnis = [];
let imgRelatorioInss = [];
let imgCadunico = [];
let imgRenda = [];
let imgPericial = [];
let imgLaudo = [];
let anexosMedicos = [];
let fotosCasa = [];
let imgAcidente = [];
let imgLaudoAgravamento = [];
let contadorId = 0;
let caixaAtivaParaColar = null;

function selecionarCaixa(chave){
    caixaAtivaParaColar = chave;
    
    ['img_renda', 'img_pericial', 'img_laudo', 'img_acidente', 'img_laudo_agravamento', 'anexos_medicos', 'fotos_casa', 'img_bolsa_familia', 'img_cnis', 'img_relatorio_inss', 'img_cadunico'].forEach(c => {
        const divCaixa = document.getElementById('caixa_' + c);
        if (divCaixa) divCaixa.style.border = "1px dashed var(--border)";
    });

    const divAtiva = document.getElementById('caixa_' + chave);
    if(divAtiva) {
        if(chave === 'anexos_medicos') divAtiva.style.border = "3px solid var(--success)";
        else if(chave === 'fotos_casa') divAtiva.style.border = "3px solid var(--info)";
        else divAtiva.style.border = "3px solid var(--accent)";
    }
}

document.addEventListener('paste', function(evento) {
    if (!caixaAtivaParaColar) return;

    const itens = (evento.clipboardData || evento.originalEvent.clipboardData).items;
    for (let i = 0; i < itens.length; i++) {
        if (itens[i].type.indexOf("image") === 0) {
            const arquivoBlob = itens[i].getAsFile();

            if (!arquivoBlob || !(arquivoBlob instanceof Blob)) {
                continue;
            } 

            const leitor = new FileReader();

            leitor.onload = function(eventoLeitura) {
                const base64 = eventoLeitura.target.result;

                if (caixaAtivaParaColar === 'img_renda') {
                    imgRenda.push({ id: contadorId++, base64: base64 });
                    renderizarGaleria('galeria_img_renda', imgRenda, 'img_renda');
                } else if (caixaAtivaParaColar === 'img_pericial') {
                    imgPericial.push({ id: contadorId++, base64: base64 });
                    renderizarGaleria('galeria_img_pericial', imgPericial, 'img_pericial');
                } else if (caixaAtivaParaColar === 'img_laudo') {
                    imgLaudo.push({ id: contadorId++, base64: base64 });
                    renderizarGaleria('galeria_img_laudo', imgLaudo, 'img_laudo');
                } else if (caixaAtivaParaColar === 'anexos_medicos') {
                    anexosMedicos.push({ id: contadorId++, base64: base64, titulo: "Documento Médico" });
                    renderizarGaleria('galeria_anexos_medicos', anexosMedicos, 'medicos');
                } else if (caixaAtivaParaColar === 'fotos_casa') {
                    fotosCasa.push({ id: contadorId++, base64: base64 });
                    renderizarGaleria('galeria_fotos_casa', fotosCasa, 'casa');
                } else if (caixaAtivaParaColar === 'img_bolsa_familia') {
                    imgBolsaFamilia.push({ id: contadorId++, base64: base64 });
                    renderizarGaleria('galeria_img_bolsa_familia', imgBolsaFamilia, 'img_bolsa_familia');
                } else if (caixaAtivaParaColar === 'img_cnis') {
                    imgCnis.push({ id: contadorId++, base64: base64 });
                    renderizarGaleria('galeria_img_cnis', imgCnis, 'img_cnis');
                } else if (caixaAtivaParaColar === 'img_relatorio_inss') {
                    imgRelatorioInss.push({ id: contadorId++, base64: base64 });
                    renderizarGaleria('galeria_img_relatorio_inss', imgRelatorioInss, 'img_relatorio_inss');
                } else if (caixaAtivaParaColar === 'img_cadunico') {
                    imgCadunico.push({ id: contadorId++, base64: base64 });
                    renderizarGaleria('galeria_img_cadunico', imgCadunico, 'img_cadunico');
                } else if (caixaAtivaParaColar === 'img_acidente') {
                    imgAcidente.push({ id: contadorId++, base64: base64 });
                    renderizarGaleria('galeria_img_acidente', imgAcidente, 'img_acidente');
                } else if (caixaAtivaParaColar === 'img_laudo_agravamento') {
                    imgLaudoAgravamento.push({ id: contadorId++, base64: base64 });
                    renderizarGaleria('galeria_img_laudo_agravamento', imgLaudoAgravamento, 'img_laudo_agravamento');
                }
            };
            leitor.readAsDataURL(arquivoBlob);
        }
    }
});

function renderizarGaleria(idContainer, arrayDados, tipo) {
    const container = document.getElementById(idContainer);
    if(!container) return;
    container.innerHTML = "";

    arrayDados.forEach(item => {
        const card = document.createElement('div');
        card.className = 'gallery-card';

        let tituloSeguro = escaparHtml(item.titulo);
        let htmlInput = tipo === 'medicos' 
            ? `<input type="text" placeholder="Ex: Receita" value="${tituloSeguro}" onchange="atualizarTitulo(${item.id}, this.value)" onclick="event.stopPropagation();">` 
            : '';

        card.innerHTML = `
            <img src="${item.base64}">
            ${htmlInput}
            <button class="btn-remove" onclick="removerItem(${item.id}, '${tipo}'); event.stopPropagation();">Remover</button>
        `;
        container.appendChild(card);
    });
}

function atualizarTitulo(id, novoTitulo) {
    const index = anexosMedicos.findIndex(doc => doc.id === id);
    if (index !== -1) anexosMedicos[index].titulo = novoTitulo;
}

function removerItem(id, tipo) {
    if (tipo === 'img_renda') {
        imgRenda = imgRenda.filter(i => i.id !== id);
        renderizarGaleria('galeria_img_renda', imgRenda, tipo);
    } else if (tipo === 'img_pericial') {
        imgPericial = imgPericial.filter(i => i.id !== id);
        renderizarGaleria('galeria_img_pericial', imgPericial, tipo);
    } else if (tipo === 'img_laudo') {
        imgLaudo = imgLaudo.filter(i => i.id !== id);
        renderizarGaleria('galeria_img_laudo', imgLaudo, tipo);
    } else if (tipo === 'medicos') {
        anexosMedicos = anexosMedicos.filter(i => i.id !== id);
        renderizarGaleria('galeria_anexos_medicos', anexosMedicos, tipo);
    } else if (tipo === 'casa') {
        fotosCasa = fotosCasa.filter(i => i.id !== id);
        renderizarGaleria('galeria_fotos_casa', fotosCasa, tipo);
    } else if (tipo === 'img_bolsa_familia') {
        imgBolsaFamilia = imgBolsaFamilia.filter(i => i.id !== id);
        renderizarGaleria('galeria_img_bolsa_familia', imgBolsaFamilia, tipo);
    } else if (tipo === 'img_cnis') {
        imgCnis = imgCnis.filter(i => i.id !== id);
        renderizarGaleria('galeria_img_cnis', imgCnis, tipo);
    } else if (tipo === 'img_relatorio_inss') {
        imgRelatorioInss = imgRelatorioInss.filter(i => i.id !== id);
        renderizarGaleria('galeria_img_relatorio_inss', imgRelatorioInss, tipo);
    } else if (tipo === 'img_cadunico') {
        imgCadunico = imgCadunico.filter(i => i.id !== id);
        renderizarGaleria('galeria_img_cadunico', imgCadunico, tipo);
    } else if (tipo === 'img_acidente') {
        imgAcidente = imgAcidente.filter(i => i.id !== id);
        renderizarGaleria('galeria_img_acidente', imgAcidente, tipo);
    } else if (tipo === 'img_laudo_agravamento') {
        imgLaudoAgravamento = imgLaudoAgravamento.filter(i => i.id !== id);
        renderizarGaleria('galeria_img_laudo_agravamento', imgLaudoAgravamento, tipo);
    }
}

// =========================================================
// 4. SELEÇÃO DE ARQUIVOS (PDF)
// =========================================================
let caminhoPdfAtual = "";

async function selecionarPdf() {
    try {
        const caminho = await pywebview.api.escolher_pdf();
        if (caminho) {
            caminhoPdfAtual = caminho;
            document.getElementById('label_pdf').innerText = "PDF Selecionado: " + caminho;
        }
    } catch (erro) {
        registrarErroJs('selecionarPdf', erro);
        alert("Não foi possível selecionar o PDF: " + erro);
    }
}

// =========================================================
// 5. ENVIO PARA O PYTHON
// =========================================================
async function enviarDados() {
    try {
        await enviarDadosInterno();
    } catch (erro) {
        registrarErroJs('enviarDados', erro);
        alert("Ocorreu um erro ao gerar a petição: " + (erro && erro.message ? erro.message : erro));
    } finally {
        document.body.style.cursor = 'default';
    }
}

async function enviarDadosInterno() {
    const isAux = document.getElementById('telaFormulario') && document.getElementById('telaFormulario').classList.contains('modo-aux_doenca');
    const isBpc = !!(document.getElementById('telaFormulario') && document.getElementById('telaFormulario').classList.contains('modo-bpc'));
    const isAcidente = !!(document.getElementById('telaFormulario') && document.getElementById('telaFormulario').classList.contains('modo-aux_acidente'));
    // Só considera marcada a tese cujo painel pertence ao modo atual
    const chk = (id, ativo) => !!ativo && !!(document.getElementById(id) && document.getElementById(id).checked);

    const elementoCpfCliente = document.getElementById('cpfCliente');
    if (elementoCpfCliente.classList.contains('campo-invalido')) {
        alert("⚠️ O CPF do Requerente está inválido! Por favor, corrija antes de gerar a petição.");
        elementoCpfCliente.focus(); 
        return; 
    }

    const possuiRep = document.getElementById('temRepresentante').checked;
    const elementoCpfRep = document.getElementById('cpfRepresentante');
    if (!isAux && possuiRep && elementoCpfRep.classList.contains('campo-invalido')) {
        alert("⚠️ O CPF do Representante está inválido! Por favor, corrija antes de gerar a petição.");
        elementoCpfRep.focus();
        return; 
    }
    
    const pastaSelecionada = await pywebview.api.escolher_pasta();
    if (!pastaSelecionada) {
        alert("Você precisa escolher uma pasta de destino!");
        return;
    }

    const cpfCliente = elementoCpfCliente.value;
    const cpfRep = elementoCpfRep.value;

    let rgClienteFinal = document.getElementById('rgCliente').value.trim();
    if (rgClienteFinal === "") rgClienteFinal = "______________";

    let rgRepresentanteFinal = possuiRep && document.getElementById('rgRepresentante') ? document.getElementById('rgRepresentante').value.trim() : "";
    if (possuiRep && rgRepresentanteFinal === "") rgRepresentanteFinal = "______________";

    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const uf = document.getElementById('uf').value;
    const cep = document.getElementById('cep').value;
    const enderecoMontado = `${rua}, nº ${numero}, ${bairro}, ${cidade}/${uf} - CEP: ${cep}`;

    const enderecoInssMontado = document.getElementById('enderecoInss') ? document.getElementById('enderecoInss').value : "";

    const valorDigitado = document.getElementById('valorCausa').value;
    const valorExtenso = valorParaExtenso(valorDigitado); 
    
    let valorCausaFinal = valorDigitado;
    if (valorDigitado && valorExtenso) {
        valorCausaFinal = `${valorDigitado} (${valorExtenso})`;
    }

    let payloadFamilia = {};
    for(let i=1; i<=9; i++) {
        payloadFamilia[`fam_${i}_nome`] = document.getElementById(`fam_${i}_nome`) ? document.getElementById(`fam_${i}_nome`).value : "";
        payloadFamilia[`fam_${i}_parentesco`] = document.getElementById(`fam_${i}_parentesco`) ? document.getElementById(`fam_${i}_parentesco`).value : "";
        payloadFamilia[`fam_${i}_nasc`] = document.getElementById(`fam_${i}_nasc`) ? document.getElementById(`fam_${i}_nasc`).value : "";
        payloadFamilia[`fam_${i}_renda`] = document.getElementById(`fam_${i}_renda`) ? document.getElementById(`fam_${i}_renda`).value : "R$ 0,00";
    }

    const motivo_indeferimento = isAux ? 
        (document.getElementById('motivoIndeferimentoAux')?.value || "") : 
        (document.getElementById('motivoIndeferimento')?.value || "");

    // Isola corretamente a leitura das variáveis que são comuns a ambos os fluxos
    const numero_processo_interdicao = isAux ? (document.getElementById('numeroProcessoInterdicaoAux')?.value || "") : (document.getElementById('numeroProcessoInterdicao')?.value || "");
    const comarca_interdicao = isAux ? (document.getElementById('comarcaInterdicaoAux')?.value || "") : (document.getElementById('comarcaInterdicao')?.value || "");
    const data_documento_comprovacao = isAux ? (document.getElementById('dataDocumentoComprovacaoAux')?.value || "") : (document.getElementById('dataDocumentoComprovacao')?.value || "");
    const nome_beneficio_anterior = isAux ? (document.getElementById('nomeBeneficioAnteriorAux')?.value || "") : (document.getElementById('nomeBeneficioAnterior')?.value || "");

    const payloadBruto = {

        data_inicio_vinculos: document.getElementById('dataInicioVinculos') ? document.getElementById('dataInicioVinculos').value : "",
        nome_empresa_ultima: document.getElementById('nomeEmpresaUltima') ? document.getElementById('nomeEmpresaUltima').value : "",
        inicio_ultimo_vinculo: document.getElementById('inicioUltimoVinculo') ? document.getElementById('inicioUltimoVinculo').value : "",
        fim_ultimo_vinculo: document.getElementById('fimUltimoVinculo') ? document.getElementById('fimUltimoVinculo').value : "",
        cargo_cliente: document.getElementById('cargoCliente') ? document.getElementById('cargoCliente').value : "",
        fatos_detalhados_texto: document.getElementById('fatosDetalhadosTexto') ? document.getElementById('fatosDetalhadosTexto').value : "",
        fatos_auxilio_acidente: document.getElementById('fatosAuxilioAcidente') ? document.getElementById('fatosAuxilioAcidente').value : "",

        tese_acidente_trabalho: chk('chkAcidenteTrabalho', isAcidente),
        tese_termo_inicial: chk('chkTermoInicial', isAcidente),
        data_termo_inicial: document.getElementById('dataTermoInicial') ? document.getElementById('dataTermoInicial').value : "",
        nb_anterior_auxilio: document.getElementById('nbAnteriorAuxilio') ? document.getElementById('nbAnteriorAuxilio').value : "",
        data_cessacao_auxilio: document.getElementById('dataCessacaoAuxilio') ? document.getElementById('dataCessacaoAuxilio').value : "",
        
        tipo_beneficio_escolhido: tipoBpcSelecionado,
        tese_bolsa_familia: chk('chkBolsaFamilia', isBpc),
        tese_flexibilizacao_renda: chk('chkFlexibilizacaoRenda', isBpc),
        tese_despesas_familiares: chk('chkDespesasFamiliares', isBpc),
        tese_equivoco_renda: chk('chkEquivocoRenda', isBpc),
        tese_miserabilidade_reconhecida: chk('chkMiserabilidadeReconhecida', isBpc),
        
        tese_coisa_julgada: isAux ? chk('chkCoisaJulgadaAux', true) : chk('chkCoisaJulgada', isBpc),
        
        tese_prioridade: isAux ? chk('chkPrioridadeAux', true) : chk('chkPrioridade', isBpc),

        tese_pericia_judicial: chk('chkPericiaJudicial', isBpc),
        tese_julgamento_antecipado: chk('chkJulgamentoAntecipado', isBpc),
        tese_prova_emprestada: chk('chkProvaEmprestada', isBpc),
        tese_fixacao_dib: chk('chkFixacaoDib', isBpc),
        tese_reafirmacao_der: chk('chkReafirmacaoDer', isBpc),
        tese_curatela: chk('chkCuratela', isBpc),

        subsecao_judiciaria: document.getElementById('subsecao').value,
        der: document.getElementById('der').value,
        nb: document.getElementById('nb').value,
        valor_causa: valorCausaFinal,
        oab_advogado: document.getElementById('oabAdvogado') ? document.getElementById('oabAdvogado').value : "",
        uf_oab: document.getElementById('ufOab') ? document.getElementById('ufOab').value : "",

        nome_cliente: document.getElementById('nomeCliente').value,
        cpf_cliente: cpfCliente,
        rg_cliente: rgClienteFinal,
        nacionalidade_cliente: document.getElementById('nacionalidadeCliente').value,
        estado_civil_cliente: document.getElementById('estadoCivilCliente').value,
        descricao_grupo_familiar: document.getElementById('descricaoGrupoFamiliar') ? document.getElementById('descricaoGrupoFamiliar').value : "",
        profissao_cliente: document.getElementById('profissaoCliente') ? document.getElementById('profissaoCliente').value : "",
        orgao_expedidor_rg: document.getElementById('orgaoExpedidorRg') ? document.getElementById('orgaoExpedidorRg').value : "SSP",

        pontos_referencia: document.getElementById('pontosReferencia') ? document.getElementById('pontosReferencia').value : "Não informado",
        ...payloadFamilia,

        tem_representante: possuiRep,
        nome_representante: possuiRep && document.getElementById('nomeRepresentante') ? document.getElementById('nomeRepresentante').value : "",
        cpf_representante: possuiRep ? cpfRep : "",
        rg_representante: rgRepresentanteFinal,
        parentesco_representante: possuiRep && document.getElementById('parentescoRepresentante') ? document.getElementById('parentescoRepresentante').value : "",
        nacionalidade_representante: possuiRep && document.getElementById('nacionalidadeRepresentante') ? document.getElementById('nacionalidadeRepresentante').value : "",
        estado_civil_representante: possuiRep && document.getElementById('estadoCivilRepresentante') ? document.getElementById('estadoCivilRepresentante').value : "",

        endereco_completo: enderecoMontado,
        endereco_inss: enderecoInssMontado, 
        rua: rua, numero: numero, bairro: bairro, cidade: cidade, uf: uf, cep: cep,

        diagnostico_cid: document.getElementById('diagnosticoCid') ? document.getElementById('diagnosticoCid').value : "",
        diagnosticos_texto_corrido: document.getElementById('diagnosticoCid') ? document.getElementById('diagnosticoCid').value : "",
        lista_diagnosticos: document.getElementById('diagnosticoCid') ? 
            document.getElementById('diagnosticoCid').value.split('\n').map(d => d.trim()).filter(d => d !== '').map(d => "• " + d) : [],

        sigla_doenca: document.getElementById('siglaDoenca') ? document.getElementById('siglaDoenca').value : "",
        detalhes_laudo: document.getElementById('detalhesLaudo') ? document.getElementById('detalhesLaudo').value : "",
        fatores_avaliacao: document.getElementById('fatoresAvaliacao') ? document.getElementById('fatoresAvaliacao').value : "",
        intro_lei_deficiencia: document.getElementById('introLeiDeficiencia') ? document.getElementById('introLeiDeficiencia').value : "",
        citacao_lei_deficiencia: document.getElementById('citacaoLeiDeficiencia') ? document.getElementById('citacaoLeiDeficiencia').value : "",

        sequela_descricao: document.getElementById('sequelaDescricao') ? document.getElementById('sequelaDescricao').value : "",
        data_acidente_lesao: document.getElementById('dataAcidenteLesao') ? document.getElementById('dataAcidenteLesao').value : "",
        atividade_habitual: document.getElementById('atividadeHabitual') ? document.getElementById('atividadeHabitual').value : "",

        lista_img_renda: imgRenda.map(img => img.base64),
        lista_img_pericial: imgPericial.map(img => img.base64),
        lista_img_laudo: imgLaudo.map(img => img.base64),
        anexos_medicos_dinamicos: anexosMedicos.map(doc => ({ titulo: doc.titulo, imagem_base64: doc.base64 })),
        fotos_casa: fotosCasa.map(foto => foto.base64),
        lista_img_acidente: imgAcidente.map(img => img.base64),
        lista_img_laudo_agravamento: imgLaudoAgravamento.map(img => img.base64),

        ano_acao_anterior: document.getElementById('anoAcaoAnterior') ? document.getElementById('anoAcaoAnterior').value : "",
        nome_beneficio_anterior: nome_beneficio_anterior,
        // Chaves separadas (sem ambiguidade): coisa julgada x benefício recebido anteriormente
        nome_beneficio_anterior_cj: document.getElementById('nomeBeneficioAnterior') ? document.getElementById('nomeBeneficioAnterior').value : "",
        nome_beneficio_recebido: document.getElementById('nomeBeneficioAnteriorAux') ? document.getElementById('nomeBeneficioAnteriorAux').value : "",
        numero_processo_anterior: document.getElementById('numeroProcessoAnterior') ? document.getElementById('numeroProcessoAnterior').value : "",
        diagnosticos_anteriores_texto: document.getElementById('diagnosticosAnterioresTexto') ? document.getElementById('diagnosticosAnterioresTexto').value : "",
        evolucao_diagnosticos_texto: document.getElementById('evolucaoDiagnosticosTexto') ? document.getElementById('evolucaoDiagnosticosTexto').value : "",

        salario_minimo_vigente: document.getElementById('salarioMinimoVigente') ? document.getElementById('salarioMinimoVigente').value : "",
        meio_salario_minimo: document.getElementById('meioSalarioMinimo') ? document.getElementById('meioSalarioMinimo').value : "",
        provedor_renda: document.getElementById('provedorRenda') ? document.getElementById('provedorRenda').value : "",
        renda_total_familia: document.getElementById('rendaTotalFamilia') ? document.getElementById('rendaTotalFamilia').value : "",
        renda_per_capita: document.getElementById('rendaPerCapita') ? document.getElementById('rendaPerCapita').value : "",
        composicao_familiar_texto: document.getElementById('composicaoFamiliarTexto') ? document.getElementById('composicaoFamiliarTexto').value : "",

        despesa_medicamentos: document.getElementById('despesaMedicamentos') ? document.getElementById('despesaMedicamentos').value : "",
        despesa_exames: document.getElementById('despesaExames') ? document.getElementById('despesaExames').value : "",
        despesa_alimentacao: document.getElementById('despesaAlimentacao') ? document.getElementById('despesaAlimentacao').value : "",
        despesa_transporte: document.getElementById('despesaTransporte') ? document.getElementById('despesaTransporte').value : "",
        despesa_contas: document.getElementById('despesaContas') ? document.getElementById('despesaContas').value : "",
        despesa_aluguel: document.getElementById('despesaAluguel') ? document.getElementById('despesaAluguel').value : "",
        despesa_total: document.getElementById('despesaTotal') ? document.getElementById('despesaTotal').value : "",
        tratamentos_necessarios: document.getElementById('tratamentosNecessarios') ? document.getElementById('tratamentosNecessarios').value : "",
        cuidador_principal: document.getElementById('cuidadorPrincipal') ? document.getElementById('cuidadorPrincipal').value : "",

        lista_img_bolsa_familia: imgBolsaFamilia.map(img => img.base64),
        lista_img_cnis: imgCnis.map(img => img.base64),
        lista_img_relatorio_inss: imgRelatorioInss.map(img => img.base64),
        lista_img_cadunico: imgCadunico.map(img => img.base64),

        tipo_acompanhamento: document.getElementById('tipoAcompanhamento') ? document.getElementById('tipoAcompanhamento').value : "",
        unidade_saude: document.getElementById('unidadeSaude') ? document.getElementById('unidadeSaude').value : "",
        natureza_impedimento: document.getElementById('naturezaImpedimento') ? document.getElementById('naturezaImpedimento').value : "",
        especialidade_perito: document.getElementById('especialidadePerito') ? document.getElementById('especialidadePerito').value : "",

        hip_ja_reconhecida: chk('radHipReconhecida', isBpc),
        hip_ja_notoria: chk('radHipNotoria', isBpc),
        motivo_indeferimento: motivo_indeferimento,
        comprovantes_miserabilidade: document.getElementById('comprovantesMiserabilidade') ? document.getElementById('comprovantesMiserabilidade').value : "",
        carater_condicao: document.getElementById('caraterCondicao') ? document.getElementById('caraterCondicao').value : "",
        comprovantes_deficiencia: document.getElementById('comprovantesDeficiencia') ? document.getElementById('comprovantesDeficiencia').value : "",

        numero_processo_interdicao: numero_processo_interdicao,
        vara_interdicao: document.getElementById('varaInterdicao') ? document.getElementById('varaInterdicao').value : "",
        comarca_interdicao: comarca_interdicao,
        tipo_curatela: document.getElementById('tipoCuratela') ? document.getElementById('tipoCuratela').value : "",
        tipo_laudo_emprestado: document.getElementById('tipoLaudoEmprestado') ? document.getElementById('tipoLaudoEmprestado').value : "",
        complemento_laudo_interdicao: document.getElementById('complementoLaudoInterdicao') ? document.getElementById('complementoLaudoInterdicao').value : "",
        sintomas_manifestacoes: document.getElementById('sintomasManifestacoes') ? document.getElementById('sintomasManifestacoes').value : "",

        data_documento_comprovacao: data_documento_comprovacao,
        fundamentacao_legal_dib: document.getElementById('fundamentacaoLegalDib') ? document.getElementById('fundamentacaoLegalDib').value : "",
        data_reafirmacao_der: document.getElementById('dataReafirmacaoDer') ? document.getElementById('dataReafirmacaoDer').value : "",

        // Dados Exclusivos Auxílio-Doença
        ano_provas_medicas: document.getElementById('anoProvasMedicas') ? document.getElementById('anoProvasMedicas').value : "",
        tipo_exame_anterior: document.getElementById('tipoExameAnterior') ? document.getElementById('tipoExameAnterior').value : "",
        ano_inicio_doenca: document.getElementById('anoInicioDoenca') ? document.getElementById('anoInicioDoenca').value : "",
        tipo_agravamento: document.getElementById('tipoAgravamento') ? document.getElementById('tipoAgravamento').value : "",
        ano_parada_contribuicao: document.getElementById('anoParadaContribuicao') ? document.getElementById('anoParadaContribuicao').value : "",
        tipo_vinculo_cliente: document.getElementById('tipoVinculoCliente') ? document.getElementById('tipoVinculoCliente').value : "",
        funcao_cargo_cliente: document.getElementById('funcaoCargoCliente') ? document.getElementById('funcaoCargoCliente').value : "",
        consequencias_retorno_trabalho: document.getElementById('consequenciasRetorno') ? document.getElementById('consequenciasRetorno').value : "",
        data_dii: document.getElementById('dataDii') ? document.getElementById('dataDii').value : "",
        data_ultimo_vinculo: document.getElementById('dataUltimoVinculo') ? document.getElementById('dataUltimoVinculo').value : "",
        data_fim_periodo_graca: document.getElementById('dataFimPeriodoGraca') ? document.getElementById('dataFimPeriodoGraca').value : "",
        carencia_meses: document.getElementById('carenciaMeses') ? document.getElementById('carenciaMeses').value : "",
        prazo_afastamento_dias: document.getElementById('prazoAfastamentoDias') ? document.getElementById('prazoAfastamentoDias').value : "",
        data_cessacao_beneficio: document.getElementById('dataCessacaoBeneficio') ? document.getElementById('dataCessacaoBeneficio').value : "",
        nb_anterior: document.getElementById('nbAnterior') ? document.getElementById('nbAnterior').value : "",
        resultado_sentenca_anterior: document.getElementById('resultadoSentencaAnterior') ? document.getElementById('resultadoSentencaAnterior').value : "",
        periodo_beneficio_anterior: document.getElementById('periodoBeneficioAnterior') ? document.getElementById('periodoBeneficioAnterior').value : "",

        // Teses Auxílio-Doença
        tese_incapacidade_anterior: document.getElementById('chkIncapacidadeAnterior') ? document.getElementById('chkIncapacidadeAnterior').checked : false,
        tese_restabelecimento: document.getElementById('chkRestabelecimento') ? document.getElementById('chkRestabelecimento').checked : false,
        tese_segredo_justica: document.getElementById('chkSegredoJustica') ? document.getElementById('chkSegredoJustica').checked : false,
        recebeu_beneficio_anteriormente: document.getElementById('chkBeneficioAnterior') ? document.getElementById('chkBeneficioAnterior').checked : false, 
        tese_atestmed: document.getElementById('chkAtestmed') ? document.getElementById('chkAtestmed').checked : false,
        tese_atestmed_laudo: document.getElementById('chkAtestmedLaudo') ? document.getElementById('chkAtestmedLaudo').checked : false,
        tese_carencia_120_meses: document.getElementById('chkCarencia120') ? document.getElementById('chkCarencia120').checked : false,
        tese_carencia_atraso_sem_perda: document.getElementById('chkCarenciaAtraso') ? document.getElementById('chkCarenciaAtraso').checked : false,
        tese_carencia_perda_qualidade: document.getElementById('chkCarenciaPerda') ? document.getElementById('chkCarenciaPerda').checked : false,
        tese_carencia_facultativo: document.getElementById('chkCarenciaFacultativo') ? document.getElementById('chkCarenciaFacultativo').checked : false,
        tese_seguro_desemprego: document.getElementById('chkSeguroDesemprego') ? document.getElementById('chkSeguroDesemprego').checked : false,

        pasta_destino: pastaSelecionada,
        caminho_pdf: caminhoPdfAtual
    };

    const dadosJsonString = JSON.stringify(payloadBruto);
    document.body.style.cursor = 'wait';

    try {
        const resposta = await pywebview.api.gerar_formulario(JSON.parse(dadosJsonString));
        alert(resposta);
    } catch (erro) {
        alert("Ocorreu um erro: " + erro);
    } finally {
        document.body.style.cursor = 'default';
    }
}

// =========================================================
// 6. ATALHO DE DESENVOLVEDOR: Preenchimento Automático
// =========================================================
document.getElementById('nomeCliente').addEventListener('keyup', function(evento) {
    const valorDigitado = evento.target.value.trim().toLowerCase();

    if (valorDigitado === 'teste da silva') {

        // -----------------------------------------------------
        // A. TESES (checkboxes) — precisa vir antes dos blocos
        // -----------------------------------------------------
        const chks = ['chkJulgamentoAntecipado', 'chkCoisaJulgada', 'chkCoisaJulgadaAux', 'chkProvaEmprestada', 'chkPrioridade', 'chkPrioridadeAux', 'chkFixacaoDib', 'chkBolsaFamilia', 'chkFlexibilizacaoRenda', 'chkDespesasFamiliares', 'chkEquivocoRenda', 'chkCuratela', 'chkPericiaJudicial', 'chkReafirmacaoDer', 'chkRestabelecimento', 'chkSegredoJustica', 'chkBeneficioAnterior', 'chkAtestmed', 'chkAtestmedLaudo', 'chkCarencia120', 'chkCarenciaAtraso', 'chkCarenciaPerda', 'chkCarenciaFacultativo', 'chkSeguroDesemprego'];
        chks.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.checked = true;
        });
        if (typeof atualizarTeses === 'function') atualizarTeses();

        // -----------------------------------------------------
        // B. QUALIFICAÇÃO E DADOS PESSOAIS — Requerente
        // (rgCliente é preenchido sozinho por sincronizarRgCpf, pois rgNovoCliente está marcado)
        // -----------------------------------------------------
        document.getElementById('cpfCliente').value = '606.162.208-20';
        document.getElementById('rgNovoCliente').checked = true;
        if (typeof sincronizarRgCpf === 'function') sincronizarRgCpf('Cliente');
        document.getElementById('nacionalidadeCliente').value = 'brasileiro';
        document.getElementById('estadoCivilCliente').value = 'solteiro';

        // -----------------------------------------------------
        // C. QUALIFICAÇÃO E DADOS PESSOAIS — Representante
        // (rgRepresentante é preenchido sozinho por sincronizarRgCpf, pois rgNovoRep está marcado)
        // -----------------------------------------------------
        const rep = document.getElementById('temRepresentante');
        if (rep) {
            rep.checked = true;
            if (typeof alternarRepresentante === 'function') alternarRepresentante();
        }

        document.getElementById('nomeRepresentante').value = 'Larissa Barbosa Mariano';
        document.getElementById('cpfRepresentante').value = '445.670.968-51';
        document.getElementById('rgNovoRep').checked = true;
        if (typeof sincronizarRgCpf === 'function') sincronizarRgCpf('Representante');
        document.getElementById('nacionalidadeRepresentante').value = 'brasileira';
        document.getElementById('estadoCivilRepresentante').value = 'casada';
        if (document.getElementById('parentescoRepresentante')) document.getElementById('parentescoRepresentante').value = 'cônjuge';

        // Interdição (campos do modo Auxílio-Doença)
        if (document.getElementById('numeroProcessoInterdicaoAux')) document.getElementById('numeroProcessoInterdicaoAux').value = '0123456-78.2024.8.06.0087';
        if (document.getElementById('comarcaInterdicaoAux')) document.getElementById('comarcaInterdicaoAux').value = 'Guaraciaba do Norte/CE';

        // -----------------------------------------------------
        // D. ENDEREÇO DO REQUERENTE
        // -----------------------------------------------------
        document.getElementById('cep').value = '01047-020';
        document.getElementById('rua').value = 'Rua Rio Espera';
        document.getElementById('numero').value = '12, Casa 10';
        document.getElementById('bairro').value = 'Capão do Embira';
        document.getElementById('cidade').value = 'São Paulo';
        document.getElementById('uf').value = 'SP';
        if (document.getElementById('pontosReferencia')) document.getElementById('pontosReferencia').value = 'Próximo a Padaria La Paz';

        // -----------------------------------------------------
        // E. DADOS DO PROCESSO E AGÊNCIA INSS
        // (textoValorExtenso é um <span> preenchido pelo evento 'input' do valorCausa)
        // -----------------------------------------------------
        document.getElementById('subsecao').value = 'SÃO PAULO/SP';
        document.getElementById('der').value = '24/03/2026';
        document.getElementById('nb').value = '729.397.891-0';

        const valCausa = document.getElementById('valorCausa');
        if (valCausa) {
            valCausa.value = 'R$ 14.589,00';
            valCausa.dispatchEvent(new Event('input'));
        }

        document.getElementById('oabAdvogado').value = '32.185';
        if (document.getElementById('ufOab')) document.getElementById('ufOab').value = 'SP';
        if (document.getElementById('enderecoInss')) document.getElementById('enderecoInss').value = 'R. CEL. XAVIER DE TOLEDO, nº 280, CONSOLAÇÃO, SÃO PAULO/SP - CEP: 01047-020';

        // -----------------------------------------------------
        // F. AUXÍLIO-DOENÇA: VÍNCULO, CARGO E IMPACTO
        // -----------------------------------------------------
        if (document.getElementById('tipoVinculoCliente')) document.getElementById('tipoVinculoCliente').value = 'Segurado Facultativo';
        if (document.getElementById('funcaoCargoCliente')) document.getElementById('funcaoCargoCliente').value = 'a costureira';
        if (document.getElementById('consequenciasRetorno')) document.getElementById('consequenciasRetorno').value = 'o esforço agravará severamente a lesão';

        // -----------------------------------------------------
        // G. AUXÍLIO-DOENÇA: DATAS PREVIDENCIÁRIAS E CARÊNCIA
        // -----------------------------------------------------
        if (document.getElementById('dataDii')) document.getElementById('dataDii').value = '10/02/2026';
        if (document.getElementById('dataUltimoVinculo')) document.getElementById('dataUltimoVinculo').value = '31/12/2025';
        if (document.getElementById('dataFimPeriodoGraca')) document.getElementById('dataFimPeriodoGraca').value = '15/02/2027';
        if (document.getElementById('carenciaMeses')) document.getElementById('carenciaMeses').value = '12 meses';

        // -----------------------------------------------------
        // H. DADOS MÉDICOS E FATORES PERICIAIS
        // -----------------------------------------------------
        if (document.getElementById('diagnosticoCid')) document.getElementById('diagnosticoCid').value = 'TRANSTORNO DO ESPECTRO AUTISTA - CID 10 F84.0';
        if (document.getElementById('siglaDoenca')) document.getElementById('siglaDoenca').value = 'TEA';
        if (document.getElementById('motivoIndeferimentoAux')) document.getElementById('motivoIndeferimentoAux').value = 'atestmed em não conformidade';
        if (document.getElementById('especialidadePerito')) document.getElementById('especialidadePerito').value = 'PSIQUIATRIA OU NEUROLOGIA';
        if (document.getElementById('fatoresAvaliacao')) document.getElementById('fatoresAvaliacao').value = 'IMPEDIMENTO DE LONGO PRAZO E FATORES AMBIENTAIS GRAVES';
        if (document.getElementById('detalhesLaudo')) document.getElementById('detalhesLaudo').value = 'O PACIENTE APRESENTA SEVERA DIFICULDADE DE INTERAÇÃO SOCIAL, AUSÊNCIA DE FALA E CRISES DE AGRESSIVIDADE CONSTANTES, NECESSITANDO DE ACOMPANHAMENTO CONTÍNUO PARA ATIVIDADES BÁSICAS DA VIDA DIÁRIA.';

        // -----------------------------------------------------
        // I. DADOS SOCIOECONÔMICOS E GRUPO FAMILIAR
        // -----------------------------------------------------
        if (document.getElementById('descricaoGrupoFamiliar')) document.getElementById('descricaoGrupoFamiliar').value = '4';

        const dadosTesteFamilia = [
            { nome: 'MARIA DA SILVA', parentesco: 'CÔNJUGE', nasc: '10/05/1980', renda: 'R$ 1.412,00' },
            { nome: 'JOÃO DA SILVA', parentesco: 'FILHO', nasc: '15/08/2010', renda: 'R$ 0,00' },
            { nome: 'ANA DA SILVA', parentesco: 'FILHA', nasc: '20/10/2012', renda: 'R$ 940,00' },
            { nome: 'PEDRO DA SILVA', parentesco: 'PAI', nasc: '02/01/1955', renda: 'R$ 1.412,00' },
            { nome: 'ANTONIA DA SILVA', parentesco: 'MÃE', nasc: '12/12/1958', renda: 'R$ 90,50' },
            { nome: 'CARLOS DA SILVA', parentesco: 'IRMÃO', nasc: '25/04/1990', renda: 'R$ 800,00' },
            { nome: 'JULIANA DA SILVA', parentesco: 'NETA', nasc: '05/06/2018', renda: 'R$ 0,00' },
            { nome: 'LUCAS DA SILVA', parentesco: 'NETO', nasc: '18/09/2020', renda: 'R$ 0,00' },
            { nome: 'BEATRIZ DA SILVA', parentesco: 'SOBRINHA', nasc: '30/11/2015', renda: 'R$ 0,00' }
        ];

        dadosTesteFamilia.forEach((fam, index) => {
            let i = index + 1;
            if (document.getElementById(`fam_${i}_nome`)) {
                document.getElementById(`fam_${i}_nome`).value = fam.nome;
                document.getElementById(`fam_${i}_parentesco`).value = fam.parentesco;
                document.getElementById(`fam_${i}_nasc`).value = fam.nasc;
                document.getElementById(`fam_${i}_renda`).value = fam.renda;
            }
        });

        // -----------------------------------------------------
        // J. BLOCO: PRIORIDADE DE TRAMITAÇÃO
        // -----------------------------------------------------
        if (document.getElementById('introLeiDeficiencia')) document.getElementById('introLeiDeficiencia').value = 'A Lei nº 12.764/12 (Lei Berenice Piana) define em seu art. 1º, § 2º que';
        if (document.getElementById('citacaoLeiDeficiencia')) document.getElementById('citacaoLeiDeficiencia').value = '§ 2º A pessoa com transtorno do espectro autista é considerada pessoa com deficiência, para todos os efeitos legais.';

        // -----------------------------------------------------
        // K. BLOCO: COISA JULGADA (Ação Anterior)
        // -----------------------------------------------------
        if (document.getElementById('anoAcaoAnterior')) document.getElementById('anoAcaoAnterior').value = '2023';
        if (document.getElementById('numeroProcessoAnterior')) document.getElementById('numeroProcessoAnterior').value = '0001234-56.2023.4.05.8100';
        if (document.getElementById('nomeBeneficioAnterior')) document.getElementById('nomeBeneficioAnterior').value = 'BPC/LOAS';
        if (document.getElementById('tempoTranscorridoAnos')) document.getElementById('tempoTranscorridoAnos').value = '3';
        if (document.getElementById('nbAnterior')) document.getElementById('nbAnterior').value = '701.234.567-8';
        if (document.getElementById('resultadoSentencaAnterior')) document.getElementById('resultadoSentencaAnterior').value = 'improcedente por ausência de incapacidade';
        if (document.getElementById('diagnosticosAnterioresTexto')) document.getElementById('diagnosticosAnterioresTexto').value = 'No processo anterior, foram analisados os diagnósticos CID F84.0 (transtorno do espectro autista) e CID F90.0 (transtorno do déficit de atenção com hiperatividade).';
        if (document.getElementById('evolucaoDiagnosticosTexto')) document.getElementById('evolucaoDiagnosticosTexto').value = 'conforme laudos médicos recentes, houve evolução do quadro de saúde, passando a abranger também epilepsia (CID G40.9), com crises convulsivas recorrentes e agravamento do quadro comportamental';

        // -----------------------------------------------------
        // L. BLOCO: RESTABELECIMENTO
        // -----------------------------------------------------
        if (document.getElementById('dataCessacaoBeneficio')) document.getElementById('dataCessacaoBeneficio').value = '20/08/2026';

        // -----------------------------------------------------
        // M. BLOCO: BENEFÍCIOS ANTERIORES (Citação)
        // -----------------------------------------------------
        if (document.getElementById('nomeBeneficioAnteriorAux')) document.getElementById('nomeBeneficioAnteriorAux').value = 'Auxílio-Doença';
        if (document.getElementById('periodoBeneficioAnterior')) document.getElementById('periodoBeneficioAnterior').value = '01/2023 a 05/2023';
        if (document.getElementById('anoInicioDoenca')) document.getElementById('anoInicioDoenca').value = '2022';
        if (document.getElementById('tipoAgravamento')) document.getElementById('tipoAgravamento').value = 'agravamento do quadro clínico';

        // -----------------------------------------------------
        // N. BLOCO: ATESTMED
        // -----------------------------------------------------
        if (document.getElementById('dataDocumentoComprovacaoAux')) document.getElementById('dataDocumentoComprovacaoAux').value = '05/02/2026';
        if (document.getElementById('prazoAfastamentoDias')) document.getElementById('prazoAfastamentoDias').value = '60';

        // -----------------------------------------------------
        // O. BLOCO: PERÍCIA JUDICIAL
        // (os <select> só aceitam o value exato da <option>: aqui, em minúsculas)
        // -----------------------------------------------------
        if (document.getElementById('tipoAcompanhamento')) document.getElementById('tipoAcompanhamento').value = 'multiprofissional';
        if (document.getElementById('unidadeSaude')) document.getElementById('unidadeSaude').value = 'CAPS INFANTIL';
        if (document.getElementById('naturezaImpedimento')) document.getElementById('naturezaImpedimento').value = 'MENTAL';

        // -----------------------------------------------------
        // P. BLOCO: JULGAMENTO ANTECIPADO
        // (radHipReconhecida e radHipNotoria são exclusivos; o teste usa "Reconhecida",
        //  e os campos da hipótese "Notória" abaixo também são preenchidos)
        // -----------------------------------------------------
        if (document.getElementById('radHipReconhecida')) {
            document.getElementById('radHipReconhecida').checked = true;
            if (typeof alternarHipoteseJulgamento === 'function') alternarHipoteseJulgamento();
            if (document.getElementById('motivoIndeferimento')) document.getElementById('motivoIndeferimento').value = 'RENDA PER CAPITA SUPERIOR A 1/4 DO SALÁRIO MÍNIMO';
            if (document.getElementById('comprovantesMiserabilidade')) document.getElementById('comprovantesMiserabilidade').value = 'EXTRATO ATUALIZADO DO CADÚNICO DEMONSTRANDO A COMPOSIÇÃO FAMILIAR E RENDA REAL';
        }
        
        if (document.getElementById('caraterCondicao')) document.getElementById('caraterCondicao').value = 'irreversível';
        if (document.getElementById('comprovantesDeficiencia')) document.getElementById('comprovantesDeficiencia').value = 'LAUDOS DA APAE E LAUDO PSIQUIÁTRICO ATUALIZADO';

        // -----------------------------------------------------
        // Q. BLOCO: PROVA EMPRESTADA (Interdição/Curatela)
        // -----------------------------------------------------
        if (document.getElementById('numeroProcessoInterdicao')) document.getElementById('numeroProcessoInterdicao').value = '0123456-78.2024.8.06.0087';
        if (document.getElementById('varaInterdicao')) document.getElementById('varaInterdicao').value = 'VARA ÚNICA';
        if (document.getElementById('comarcaInterdicao')) document.getElementById('comarcaInterdicao').value = 'GUARACIABA DO NORTE/CE';
        if (document.getElementById('tipoCuratela')) document.getElementById('tipoCuratela').value = 'definitiva';
        if (document.getElementById('tipoLaudoEmprestado')) document.getElementById('tipoLaudoEmprestado').value = 'pericial';
        if (document.getElementById('complementoLaudoInterdicao')) document.getElementById('complementoLaudoInterdicao').value = 'E CORROBORADO POR RELATÓRIO MULTIDISCIPLINAR DO CAPS INFANTIL';
        if (document.getElementById('sintomasManifestacoes')) document.getElementById('sintomasManifestacoes').value = 'CRISES CONVULSIVAS RECORRENTES, AUSÊNCIA DE FALA E TOTAL DEPENDÊNCIA PARA ATIVIDADES BÁSICAS DE HIGIENE E ALIMENTAÇÃO';

        // -----------------------------------------------------
        // R. BLOCO: FIXAÇÃO DA DIB NA DER
        // -----------------------------------------------------
        if (document.getElementById('dataDocumentoComprovacao')) document.getElementById('dataDocumentoComprovacao').value = '10 DE FEVEREIRO DE 2026';
        if (document.getElementById('fundamentacaoLegalDib')) document.getElementById('fundamentacaoLegalDib').value = 'ART. 20 DA LEI Nº 8.742/93 C/C ART. 174 DO DECRETO Nº 3.048/99';

        // -----------------------------------------------------
        // S. BLOCO: REAFIRMAÇÃO DA DER
        // -----------------------------------------------------
        if (document.getElementById('chkReafirmacaoDer')) document.getElementById('chkReafirmacaoDer').checked = true;
        if (document.getElementById('dataReafirmacaoDer')) document.getElementById('dataReafirmacaoDer').value = '15 DE AGOSTO DE 2026';

        // -----------------------------------------------------
        // T. BLOCO: FLEXIBILIZAÇÃO DA RENDA
        // -----------------------------------------------------
        if (document.getElementById('salarioMinimoVigente')) document.getElementById('salarioMinimoVigente').value = 'R$ 1.518,00';
        if (document.getElementById('meioSalarioMinimo')) document.getElementById('meioSalarioMinimo').value = 'R$ 759,00';
        if (document.getElementById('provedorRenda')) document.getElementById('provedorRenda').value = 'A GENITORA DO REQUERENTE';
        if (document.getElementById('rendaTotalFamilia')) document.getElementById('rendaTotalFamilia').value = 'R$ 500,00';
        if (document.getElementById('rendaPerCapita')) document.getElementById('rendaPerCapita').value = 'R$ 125,00';
        if (document.getElementById('composicaoFamiliarTexto')) document.getElementById('composicaoFamiliarTexto').value = 'O REQUERENTE, SUA GENITORA E DOIS IRMÃOS MENORES';

        // -----------------------------------------------------
        // U. BLOCO: DESPESAS FAMILIARES
        // (despesaTotal é readonly: calcularDespesaTotal() preenche depois dos valores)
        // -----------------------------------------------------
        if (document.getElementById('despesaMedicamentos')) document.getElementById('despesaMedicamentos').value = 'R$ 250,00';
        if (document.getElementById('despesaExames')) document.getElementById('despesaExames').value = 'R$ 100,00';
        if (document.getElementById('despesaAlimentacao')) document.getElementById('despesaAlimentacao').value = 'R$ 600,00';
        if (document.getElementById('despesaTransporte')) document.getElementById('despesaTransporte').value = 'R$ 150,00';
        if (document.getElementById('despesaContas')) document.getElementById('despesaContas').value = 'R$ 200,00';
        if (document.getElementById('despesaAluguel')) document.getElementById('despesaAluguel').value = 'R$ 500,00';
        
        if (typeof calcularDespesaTotal === 'function') {
            calcularDespesaTotal();
        }

        if (document.getElementById('tratamentosNecessarios')) document.getElementById('tratamentosNecessarios').value = 'TERAPIA OCUPACIONAL E FONOAUDIOLOGIA';
        if (document.getElementById('cuidadorPrincipal')) document.getElementById('cuidadorPrincipal').value = 'SUA GENITORA';

        // =========================================================
        // V. BLOCOS: AUXILIO-ACIDENTE CONVERSÃO
        // =========================================================

        if (document.getElementById('dataAcidenteLesao')) document.getElementById('dataAcidenteLesao').value = '21/05/2021';
        if (document.getElementById('atividadeHabitual')) document.getElementById('atividadeHabitual').value = 'Atendente de Farmácia';
        if (document.getElementById('sequelaDescricao')) document.getElementById('sequelaDescricao').value = 'sequela definitiva com redução da capacidade para o trabalho habitual em virtude de fratura do 4º metacarpo esquerdo e limitações funcionais decorrentes de trauma na coluna';
        if (document.getElementById('fatosAuxilioAcidente')) document.getElementById('fatosAuxilioAcidente').value = 'A autora possui vínculos registrados no INSS desde 12/01/2016. O seu último vínculo foi na empresa FABIANA MADEIRA GOMES DE MATOS, que se encontra em aberto desde 02/01/2017, no cargo de atendente de farmácia. Ocorre que a requerente sofreu um acidente de motocicleta no dia 21/05/2021, com fratura do 4º metacarpo esquerdo e fratura cominutiva de T11. Realizou tratamento cirúrgico em mão esquerda, recebendo auxílio-doença entre 05/06/2021 a 20/08/2021.';
        
        if (document.getElementById('dataTermoInicial')) document.getElementById('dataTermoInicial').value = '08/07/2024';
        if (document.getElementById('nbAnteriorAuxilio')) document.getElementById('nbAnteriorAuxilio').value = '648.393.564-5';
        if (document.getElementById('dataCessacaoAuxilio')) document.getElementById('dataCessacaoAuxilio').value = '07/07/2024';
        atualizarTeses();
    }
});

// =========================================================
// 7. FUNÇÃO INTELIGENTE: NÚMERO PARA EXTENSO E MÁSCARAS
// =========================================================
function valorParaExtenso(valorFormatado) {
    if (!valorFormatado || valorFormatado === "R$ 0,00") return "";
    let num = valorFormatado.replace("R$ ", "").replace(/\./g, "").replace(",", ".");
    let valorFloat = parseFloat(num);
    if (isNaN(valorFloat) || valorFloat === 0) return "";

    const unidades = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
    const especiais = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
    const dezenas = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
    const centenas = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];

    function descreverBloco(n) {
        if (n === 100) return "cem";
        let c = Math.floor(n / 100);
        let d = Math.floor((n % 100) / 10);
        let u = n % 10;
        let res = [];

        if (c > 0) res.push(centenas[c]);
        if (d === 1) res.push(especiais[u]);
        else {
            if (d > 1) res.push(dezenas[d]);
            if (u > 0) res.push(unidades[u]);
        }
        return res.join(" e ");
    }

    let reais = Math.floor(valorFloat);
    let centavos = Math.round((valorFloat - reais) * 100);
    
    let extensoReais = "";
    if (reais > 0) {
        let milhoes = Math.floor(reais / 1000000);
        let milhares = Math.floor((reais % 1000000) / 1000);
        let resto = reais % 1000;
        let partes = [];

        if (milhoes > 0) partes.push(descreverBloco(milhoes) + (milhoes === 1 ? " milhão" : " milhões"));
        if (milhares > 0) partes.push((milhares === 1 ? "um mil" : descreverBloco(milhares) + " mil"));
        if (resto > 0) partes.push(descreverBloco(resto));
        
        extensoReais = partes.join(" e ");
        
        if (reais === 1) extensoReais += " real";
        else if (reais % 1000000 === 0) extensoReais += " de reais";
        else extensoReais += " reais";
    }

    let extensoCentavos = "";
    if (centavos > 0) {
        extensoCentavos = descreverBloco(centavos) + (centavos === 1 ? " centavo" : " centavos");
    }

    if (extensoReais && extensoCentavos) return extensoReais + " e " + extensoCentavos;
    if (extensoReais) return extensoReais;
    return extensoCentavos;
}

function mascararMoeda(evento) {
    let valor = evento.target.value.replace(/\D/g, ""); 
    if (valor === "") {
        evento.target.value = "";
        if(document.getElementById('textoValorExtenso')) document.getElementById('textoValorExtenso').innerText = "";
        return;
    }
    valor = (parseInt(valor, 10) / 100).toFixed(2) + "";
    valor = valor.replace(".", ",");
    valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    
    let valorFinal = "R$ " + valor;
    evento.target.value = valorFinal;

    if (document.getElementById('textoValorExtenso')) {
        document.getElementById('textoValorExtenso').innerText = valorParaExtenso(valorFinal);
    }
}
document.getElementById('valorCausa').addEventListener('input', mascararMoeda);

function mascararData(evento) {
    let v = evento.target.value.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/, "$1/$2");
    v = v.replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
    evento.target.value = v;
}
document.getElementById('der').addEventListener('input', mascararData);

function mascararCPF(evento) {
    let v = evento.target.value.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    evento.target.value = v;

    if (evento.target.id === 'cpfCliente') sincronizarRgCpf('Cliente');
    if (evento.target.id === 'cpfRepresentante') sincronizarRgCpf('Representante');
}

function calcularValidadeCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf === '' || cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    
    let add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(9))) return false;
    
    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(10))) return false;
    
    return true;
}

function verificarCampoCPF(evento) {
    const input = evento.target;
    const cpf = input.value;
    
    if (cpf.length < 14) {
        input.classList.remove('campo-valido', 'campo-invalido');
        return;
    }
    
    if (calcularValidadeCPF(cpf)) {
        input.classList.remove('campo-invalido');
        input.classList.add('campo-valido');
    } else {
        input.classList.remove('campo-valido');
        input.classList.add('campo-invalido');
    }
}

document.getElementById('cpfCliente').addEventListener('input', mascararCPF);
document.getElementById('cpfCliente').addEventListener('input', verificarCampoCPF); 
document.getElementById('cpfRepresentante').addEventListener('input', mascararCPF);
document.getElementById('cpfRepresentante').addEventListener('input', verificarCampoCPF);

function mascararCEP(evento) {
    let v = evento.target.value.replace(/\D/g, ""); 
    v = v.replace(/^(\d{5})(\d)/, "$1-$2"); 
    evento.target.value = v;

    if (evento.target.value.length === 9) {
        const sufixo = evento.target.id === 'cepInss' ? 'Inss' : '';
        buscarCEPApi(evento.target.value, sufixo);
    } else {
        evento.target.classList.remove('campo-valido', 'campo-invalido');
    }
}

async function buscarCEPApi(cepFormatado, sufixo = '') {
    const inputCep = document.getElementById('cep' + sufixo);
    const cepLimpo = cepFormatado.replace("-", ""); 

    inputCep.classList.add('campo-buscando');

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
        const dados = await resposta.json();

        inputCep.classList.remove('campo-buscando');

        if (dados.erro) {
            inputCep.classList.add('campo-invalido');
            document.getElementById('rua' + sufixo).value = "";
            document.getElementById('bairro' + sufixo).value = "";
            document.getElementById('cidade' + sufixo).value = "";
            document.getElementById('uf' + sufixo).value = "";
            return;
        }

        inputCep.classList.remove('campo-invalido');
        inputCep.classList.add('campo-valido');

        document.getElementById('rua' + sufixo).value = dados.logradouro || "";
        document.getElementById('bairro' + sufixo).value = dados.bairro || "";
        document.getElementById('cidade' + sufixo).value = dados.localidade || "";
        document.getElementById('uf' + sufixo).value = dados.uf || "";

        document.getElementById('numero' + sufixo).focus();

    } catch (erro) {
        inputCep.classList.remove('campo-buscando');
        alert("Erro de conexão ao buscar o CEP.");
        console.error("Erro na API ViaCEP:", erro);
    }
}

document.getElementById('cep').addEventListener('input', mascararCEP);
// =========================================================
// 8. FUNÇÕES PARA LIMPAR TODOS OS DADOS DA TELA
// =========================================================
function limparDados() {
    document.getElementById('modalConfirmacao').style.display = 'flex';
}

function fecharModalLimpar() {
    document.getElementById('modalConfirmacao').style.display = 'none';
}

function executarLimpeza() {
    fecharModalLimpar();

    document.querySelectorAll('input[type="text"], textarea').forEach(campo => {
        campo.value = '';
        campo.classList.remove('campo-invalido', 'campo-valido', 'campo-buscando');
    });

    document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(campo => {
        campo.checked = false;
    });

    document.querySelectorAll('select').forEach(campo => {
        campo.selectedIndex = 0;
    });

    imgRenda = [];
    imgPericial = [];
    imgLaudo = [];
    anexosMedicos = []; 
    fotosCasa = [];     
    imgBolsaFamilia = [];
    imgCnis = [];
    imgRelatorioInss = [];
    imgCadunico = [];
    imgAcidente = [];
    imgLaudoAgravamento = [];

    document.querySelectorAll('.gallery-container').forEach(galeria => {
        galeria.innerHTML = '';
    });

    const textoValor = document.getElementById('textoValorExtenso');
    if (textoValor) textoValor.innerText = '';

    const labelPdf = document.getElementById('label_pdf');
    if (labelPdf) labelPdf.innerText = 'Nenhum PDF selecionado';
    caminhoPdfAtual = "";

    atualizarTeses();
    alternarRepresentante();
    if (typeof alternarHipoteseJulgamento === "function") alternarHipoteseJulgamento();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =========================================================
// 9. NAVEGAÇÃO ENTRE TELAS E MODO DE FORMULÁRIO
// =========================================================
let tipoBpcSelecionado = "unificado";

function mostrarTela(idTela) {
    document.querySelectorAll('.step-screen').forEach(tela => {
        tela.classList.remove('active');
        tela.style.display = 'none';
    });
    const telaAlvo = document.getElementById(idTela);
    if (telaAlvo) {
        telaAlvo.classList.add('active');
        telaAlvo.style.display = 'block';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function alternarModoFormulario(modo, submodo) {
    const tela = document.getElementById('telaFormulario');
    [...tela.classList].filter(c => c.startsWith('modo-')).forEach(c => tela.classList.remove(c));
    tela.classList.add('modo-' + modo);
    if (submodo) tela.classList.add('modo-' + submodo);

    // Desmarca as teses dos painéis que NÃO pertencem ao modo atual (evita vazamento de estado entre benefícios)
    const painelDoModo = { bpc: 'painelTesesBpc', aux_doenca: 'painelTesesAux', aux_acidente: 'painelTesesAuxAcidente' };
    Object.entries(painelDoModo).forEach(([m, idPainel]) => {
        if (m !== modo) {
            document.querySelectorAll('#' + idPainel + ' input[type="checkbox"]').forEach(c => { c.checked = false; });
        }
    });

    const painelBpc = document.getElementById('painelTesesBpc');
    if (painelBpc) painelBpc.style.display = (modo === 'bpc') ? '' : 'none';

    const painelAux = document.getElementById('painelTesesAux');
    if (painelAux) painelAux.style.display = (modo === 'aux_doenca') ? '' : 'none';

    const painelAuxAcidente = document.getElementById('painelTesesAuxAcidente');
    if (painelAuxAcidente) painelAuxAcidente.style.display = (modo === 'aux_acidente') ? '' : 'none';

    // Desmarca teses/hipóteses ocultas neste tipo (vh-<tipo>), para não vazarem para o documento
    if (submodo) {
        tela.querySelectorAll('.vh-' + submodo + ' input[type="checkbox"], .vh-' + submodo + ' input[type="radio"]').forEach(c => { c.checked = false; });
        if (typeof alternarHipoteseJulgamento === 'function') alternarHipoteseJulgamento();
    }

    atualizarTeses();
}

function voltarMenuPrincipal() {
    mostrarTela('telaMenu');
}

function abrirSubMenuBpc() {
    mostrarTela('telaSubMenuBpc');
}

function voltarSubMenuBpc() {
    mostrarTela('telaSubMenuBpc');
}

function abrirFormularioBpc(categoria) {
    tipoBpcSelecionado = categoria; 

    const titulo = document.getElementById('tituloFormulario');
    if (titulo) {
        let nomeCat = categoria === 'bpc_deficiencia' ? 'Pessoa com Deficiência' : 'Impedimento de Longo Prazo';
        titulo.innerText = "Formulário: BPC / LOAS (" + nomeCat + ")";
    }

    // --- NOVA LÓGICA: ESCONDER TESES QUE NÃO EXISTEM NO IMPEDIMENTO ---
    const cardJulgamento = document.getElementById('cardJulgamentoAntecipado');
    const chkJulgamento = document.getElementById('chkJulgamentoAntecipado');

    if (cardJulgamento) {
        if (categoria === 'bpc_impedimento') {
            cardJulgamento.style.display = 'none'; // Esconde o botão
            if (chkJulgamento) chkJulgamento.checked = false; // Desmarca para garantir segurança
        } else {
            cardJulgamento.style.display = 'block'; // Mostra o botão na Deficiência
        }
    }

    alternarModoFormulario('bpc', categoria);
    mostrarTela('telaFormulario');
}

function abrirSubMenuAuxilioAcidente() {
    mostrarTela('telaSubMenuAuxilioAcidente');
}

function abrirFormularioAuxAcidente(categoria) {
    tipoBpcSelecionado = categoria; 

    const titulo = document.getElementById('tituloFormulario');
    if (titulo) {
        if (categoria === 'auxilio_acidente_aposentadoria') {
            titulo.innerText = "Formulário: Auxílio-Acidente c/c Aposentadoria por Invalidez";
        } else {
            titulo.innerText = "Formulário: Auxílio-Acidente (Conversão)";
        }
    }

    alternarModoFormulario('aux_acidente', categoria);
    mostrarTela('telaFormulario');
}

function abrirSubMenuMandadoSeguranca() {
    mostrarTela('telaSubMenuMandadoSeguranca');
}

function abrirFormularioMandado(categoria) {
    tipoBpcSelecionado = categoria; 
    
    const nomesModelos = {
        'ms_apelacao': 'Apelação',
        'ms_biometria': 'Liminar - Biometria',
        'ms_impossibilidade_prorrogacao': 'Impossibilidade de Prorrogação',
        'ms_antecipacao_social_bpc': 'Antecipação de Avaliação Social (BPC)',
        'ms_antecipacao_pericia_bpc': 'Antecipação de Perícia Médica (BPC)',
        'ms_antecipacao_pericia_social_bpc': 'Antecipação de Perícia e Avaliação Social (BPC)',
        'ms_beneficio_cessado': 'Benefício Cessado Indevidamente',
        'ms_demora_analise': 'Demora na Análise',
        'ms_antecipar_resultado_medica': 'Antecipar Resultado Médico',
        'ms_antecipar_resultado_beneficio': 'Antecipar Resultado do Benefício'
    };

    const titulo = document.getElementById('tituloFormulario');
    if (titulo) {
        titulo.innerText = "Formulário: Mandado de Segurança (" + (nomesModelos[categoria] || 'Geral') + ")";
    }

    alternarModoFormulario('ms', categoria); // Usa o modo exclusivo para esconder teses indesejadas
    mostrarTela('telaFormulario');
}

function abrirSubMenuUrbana() {
    mostrarTela('telaSubMenuUrbana');
}

function abrirSubMenuUrbanaAuxDoenca() {
    mostrarTela('telaSubMenuUrbanaAuxDoenca');
}

function voltarSubMenuUrbana() {
    mostrarTela('telaSubMenuUrbana');
}

function abrirFormularioAuxDoenca(categoria) {
    tipoBpcSelecionado = categoria; 

    const titulo = document.getElementById('tituloFormulario');
    if (titulo) {
        let nomeCat = categoria === 'segurado_empregado_domestico' ? 'Empregado Doméstico' : categoria.replace('_', ' ');
        titulo.innerText = "Formulário: Auxílio-Doença (" + nomeCat.toUpperCase() + ")";
    }

    // Exibe apenas as teses correspondentes à categoria selecionada (Desmarca o resto)
    const cardsAux = document.querySelectorAll('.tese-aux');
    cardsAux.forEach(card => {
        if (card.classList.contains('cat-all-aux') || card.classList.contains(`cat-${categoria}`)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none';
            const chk = card.querySelector('input[type="checkbox"]');
            if(chk) chk.checked = false; 
        }
    });

    const inputVinculo = document.getElementById('tipoVinculoCliente');
    if (inputVinculo) {
        if (categoria === 'facultativo') inputVinculo.value = 'SEGURADO FACULTATIVO';
        else if (categoria === 'contribuinte_individual') inputVinculo.value = 'CONTRIBUINTE INDIVIDUAL';
        else inputVinculo.value = 'EMPREGADO DOMÉSTICO';
    }

    alternarModoFormulario('aux_doenca', categoria);
    mostrarTela('telaFormulario');
}

function abrirEmBreve() {
    alert("Em breve! O formulário será adicionado nas próximas atualizações.");
}

// =========================================================
// 10. REAPROVEITAMENTO INTELIGENTE (AUTO-PREENCHIMENTO)
// =========================================================
function sincronizarFamiliar1() {
    const nome = document.getElementById('nomeCliente').value;
    const fam1Nome = document.getElementById('fam_1_nome');
    const fam1Parentesco = document.getElementById('fam_1_parentesco');

    if (fam1Nome) fam1Nome.value = nome;
    if (fam1Parentesco && fam1Parentesco.value.trim() === "") {
        fam1Parentesco.value = "AUTOR";
    }
}

function sincronizarFamiliar2() {
    const temRep = document.getElementById('temRepresentante').checked;
    const isAux = document.getElementById('telaFormulario').classList.contains('modo-aux_doenca');

    const fam2Nome = document.getElementById('fam_2_nome');
    const fam2Parentesco = document.getElementById('fam_2_parentesco');

    if (!fam2Nome || isAux) return;

    if (temRep) {
        fam2Nome.value = document.getElementById('nomeRepresentante').value;
        fam2Parentesco.value = document.getElementById('parentescoRepresentante').value;
    } else {
        fam2Nome.value = "";
        fam2Parentesco.value = "";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const camposCliente = ['nomeCliente'];
    camposCliente.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', sincronizarFamiliar1);
    });

    const camposRep = ['nomeRepresentante', 'parentescoRepresentante'];
    camposRep.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', sincronizarFamiliar2);
    });
});

// =========================================================
// 11. CÁLCULO AUTOMÁTICO DAS DESPESAS FAMILIARES
// =========================================================
function converterMoedaParaNumero(valorMoeda) {
    if (!valorMoeda) return 0;
    let numStr = valorMoeda.replace(/\D/g, ""); 
    if (numStr === "") return 0;
    return parseFloat(numStr) / 100;
}

function calcularDespesaTotal() {
    const camposDespesas = [
        'despesaMedicamentos', 'despesaExames', 'despesaAlimentacao',
        'despesaTransporte', 'despesaContas', 'despesaAluguel'
    ];

    let somaTotal = 0;

    camposDespesas.forEach(id => {
        const input = document.getElementById(id);
        if (input && input.value) {
            somaTotal += converterMoedaParaNumero(input.value);
        }
    });

    const inputTotal = document.getElementById('despesaTotal');
    if (inputTotal) {
        if (somaTotal === 0) {
            inputTotal.value = "";
        } else {
            let valorFormatado = somaTotal.toFixed(2).replace(".", ",");
            valorFormatado = valorFormatado.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
            inputTotal.value = "R$ " + valorFormatado;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const camposDespesas = [
        'despesaMedicamentos', 'despesaExames', 'despesaAlimentacao',
        'despesaTransporte', 'despesaContas', 'despesaAluguel'
    ];

    camposDespesas.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', calcularDespesaTotal);
        }
    });
});

function preencherJurisdicaoManual() {
    const inputSubsecao = document.getElementById('subsecao');
    if (!inputSubsecao) return;

    let valorDigitado = inputSubsecao.value.trim().toLowerCase();
    if (!valorDigitado) {
        alert("⚠️ Digite o município e o estado no campo de Subseção antes de preencher (Ex: São Gonçalo/RJ ou Manaus/AM).");
        inputSubsecao.focus();
        return;
    }

    let info = baseMunicipios[valorDigitado];

    if (!info && valorDigitado.includes('/')) {
        let municipioApenas = valorDigitado.split('/')[0].trim();
        let chaveEncontrada = Object.keys(baseMunicipios).find(k => k.startsWith(municipioApenas));
        if (chaveEncontrada) {
            info = baseMunicipios[chaveEncontrada];
        }
    }

    if (info) {
        document.getElementById('subsecao').value = info.subsecao;
        document.getElementById('enderecoInss').value = info.endereco_inss;
        document.getElementById('oabAdvogado').value = info.oab_advogado;
        
        const inputUfOab = document.getElementById('ufOab');
        if (inputUfOab) inputUfOab.value = info.uf_oab;

        inputSubsecao.style.borderColor = "var(--success)";
        setTimeout(() => { inputSubsecao.style.borderColor = ""; }, 1500);
    } else {
        alert("ℹ️ Município não encontrado na base de dados automática. Você pode preencher os campos manualmente sem problemas!");
    }
}