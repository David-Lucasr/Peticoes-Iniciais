// =========================================================
// 1. GERENCIADOR DE TESES (Acompanha as checkboxes)
// =========================================================
function atualizarTeses() {
    const isCoisaJulgada = document.getElementById('chkCoisaJulgada') ? document.getElementById('chkCoisaJulgada').checked : false;
    const isPericiaJudicial = document.getElementById('chkPericiaJudicial') ? document.getElementById('chkPericiaJudicial').checked : false;
    const isJulgamentoAntecipado = document.getElementById('chkJulgamentoAntecipado') ? document.getElementById('chkJulgamentoAntecipado').checked : false;
    const isProvaEmprestada = document.getElementById('chkProvaEmprestada') ? document.getElementById('chkProvaEmprestada').checked : false;
    const isFixacaoDib = document.getElementById('chkFixacaoDib') ? document.getElementById('chkFixacaoDib').checked : false;
    const isReafirmacaoDer = document.getElementById('chkReafirmacaoDer') ? document.getElementById('chkReafirmacaoDer').checked : false;
    const isPrioridade = document.getElementById('chkPrioridade') ? document.getElementById('chkPrioridade').checked : false;

    const blocoPrioridade = document.getElementById('blocoPrioridade');
    if (blocoPrioridade) blocoPrioridade.style.display = isPrioridade ? 'block' : 'none';

    const blocoCoisaJulgada = document.getElementById('blocoCoisaJulgada');
    if (blocoCoisaJulgada) blocoCoisaJulgada.style.display = isCoisaJulgada ? 'block' : 'none';

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

    console.log("Teses ativas:", { 
        isCoisaJulgada, isPericiaJudicial, isJulgamentoAntecipado, 
        isProvaEmprestada, isFixacaoDib, isReafirmacaoDer, isPrioridade
    });
}

function alternarHipoteseJulgamento() {
    const isReconhecida = document.getElementById('radHipReconhecida') && document.getElementById('radHipReconhecida').checked;
    const isNotoria = document.getElementById('radHipNotoria') && document.getElementById('radHipNotoria').checked;
    
    const camposReconhecida = document.getElementById('camposHipReconhecida');
    const camposNotoria = document.getElementById('camposHipNotoria');
    
    if (camposReconhecida) camposReconhecida.style.display = isReconhecida ? 'grid' : 'none';
    if (camposNotoria) camposNotoria.style.display = isNotoria ? 'grid' : 'none';
}

// Roda uma vez ao carregar para garantir que o layout comece certo
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
        
        const cbRgRep = document.getElementById('rgNovoRep');
        if (cbRgRep) cbRgRep.checked = false;
        sincronizarRgCpf('Representante');

        document.getElementById('cpfRepresentante').classList.remove('campo-invalido', 'campo-valido');
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
// 3. GESTÃO DE IMAGENS (Todas as caixas aceitam múltiplas imagens)
// =========================================================
let imgRenda = [];
let imgPericial = [];
let imgLaudo = [];
let anexosMedicos = []; 
let fotosCasa = [];     
let imgCoisaJulgada = [];
let contadorId = 0;     
let caixaAtivaParaColar = null;

function selecionarCaixa(chave){
    caixaAtivaParaColar = chave;
    
    // Reseta as bordas
    ['img_renda', 'img_pericial', 'img_laudo', 'anexos_medicos', 'fotos_casa', 'img_coisa_julgada'].forEach(c => {
        const divCaixa = document.getElementById('caixa_' + c);
        if (divCaixa) divCaixa.style.border = "1px dashed var(--border)";
    });

    // Destaca a caixa ativa
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
                } else if (caixaAtivaParaColar === 'img_coisa_julgada') {
                    imgCoisaJulgada.push({ id: contadorId++, base64: base64 });
                    renderizarGaleria('galeria_img_coisa_julgada', imgCoisaJulgada, 'img_coisa_julgada');
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
        
        let htmlInput = tipo === 'medicos' 
            ? `<input type="text" placeholder="Ex: Receita" value="${item.titulo}" onchange="atualizarTitulo(${item.id}, this.value)" onclick="event.stopPropagation();">` 
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
    } else if (tipo === 'img_coisa_julgada') {
        imgCoisaJulgada = imgCoisaJulgada.filter(i => i.id !== id);
        renderizarGaleria('galeria_img_coisa_julgada', imgCoisaJulgada, tipo);
    }
}

// =========================================================
// 4. SELEÇÃO DE ARQUIVOS (PDF)
// =========================================================
let caminhoPdfAtual = "";

async function selecionarPdf() {
    const caminho = await pywebview.api.escolher_pdf();
    if (caminho) {
        caminhoPdfAtual = caminho;
        document.getElementById('label_pdf').innerText = "PDF Selecionado: " + caminho;
    }
}

// =========================================================
// 5. ENVIO PARA O PYTHON
// =========================================================
async function enviarDados() {
    const pastaSelecionada = await pywebview.api.escolher_pasta();
    if (!pastaSelecionada) {
        alert("Você precisa escolher uma pasta de destino!");
        return;
    }

    const cpfCliente = document.getElementById('cpfCliente').value;
    const possuiRep = document.getElementById('temRepresentante').checked;
    const cpfRep = document.getElementById('cpfRepresentante').value;
    
    let erroCpf = false;

    if (!calcularValidadeCPF(cpfCliente)) {
        document.getElementById('cpfCliente').classList.add('campo-invalido');
        erroCpf = true;
    } else {
        document.getElementById('cpfCliente').classList.remove('campo-invalido');
    }

    if (possuiRep && !calcularValidadeCPF(cpfRep)) {
        document.getElementById('cpfRepresentante').classList.add('campo-invalido');
        erroCpf = true;
    } else if (possuiRep) {
        document.getElementById('cpfRepresentante').classList.remove('campo-invalido');
    }

    if (erroCpf) {
        alert("Atenção: Os CPFs destacados em vermelho são inválidos. Corrija-os antes de gerar a petição.");
        return; 
    }

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

    const ruaInss = document.getElementById('ruaInss').value;
    const numeroInss = document.getElementById('numeroInss').value;
    const bairroInss = document.getElementById('bairroInss').value;
    const cidadeInss = document.getElementById('cidadeInss').value;
    const ufInss = document.getElementById('ufInss').value;
    const cepInss = document.getElementById('cepInss').value;
    const enderecoInssMontado = `${ruaInss}, nº ${numeroInss}, ${bairroInss}, ${cidadeInss}/${ufInss} - CEP: ${cepInss}`;

    const valorDigitado = document.getElementById('valorCausa').value;
    const valorExtenso = document.getElementById('textoValorExtenso').innerText;
    let valorCausaFinal = valorDigitado;
    if (valorDigitado && valorExtenso) {
        valorCausaFinal = `${valorDigitado} (${valorExtenso})`;
    }

    const payloadBruto = {
        // --- TESES CONDICIONAIS ---
        tese_coisa_julgada: document.getElementById('chkCoisaJulgada') ? document.getElementById('chkCoisaJulgada').checked : false,
        tese_pericia_judicial: document.getElementById('chkPericiaJudicial') ? document.getElementById('chkPericiaJudicial').checked : false,
        tese_julgamento_antecipado: document.getElementById('chkJulgamentoAntecipado') ? document.getElementById('chkJulgamentoAntecipado').checked : false,
        tese_prova_emprestada: document.getElementById('chkProvaEmprestada') ? document.getElementById('chkProvaEmprestada').checked : false,
        tese_fixacao_dib: document.getElementById('chkFixacaoDib') ? document.getElementById('chkFixacaoDib').checked : false,
        tese_reafirmacao_der: document.getElementById('chkReafirmacaoDer') ? document.getElementById('chkReafirmacaoDer').checked : false,
        tese_prioridade: document.getElementById('chkPrioridade') ? document.getElementById('chkPrioridade').checked : false,

        // --- DADOS DO PROCESSO ---
        subsecao_judiciaria: document.getElementById('subsecao').value,
        der: document.getElementById('der').value,
        nb: document.getElementById('nb').value,
        valor_causa: valorCausaFinal,
        oab_advogado: document.getElementById('oabAdvogado') ? document.getElementById('oabAdvogado').value : "",
        uf_oab: document.getElementById('ufOab') ? document.getElementById('ufOab').value : "",
        
        // --- DADOS DO CLIENTE ---
        nome_cliente: document.getElementById('nomeCliente').value,
        cpf_cliente: cpfCliente,
        rg_cliente: rgClienteFinal,
        nacionalidade_cliente: document.getElementById('nacionalidadeCliente').value,
        estado_civil_cliente: document.getElementById('estadoCivilCliente').value,
        descricao_grupo_familiar: document.getElementById('descricaoGrupoFamiliar') ? document.getElementById('descricaoGrupoFamiliar').value : "",
        
        // --- DADOS DO REPRESENTANTE ---
        tem_representante: possuiRep,
        nome_representante: possuiRep && document.getElementById('nomeRepresentante') ? document.getElementById('nomeRepresentante').value : "",
        cpf_representante: possuiRep ? cpfRep : "",
        rg_representante: rgRepresentanteFinal,
        parentesco_representante: possuiRep && document.getElementById('parentescoRepresentante') ? document.getElementById('parentescoRepresentante').value : "",
        nacionalidade_representante: possuiRep && document.getElementById('nacionalidadeRepresentante') ? document.getElementById('nacionalidadeRepresentante').value : "",
        estado_civil_representante: possuiRep && document.getElementById('estadoCivilRepresentante') ? document.getElementById('estadoCivilRepresentante').value : "",
        
        // --- ENDEREÇOS ---
        endereco_completo: enderecoMontado,
        endereco_inss: enderecoInssMontado, 
        rua: rua, numero: numero, bairro: bairro, cidade: cidade, uf: uf, cep: cep,
        rua_inss: ruaInss, numero_inss: numeroInss, bairro_inss: bairroInss, 
        cidade_inss: cidadeInss, uf_inss: ufInss, cep_inss: cepInss,
        
        // --- DADOS DINÂMICOS DA DEFICIÊNCIA (se existirem na tela) ---
        diagnostico_cid: document.getElementById('diagnosticoCid') ? document.getElementById('diagnosticoCid').value : "",
        sigla_doenca: document.getElementById('siglaDoenca') ? document.getElementById('siglaDoenca').value : "",
        fatores_avaliacao: document.getElementById('fatoresAvaliacao') ? document.getElementById('fatoresAvaliacao').value : "",
        detalhes_laudo: document.getElementById('detalhesLaudo') ? document.getElementById('detalhesLaudo').value : "",
        intro_lei_deficiencia: document.getElementById('introLeiDeficiencia') ? document.getElementById('introLeiDeficiencia').value : "",
        citacao_lei_deficiencia: document.getElementById('citacaoLeiDeficiencia') ? document.getElementById('citacaoLeiDeficiencia').value : "",
        
        // --- ARRAYS DE IMAGENS ---
        lista_img_renda: imgRenda.map(img => img.base64),
        lista_img_pericial: imgPericial.map(img => img.base64),
        lista_img_laudo: imgLaudo.map(img => img.base64),
        anexos_medicos_dinamicos: anexosMedicos.map(doc => ({ titulo: doc.titulo, imagem_base64: doc.base64 })),
        fotos_casa: fotosCasa.map(foto => foto.base64),

        ano_acao_anterior: document.getElementById('anoAcaoAnterior') ? document.getElementById('anoAcaoAnterior').value : "",
        nome_beneficio_anterior: document.getElementById('nomeBeneficioAnterior') ? document.getElementById('nomeBeneficioAnterior').value : "",
        numero_processo_anterior: document.getElementById('numeroProcessoAnterior') ? document.getElementById('numeroProcessoAnterior').value : "",
        tipo_agravamento: document.getElementById('tipoAgravamento') ? document.getElementById('tipoAgravamento').value : "",
        documentos_novos_relacao: document.getElementById('documentosNovosRelacao') ? document.getElementById('documentosNovosRelacao').value : "",
        tempo_transcorrido_anos: document.getElementById('tempoTranscorridoAnos') ? document.getElementById('tempoTranscorridoAnos').value : "",
        lista_img_coisa_julgada: imgCoisaJulgada.map(img => img.base64),

        tipo_acompanhamento: document.getElementById('tipoAcompanhamento') ? document.getElementById('tipoAcompanhamento').value : "",
        unidade_saude: document.getElementById('unidadeSaude') ? document.getElementById('unidadeSaude').value : "",
        natureza_impedimento: document.getElementById('naturezaImpedimento') ? document.getElementById('naturezaImpedimento').value : "",
        especialidade_perito: document.getElementById('especialidadePerito') ? document.getElementById('especialidadePerito').value : "",
        
        hip_ja_reconhecida: document.getElementById('radHipReconhecida') ? document.getElementById('radHipReconhecida').checked : false,
        hip_ja_notoria: document.getElementById('radHipNotoria') ? document.getElementById('radHipNotoria').checked : false,
        motivo_indeferimento: document.getElementById('motivoIndeferimento') ? document.getElementById('motivoIndeferimento').value : "",
        comprovantes_miserabilidade: document.getElementById('comprovantesMiserabilidade') ? document.getElementById('comprovantesMiserabilidade').value : "",
        carater_condicao: document.getElementById('caraterCondicao') ? document.getElementById('caraterCondicao').value : "",
        comprovantes_deficiencia: document.getElementById('comprovantesDeficiencia') ? document.getElementById('comprovantesDeficiencia').value : "",

        numero_processo_interdicao: document.getElementById('numeroProcessoInterdicao') ? document.getElementById('numeroProcessoInterdicao').value : "",
        vara_interdicao: document.getElementById('varaInterdicao') ? document.getElementById('varaInterdicao').value : "",
        comarca_interdicao: document.getElementById('comarcaInterdicao') ? document.getElementById('comarcaInterdicao').value : "",
        tipo_curatela: document.getElementById('tipoCuratela') ? document.getElementById('tipoCuratela').value : "",
        complemento_laudo_interdicao: document.getElementById('complementoLaudoInterdicao') ? document.getElementById('complementoLaudoInterdicao').value : "",
        sintomas_manifestacoes: document.getElementById('sintomasManifestacoes') ? document.getElementById('sintomasManifestacoes').value : "",

        data_documento_comprovacao: document.getElementById('dataDocumentoComprovacao') ? document.getElementById('dataDocumentoComprovacao').value : "",
        fundamentacao_legal_dib: document.getElementById('fundamentacaoLegalDib') ? document.getElementById('fundamentacaoLegalDib').value : "",
        data_reafirmacao_der: document.getElementById('dataReafirmacaoDer') ? document.getElementById('dataReafirmacaoDer').value : "",

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
document.getElementById('nomeCliente').addEventListener('input', function(evento) {
    const valorDigitado = evento.target.value.trim().toLowerCase();
    if (valorDigitado === 'teste da silva') {
        
        // Marca algumas das novas teses base para o teste
        if (document.getElementById('chkJulgamentoAntecipado')) document.getElementById('chkJulgamentoAntecipado').checked = true;
        if (document.getElementById('chkCoisaJulgada')) document.getElementById('chkCoisaJulgada').checked = true;
        if (document.getElementById('chkProvaEmprestada')) document.getElementById('chkProvaEmprestada').checked = true;
        if (document.getElementById('chkPrioridade')) document.getElementById('chkPrioridade').checked = true;
        if (document.getElementById('chkFixacaoDib')) document.getElementById('chkFixacaoDib').checked = true;
        atualizarTeses();
        
        // --- NOVOS CAMPOS: PRIORIDADE DE TRAMITAÇÃO ---
        if (document.getElementById('introLeiDeficiencia')) document.getElementById('introLeiDeficiencia').value = 'A Lei nº 12.764/12 (Lei Berenice Piana) define em seu art. 1º, § 2º que';
        if (document.getElementById('citacaoLeiDeficiencia')) document.getElementById('citacaoLeiDeficiencia').value = '§ 2º A pessoa com transtorno do espectro autista é considerada pessoa com deficiência, para todos os efeitos legais.';
        
        // --- NOVOS CAMPOS: COISA JULGADA ---
        if (document.getElementById('anoAcaoAnterior')) document.getElementById('anoAcaoAnterior').value = '2023';
        if (document.getElementById('nomeBeneficioAnterior')) document.getElementById('nomeBeneficioAnterior').value = 'BPC/LOAS';
        if (document.getElementById('numeroProcessoAnterior')) document.getElementById('numeroProcessoAnterior').value = '0001234-56.2023.4.05.8100';
        if (document.getElementById('tempoTranscorridoAnos')) document.getElementById('tempoTranscorridoAnos').value = '3';
        if (document.getElementById('tipoAgravamento')) document.getElementById('tipoAgravamento').value = 'de saúde e socioeconômico';
        if (document.getElementById('documentosNovosRelacao')) document.getElementById('documentosNovosRelacao').value = 'laudo médico pericial recente, receitas atualizadas e novo extrato do CadÚnico demonstrando a piora financeira';
        
        // --- RESTANTE DOS DADOS ---
        document.getElementById('temRepresentante').checked = true;
        alternarRepresentante();

        if (document.getElementById('descricaoGrupoFamiliar')) document.getElementById('descricaoGrupoFamiliar').value = '4';

        document.getElementById('subsecao').value = 'SÃO PAULO/SP';
        document.getElementById('der').value = '24/03/2026';
        document.getElementById('nb').value = '729.397.891-0';
        document.getElementById('oabAdvogado').value = '32.185';
        if (document.getElementById('ufOab')) document.getElementById('ufOab').value = 'SP';
        
        document.getElementById('valorCausa').value = 'R$ 14.589,00';
        document.getElementById('valorCausa').dispatchEvent(new Event('input'));
        
        document.getElementById('cpfCliente').value = '606.162.208-20';
        document.getElementById('rgNovoCliente').checked = true;
        sincronizarRgCpf('Cliente');
        document.getElementById('nacionalidadeCliente').value = 'Brasileiro(a)';
        document.getElementById('estadoCivilCliente').value = 'Solteiro(a)';
        
        document.getElementById('nomeRepresentante').value = 'Larissa Barbosa Mariano';
        document.getElementById('cpfRepresentante').value = '445.670.968-51';
        document.getElementById('rgNovoRep').checked = true;
        sincronizarRgCpf('Representante');
        if (document.getElementById('parentescoRepresentante')) document.getElementById('parentescoRepresentante').value = 'Cônjuge';
        document.getElementById('nacionalidadeRepresentante').value = 'Brasileiro(a)';
        document.getElementById('estadoCivilRepresentante').value = 'Casado(a)';
        
        document.getElementById('cep').value = '01047-020';
        document.getElementById('rua').value = 'Rua Rio Espera';
        document.getElementById('numero').value = '12, Casa 10';
        document.getElementById('bairro').value = 'Capão do Embira';
        document.getElementById('cidade').value = 'São Paulo';
        document.getElementById('uf').value = 'SP';
        
        document.getElementById('cepInss').value = '01047-020';
        document.getElementById('ruaInss').value = 'R. Cel. Xavier de Toledo';
        document.getElementById('numeroInss').value = '280';
        document.getElementById('bairroInss').value = 'Consolação';
        document.getElementById('cidadeInss').value = 'São Paulo';
        document.getElementById('ufInss').value = 'SP';

        // --- NOVOS CAMPOS: PERÍCIA JUDICIAL ---
        if (document.getElementById('tipoAcompanhamento')) document.getElementById('tipoAcompanhamento').value = 'multiprofissional';
        if (document.getElementById('unidadeSaude')) document.getElementById('unidadeSaude').value = 'CAPS Infantil';
        if (document.getElementById('naturezaImpedimento')) document.getElementById('naturezaImpedimento').value = 'mental';
        if (document.getElementById('especialidadePerito')) document.getElementById('especialidadePerito').value = 'Psiquiatria ou Neurologia';

        // --- NOVOS CAMPOS: JULGAMENTO ANTECIPADO ---
        if (document.getElementById('radHipNotoria')) {
            document.getElementById('radHipNotoria').checked = true;
            alternarHipoteseJulgamento();
        }
        if (document.getElementById('caraterCondicao')) document.getElementById('caraterCondicao').value = 'irreversível';
        if (document.getElementById('comprovantesDeficiencia')) document.getElementById('comprovantesDeficiencia').value = 'laudos da APAE e laudo psiquiátrico atualizado';

        // --- NOVOS CAMPOS: PROVA EMPRESTADA ---
        if (document.getElementById('numeroProcessoInterdicao')) document.getElementById('numeroProcessoInterdicao').value = '0123456-78.2024.8.06.0087';
        if (document.getElementById('varaInterdicao')) document.getElementById('varaInterdicao').value = 'Vara Única';
        if (document.getElementById('comarcaInterdicao')) document.getElementById('comarcaInterdicao').value = 'Guaraciaba do Norte/CE';
        if (document.getElementById('tipoCuratela')) document.getElementById('tipoCuratela').value = 'definitiva';
        if (document.getElementById('complementoLaudoInterdicao')) document.getElementById('complementoLaudoInterdicao').value = 'e corroborado por relatório multidisciplinar do CAPS Infantil';
        if (document.getElementById('sintomasManifestacoes')) document.getElementById('sintomasManifestacoes').value = 'crises convulsivas recorrentes, ausência de fala e total dependência para atividades básicas de higiene e alimentação';

        // --- NOVOS CAMPOS: FIXAÇÃO DA DIB ---
        if (document.getElementById('dataDocumentoComprovacao')) document.getElementById('dataDocumentoComprovacao').value = '10 de fevereiro de 2026';
        if (document.getElementById('fundamentacaoLegalDib')) document.getElementById('fundamentacaoLegalDib').value = 'art. 20 da Lei nº 8.742/93 c/c art. 174 do Decreto nº 3.048/99';

        if (document.getElementById('chkReafirmacaoDer')) document.getElementById('chkReafirmacaoDer').checked = true;

        // --- NOVOS CAMPOS: REAFIRMAÇÃO DA DER ---
        if (document.getElementById('dataReafirmacaoDer')) document.getElementById('dataReafirmacaoDer').value = '15 de agosto de 2026';

        // --- DADOS MÉDICOS E FATORES PERICIAIS ---
        if (document.getElementById('diagnosticoCid')) document.getElementById('diagnosticoCid').value = 'Transtorno do Espectro Autista - CID 10 F84.0';
        if (document.getElementById('siglaDoenca')) document.getElementById('siglaDoenca').value = 'TEA';
        if (document.getElementById('fatoresAvaliacao')) document.getElementById('fatoresAvaliacao').value = 'Impedimento de longo prazo e fatores ambientais GRAVES';
        if (document.getElementById('detalhesLaudo')) document.getElementById('detalhesLaudo').value = 'O paciente apresenta severa dificuldade de interação social, ausência de fala e crises de agressividade constantes, necessitando de acompanhamento contínuo para atividades básicas da vida diária.';
        
        // Dispara os eventos de formatação e Validação de CPF
        document.getElementById('cpfCliente').dispatchEvent(new Event('blur'));
        document.getElementById('cpfRepresentante').dispatchEvent(new Event('blur'));
        
        console.log("Campos base e teses preenchidos automaticamente para testes!");
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
    
    // Se o campo estiver vazio ou incompleto (menos de 14 caracteres com a máscara), fica neutro.
    // Isso evita que a caixa fique vermelha enquanto o usuário ainda está na metade do CPF.
    if (cpf.length < 14) {
        input.classList.remove('campo-valido', 'campo-invalido');
        return;
    }
    
    // Assim que bater os 14 caracteres, ele testa na mesma hora
    if (calcularValidadeCPF(cpf)) {
        input.classList.remove('campo-invalido');
        input.classList.add('campo-valido');
    } else {
        input.classList.remove('campo-valido');
        input.classList.add('campo-invalido');
    }
}

document.getElementById('cpfCliente').addEventListener('input', mascararCPF);
// Trocamos o 'blur' por 'input' abaixo para checar em tempo real:
document.getElementById('cpfCliente').addEventListener('input', verificarCampoCPF); 

document.getElementById('cpfRepresentante').addEventListener('input', mascararCPF);
// Trocamos o 'blur' por 'input' abaixo para checar em tempo real:
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
document.getElementById('cepInss').addEventListener('input', mascararCEP);

document.addEventListener('input', function(evento) {
    if (evento.target.tagName === 'INPUT' && evento.target.type === 'text') {
        const cursorPosition = evento.target.selectionStart;
        evento.target.value = evento.target.value.toUpperCase();
        evento.target.setSelectionRange(cursorPosition, cursorPosition);
    }
});

// =========================================================
// 8. FUNÇÕES PARA LIMPAR TODOS OS DADOS DA TELA
// =========================================================

// Esta função agora apenas exibe o nosso modal HTML bonito
function limparDados() {
    document.getElementById('modalConfirmacao').style.display = 'flex';
}

// Esta função esconde o modal se o usuário clicar em "Cancelar"
function fecharModalLimpar() {
    document.getElementById('modalConfirmacao').style.display = 'none';
}

// Esta função realmente apaga tudo se o usuário clicar em "Sim, limpar tudo"
function executarLimpeza() {
    // 1. Esconde o modal primeiro
    fecharModalLimpar();

    // 2. Limpa todos os inputs de texto e textareas
    document.querySelectorAll('input[type="text"], textarea').forEach(campo => {
        campo.value = '';
        campo.classList.remove('campo-invalido', 'campo-valido', 'campo-buscando');
    });

    // 3. Desmarca todos os checkboxes e radio buttons
    document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(campo => {
        campo.checked = false;
    });

    // 4. Reseta todos os selects (menus suspensos) para a primeira opção
    document.querySelectorAll('select').forEach(campo => {
        campo.selectedIndex = 0;
    });

    // 5. Limpa as variáveis das imagens coladas
    imgRenda = [];
    imgPericial = [];
    imgLaudo = [];
    anexosMedicos = []; 
    fotosCasa = [];     
    imgCoisaJulgada = [];
    
    // 6. Limpa a visualização das galerias na tela
    document.querySelectorAll('.gallery-container').forEach(galeria => {
        galeria.innerHTML = '';
    });

    // 7. Limpa textos dinâmicos (Valor por extenso e nome do PDF)
    const textoValor = document.getElementById('textoValorExtenso');
    if (textoValor) textoValor.innerText = '';
    
    const labelPdf = document.getElementById('label_pdf');
    if (labelPdf) labelPdf.innerText = 'Nenhum PDF selecionado';
    caminhoPdfAtual = "";

    // 8. Força a atualização da tela para esconder os blocos dinâmicos
    atualizarTeses();
    alternarRepresentante();
    if (typeof alternarHipoteseJulgamento === "function") alternarHipoteseJulgamento();

    // 9. Rola a página suavemente de volta para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}