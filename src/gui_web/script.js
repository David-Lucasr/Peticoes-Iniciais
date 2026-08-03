let sistemaAtual = "";
let causaAtual = "";

// =========================================================
// 1. GERENCIADOR DE MÓDULOS E TELAS
// =========================================================
function irParaProcessos(sistema) {
    sistemaAtual = sistema;
    
    // Esconde todos os blocos marcados como "específicos" (limpa a tela)
    document.querySelectorAll('.modulo-especifico').forEach(el => {
        el.style.display = 'none';
    });
    
    // Mostra apenas os blocos que pertencem ao sistema clicado
    if (sistema === 'bpc') {
        document.querySelectorAll('.modulo-bpc').forEach(el => el.style.display = 'block');
        mudarTela('telaMotivoBpc');
    } else if (sistema === 'rural') {
        alert("Sistema Rural em breve!");
    }
}

function iniciarFormulario(causa) {
    causaAtual = causa;
    
    // Atualiza o valor invisível do select/input de causa que o Python lê
    const selectCausa = document.getElementById('causaBpc');
    if (selectCausa) {
        selectCausa.value = causa;
    }

    const titulo = document.getElementById('tituloFormulario');
    
    // Captura os blocos de texto dinâmicos
    const blocoFatores = document.getElementById('blocoFatores');
    const blocoDataLaudo = document.getElementById('blocoDataLaudo');
    const blocoParentesco = document.getElementById('blocoParentesco'); 
    const blocoReavaliacao = document.getElementById('blocoReavaliacao');
    
    // Captura os blocos de imagens dinâmicos
    const caixaImgRenda = document.getElementById('caixa_img_renda');
    const caixaImgPericial = document.getElementById('caixa_img_pericial');
    const caixaFotosCasa = document.getElementById('caixa_fotos_casa');
    const blocoImagensReavaliacao = document.getElementById('blocoImagensReavaliacao');
    
    // Captura o checkbox do Representante Legal
    const chkRepresentante = document.getElementById('temRepresentante');

    // 1. REGRA PADRÃO (Reseta a tela antes de aplicar o modelo)
    if (blocoReavaliacao) blocoReavaliacao.style.display = 'none';
    if (blocoImagensReavaliacao) blocoImagensReavaliacao.style.display = 'none';
    if (caixaImgRenda) caixaImgRenda.style.display = '';
    if (caixaImgPericial) caixaImgPericial.style.display = '';
    if (caixaFotosCasa) caixaFotosCasa.style.display = '';

    // 2. REGRAS ESPECÍFICAS DE CADA MODELO
    if (causa === 'deficiencia') {
        titulo.innerText = "Formulário BPC - Deficiência";
        if (blocoFatores) blocoFatores.style.display = '';
        if (blocoDataLaudo) blocoDataLaudo.style.display = 'none';
        if (blocoParentesco) blocoParentesco.style.display = 'none';

        if (chkRepresentante) {
            chkRepresentante.checked = false;
            alternarRepresentante();
        }

    } else if (causa === 'deficiencia_curatela') {
        titulo.innerText = "Formulário BPC - Deficiência c/ Curatela";
        if (blocoFatores) blocoFatores.style.display = '';
        if (blocoDataLaudo) blocoDataLaudo.style.display = 'none';
        if (blocoParentesco) blocoParentesco.style.display = ''; 

        if (chkRepresentante) {
            chkRepresentante.checked = true;
            alternarRepresentante();
        }

    } else if (causa === 'reavaliacao') {
        titulo.innerText = "Formulário BPC - Restabelecimento/Reavaliação";
        if (blocoFatores) blocoFatores.style.display = 'none'; // Não usa fatores
        if (blocoDataLaudo) blocoDataLaudo.style.display = 'none';
        if (blocoParentesco) blocoParentesco.style.display = 'none';
        
        // Exibe as áreas exclusivas de Reavaliação
        if (blocoReavaliacao) blocoReavaliacao.style.display = '';
        if (blocoImagensReavaliacao) blocoImagensReavaliacao.style.display = 'flex';
        
        // Esconde as imagens que não usamos neste modelo
        if (caixaImgRenda) caixaImgRenda.style.display = 'none';
        if (caixaImgPericial) caixaImgPericial.style.display = 'none';
        if (caixaFotosCasa) caixaFotosCasa.style.display = 'none';

        if (chkRepresentante) {
            chkRepresentante.checked = false;
            alternarRepresentante();
        }

    } else if (causa === 'bolsa_familia') {
        titulo.innerText = "Formulário BPC - Cômputo do Bolsa Família";
        if (blocoFatores) blocoFatores.style.display = 'none';
        if (caixaImgPericial) caixaImgPericial.style.display = 'none'; // Não usa no Bolsa Família
        if (blocoDataLaudo) blocoDataLaudo.style.display = '';
        if (blocoParentesco) blocoParentesco.style.display = 'none';

        if (chkRepresentante) {
            chkRepresentante.checked = false;
            alternarRepresentante();
        }

    } else {
        titulo.innerText = "Formulário BPC - Renda Superior";
        if (blocoFatores) blocoFatores.style.display = 'none';
        if (caixaImgPericial) caixaImgPericial.style.display = 'none'; // Não usa em Renda Superior
        if (blocoDataLaudo) blocoDataLaudo.style.display = 'none';
        if (blocoParentesco) blocoParentesco.style.display = 'none';

        if (chkRepresentante) {
            chkRepresentante.checked = false;
            alternarRepresentante();
        }
    }

    mudarTela('telaFormulario');
}

function voltarPara(idTelaDestino) {
    mudarTela(idTelaDestino);
}

function mudarTela(idTelaAtiva) {
    // Esconde todas as telas
    const telas = document.querySelectorAll('.step-screen');
    telas.forEach(tela => tela.classList.remove('active'));

    // Mostra apenas a tela solicitada
    document.getElementById(idTelaAtiva).classList.add('active');
    
    // Rola a página para o topo suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =========================================================
// LÓGICA DO CHECKBOX DO REPRESENTANTE E SINCRONIZAÇÃO DE RG
// =========================================================
function alternarRepresentante() {
    const checkbox = document.getElementById('temRepresentante');
    const grupo = document.getElementById('grupoRepresentante');
    
    if (checkbox.checked) {
        grupo.style.display = 'grid'; 
    } else {
        grupo.style.display = 'none';
        // Limpa os campos visualmente se o usuário desmarcar
        document.getElementById('nomeRepresentante').value = '';
        document.getElementById('cpfRepresentante').value = '';
        document.getElementById('rgRepresentante').value = '';
        document.getElementById('nacionalidadeRepresentante').value = '';
        document.getElementById('estadoCivilRepresentante').value = '';
        if (document.getElementById('parentescoRepresentante')) document.getElementById('parentescoRepresentante').value = '';
        // Remove configuração do RG vinculado
        const cbRgRep = document.getElementById('rgNovoRep');
        if (cbRgRep) cbRgRep.checked = false;
        sincronizarRgCpf('Representante');

        // Remove avisos de erro de CPF
        document.getElementById('cpfRepresentante').classList.remove('campo-invalido', 'campo-valido');
    }
}

function sincronizarRgCpf(tipo) {
    const checkbox = document.getElementById(tipo === 'Cliente' ? 'rgNovoCliente' : 'rgNovoRep');
    const inputCpf = document.getElementById(tipo === 'Cliente' ? 'cpfCliente' : 'cpfRepresentante');
    const inputRg = document.getElementById(tipo === 'Cliente' ? 'rgCliente' : 'rgRepresentante');

    if (checkbox && checkbox.checked) {
        inputRg.value = inputCpf.value;
        inputRg.readOnly = true; // Bloqueia edição manual se for igual ao CPF
        inputRg.style.backgroundColor = 'var(--surface-3)'; // Deixa mais escuro
        inputRg.style.opacity = '0.7';
    } else {
        if (inputRg.readOnly) inputRg.value = ""; // Limpa se acabou de desmarcar
        inputRg.readOnly = false;
        inputRg.style.backgroundColor = 'var(--surface-2)';
        inputRg.style.opacity = '1';
    }
}

// =========================================================
// GESTÃO DE IMAGENS E ARQUIVOS
// =========================================================
let imagensCategorizadas = {
    "img_renda": "",
    "img_pericial": "",
    "img_laudo": "",
    "img_extrato_cessacao": ""
};

let anexosMedicos = []; 
let fotosCasa = [];     
let impedimentoImagens = [];
let avaliacaoSocialImagens = [];
let contadorId = 0;     

let caixaAtivaParaColar = null;
let caminhoPdfAtual = "";

async function selecionarPdf() {
    const caminho = await pywebview.api.escolher_pdf();
    if (caminho) {
        caminhoPdfAtual = caminho;
        document.getElementById('label_pdf').innerText = "PDF Selecionado: " + caminho;
    }
}

function selecionarCaixa(chave){
    caixaAtivaParaColar = chave;

    // Reseta todas as bordas
    const caixas = [
        'img_renda', 'img_pericial', 'img_laudo', 'anexos_medicos', 'fotos_casa', 
        'img_extrato_cessacao', 'img_impedimento', 'img_avaliacao_social'
    ];
    
    caixas.forEach(c => {
        const divCaixa = document.getElementById('caixa_' + c);
        if (divCaixa) divCaixa.style.border = "1px dashed var(--border)";
    });

    // Colore a borda ativa
    const divAtiva = document.getElementById('caixa_' + chave);
    if(divAtiva) {
        if(chave === 'anexos_medicos') divAtiva.style.border = "3px solid var(--success)";
        else if(chave === 'fotos_casa') divAtiva.style.border = "3px solid var(--info)";
        else if(chave === 'img_extrato_cessacao') divAtiva.style.border = "3px solid #f59e0b";
        else if(chave === 'img_impedimento') divAtiva.style.border = "3px solid #ea580c";
        else if(chave === 'img_avaliacao_social') divAtiva.style.border = "3px solid #e11d48";
        else divAtiva.style.border = "3px solid var(--accent)";
    }
}

// =========================================================
// RENDERIZAÇÃO DAS GALERIAS DINÂMICAS
// =========================================================
function renderizarGaleriaMedicos() {
    const container = document.getElementById('galeria_anexos_medicos');
    if(!container) return;
    container.innerHTML = "";

    anexosMedicos.forEach(doc => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <img src="${doc.base64}">
            <input type="text" placeholder="Ex: Receita Médica" value="${doc.titulo}" 
                   onchange="atualizarTituloMedico(${doc.id}, this.value)" 
                   onclick="event.stopPropagation();">
            <button class="btn-remove" onclick="removerItem(${doc.id}, 'medicos'); event.stopPropagation();">Remover</button>
        `;
        container.appendChild(card);
    });
}

function renderizarGaleriaCasa() {
    const container = document.getElementById('galeria_fotos_casa');
    if(!container) return;
    container.innerHTML = ""; 

    fotosCasa.forEach(foto => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <img src="${foto.base64}">
            <button class="btn-remove" onclick="removerItem(${foto.id}, 'casa'); event.stopPropagation();">Remover</button>
        `;
        container.appendChild(card);
    });
}

function renderizarGaleriaImpedimento() {
    const container = document.getElementById('galeria_img_impedimento');
    if(!container) return;
    container.innerHTML = ""; 

    impedimentoImagens.forEach(img => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <img src="${img.base64}">
            <button class="btn-remove" onclick="removerItem(${img.id}, 'impedimento'); event.stopPropagation();">Remover</button>
        `;
        container.appendChild(card);
    });
}

function renderizarGaleriaAvaliacao() {
    const container = document.getElementById('galeria_img_avaliacao_social');
    if(!container) return;
    container.innerHTML = ""; 

    avaliacaoSocialImagens.forEach(img => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <img src="${img.base64}">
            <button class="btn-remove" onclick="removerItem(${img.id}, 'avaliacao'); event.stopPropagation();">Remover</button>
        `;
        container.appendChild(card);
    });
}

function atualizarTituloMedico(id, novoTitulo) {
    const index = anexosMedicos.findIndex(doc => doc.id === id);
    if (index !== -1) anexosMedicos[index].titulo = novoTitulo;
}

function removerItem(id, tipo) {
    if (tipo === 'medicos') { anexosMedicos = anexosMedicos.filter(i => i.id !== id); renderizarGaleriaMedicos(); }
    else if (tipo === 'casa') { fotosCasa = fotosCasa.filter(i => i.id !== id); renderizarGaleriaCasa(); }
    else if (tipo === 'impedimento') { impedimentoImagens = impedimentoImagens.filter(i => i.id !== id); renderizarGaleriaImpedimento(); }
    else if (tipo === 'avaliacao') { avaliacaoSocialImagens = avaliacaoSocialImagens.filter(i => i.id !== id); renderizarGaleriaAvaliacao(); }
}

// =========================================================
// LISTENER DE COLA (Ctrl + V)
// =========================================================
document.addEventListener('paste', function(evento) {
    if (!caixaAtivaParaColar) {
        alert("Por favor, clique em uma das caixas para colar a imagem.");
        return;
    }

    const itens = (evento.clipboardData || evento.originalEvent.clipboardData).items;
    for (let i = 0; i < itens.length; i++) {
        if (itens[i].type.indexOf("image") === 0) {
            const arquivoBlob = itens[i].getAsFile();
            const leitor = new FileReader();

            leitor.onload = function(eventoLeitura) {
                const base64 = eventoLeitura.target.result;

                if (caixaAtivaParaColar === 'anexos_medicos') {
                    anexosMedicos.push({ id: contadorId++, base64: base64, titulo: "Anexo Médico" });
                    renderizarGaleriaMedicos();
                } 
                else if (caixaAtivaParaColar === 'fotos_casa') {
                    fotosCasa.push({ id: contadorId++, base64: base64 });
                    renderizarGaleriaCasa();
                }
                else if (caixaAtivaParaColar === 'img_impedimento') {
                    impedimentoImagens.push({ id: contadorId++, base64: base64 });
                    renderizarGaleriaImpedimento();
                }
                else if (caixaAtivaParaColar === 'img_avaliacao_social') {
                    avaliacaoSocialImagens.push({ id: contadorId++, base64: base64 });
                    renderizarGaleriaAvaliacao();
                }
                else {
                    imagensCategorizadas[caixaAtivaParaColar] = base64;
                    const divPreview = document.getElementById('preview_' + caixaAtivaParaColar);
                    if(divPreview) divPreview.innerHTML = `<img src="${base64}" style="max-height: 120px; border: 1px solid var(--border-soft); border-radius: 4px; margin-top: 10px;" />`;
                }
            };
            leitor.readAsDataURL(arquivoBlob);
        }
    }
});

// =========================================================
// ENVIO PARA O PYTHON
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
        alert("Atenção: Os CPFs destacados em vermelho são inválidos. Corrija-os antes de gerar o processo.");
        return; 
    }

    let rgClienteFinal = document.getElementById('rgCliente') ? document.getElementById('rgCliente').value.trim() : "";
    if (rgClienteFinal === "") rgClienteFinal = "______________";

    let rgRepresentanteFinal = possuiRep && document.getElementById('rgRepresentante') ? document.getElementById('rgRepresentante').value.trim() : "";
    if (possuiRep && rgRepresentanteFinal === "") rgRepresentanteFinal = "______________";

    const anexosParaPython = anexosMedicos.map(doc => ({
        titulo: doc.titulo,
        imagem_base64: doc.base64
    }));

    const fotosCasaParaPython = fotosCasa.map(foto => foto.base64);
    const impedimentosParaPython = impedimentoImagens.map(img => img.base64);
    const avaliacaoParaPython = avaliacaoSocialImagens.map(img => img.base64);
    
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

    const valorDigitado = document.getElementById('valorCausa') ? document.getElementById('valorCausa').value : "";
    const valorExtenso = document.getElementById('textoValorExtenso') ? document.getElementById('textoValorExtenso').innerText : "";
    let valorCausaFinal = valorDigitado;
    if (valorDigitado && valorExtenso) {
        valorCausaFinal = `${valorDigitado} (${valorExtenso})`;
    }

    // Montando o Objeto estruturado (Payload JSON)
    const payloadBruto = {
        causa: document.getElementById('causaBpc') ? document.getElementById('causaBpc').value : "",
        subsecao_judiciaria: document.getElementById('subsecao') ? document.getElementById('subsecao').value : "",
        der: document.getElementById('der') ? document.getElementById('der').value : "",
        nb: document.getElementById('nb') ? document.getElementById('nb').value : "",
        valor_causa: valorCausaFinal,
        
        nome_cliente: document.getElementById('nomeCliente') ? document.getElementById('nomeCliente').value : "",
        cpf_cliente: document.getElementById('cpfCliente') ? document.getElementById('cpfCliente').value : "",
        rg_cliente: rgClienteFinal,
        nacionalidade_cliente: document.getElementById('nacionalidadeCliente') ? document.getElementById('nacionalidadeCliente').value : "",
        estado_civil_cliente: document.getElementById('estadoCivilCliente') ? document.getElementById('estadoCivilCliente').value : "",
        
        tem_representante: possuiRep,
        
        nome_representante: possuiRep && document.getElementById('nomeRepresentante') ? document.getElementById('nomeRepresentante').value : "",
        cpf_representante: possuiRep && document.getElementById('cpfRepresentante') ? document.getElementById('cpfRepresentante').value : "",
        rg_representante: possuiRep ? rgRepresentanteFinal : "",
        parentesco_representante: possuiRep && document.getElementById('parentescoRepresentante') ? document.getElementById('parentescoRepresentante').value : "",
        nacionalidade_representante: possuiRep && document.getElementById('nacionalidadeRepresentante') ? document.getElementById('nacionalidadeRepresentante').value : "",
        estado_civil_representante: possuiRep && document.getElementById('estadoCivilRepresentante') ? document.getElementById('estadoCivilRepresentante').value : "",
        
        endereco_completo: enderecoMontado,
        endereco_inss: enderecoInssMontado, 
        
        rua: rua, numero: numero, bairro: bairro, cidade: cidade, uf: uf, cep: cep,
        rua_inss: ruaInss, numero_inss: numeroInss, bairro_inss: bairroInss, 
        cidade_inss: cidadeInss, uf_inss: ufInss, cep_inss: cepInss,
        
        idade_cliente: document.getElementById('idadeCliente') ? document.getElementById('idadeCliente').value : "",
        motivo_indeferimento: document.getElementById('motivoIndeferimento') ? document.getElementById('motivoIndeferimento').value : "",
        data_inicio_beneficio: document.getElementById('dataInicioBeneficio') ? document.getElementById('dataInicioBeneficio').value : "",
        data_cessacao: document.getElementById('dataCessacao') ? document.getElementById('dataCessacao').value : "",

        diagnostico_cid: document.getElementById('diagnosticoCid') ? document.getElementById('diagnosticoCid').value : "",
        sigla_doenca: document.getElementById('siglaDoenca') ? document.getElementById('siglaDoenca').value : "",
        data_laudo: document.getElementById('dataLaudo') ? document.getElementById('dataLaudo').value : "",
        fatores_avaliacao: document.getElementById('fatoresAvaliacao') ? document.getElementById('fatoresAvaliacao').value : "",
        oab_advogado: document.getElementById('oabAdvogado') ? document.getElementById('oabAdvogado').value : "",
        intro_lei_deficiencia: document.getElementById('introLeiDeficiencia') ? document.getElementById('introLeiDeficiencia').value : "",
        citacao_lei_deficiencia: document.getElementById('citacaoLeiDeficiencia') ? document.getElementById('citacaoLeiDeficiencia').value : "",
        detalhes_laudo: document.getElementById('detalhesLaudo') ? document.getElementById('detalhesLaudo').value : "",
        descricao_grupo_familiar: document.getElementById('descricaoGrupoFamiliar') ? document.getElementById('descricaoGrupoFamiliar').value : "",
        
        imagens_categorizadas: imagensCategorizadas,
        anexos_medicos_dinamicos: anexosParaPython,
        fotos_casa: fotosCasaParaPython,
        lista_img_impedimento: impedimentosParaPython,
        lista_img_avaliacao_social: avaliacaoParaPython,
        pasta_destino: pastaSelecionada,
        caminho_pdf: caminhoPdfAtual
    };

    // Garante conversão estrita para JSON string caso precise inspecionar ou enviar
    const dadosJsonString = JSON.stringify(payloadBruto);

    document.body.style.cursor = 'wait';

    try {
        // Passamos o objeto direto (o pywebview já faz o parse automático para dicionário Python)
        const resposta = await pywebview.api.gerar_formulario(JSON.parse(dadosJsonString));
        alert(resposta);
    } catch (erro) {
        alert("Ocorreu um erro: " + erro);
    } finally {
        document.body.style.cursor = 'default';
    }
}

// =========================================================
// ATALHO DE DESENVOLVEDOR: Preenchimento Automático
// =========================================================
document.getElementById('nomeCliente').addEventListener('input', function(evento) {
    const valorDigitado = evento.target.value.trim().toLowerCase();
    if (valorDigitado === 'teste da silva') {
        
        document.getElementById('temRepresentante').checked = true;
        alternarRepresentante();

        // Autocompleta a causa se estiver vazia (seta como reavaliação para testar as novidades)
        if (document.getElementById('causaBpc') && document.getElementById('causaBpc').value === "") {
            document.getElementById('causaBpc').value = 'reavaliacao';
            iniciarFormulario('reavaliacao');
        }
        
        if (document.getElementById('subsecao')) document.getElementById('subsecao').value = 'SÃO PAULO/SP';
        if (document.getElementById('der')) document.getElementById('der').value = '24/03/2026';
        if (document.getElementById('nb')) document.getElementById('nb').value = '729.397.891-0';
        
        if (document.getElementById('valorCausa')) {
            document.getElementById('valorCausa').value = 'R$ 14.589,00';
            document.getElementById('valorCausa').dispatchEvent(new Event('input'));
        }
        
        // Cliente
        if (document.getElementById('cpfCliente')) document.getElementById('cpfCliente').value = '606.162.208-20';
        if (document.getElementById('rgNovoCliente')) document.getElementById('rgNovoCliente').checked = true;
        sincronizarRgCpf('Cliente');
        if (document.getElementById('nacionalidadeCliente')) document.getElementById('nacionalidadeCliente').value = 'Brasileiro(a)';
        if (document.getElementById('estadoCivilCliente')) document.getElementById('estadoCivilCliente').value = 'Solteiro(a)';
        
        // Representante
        if (document.getElementById('nomeRepresentante')) document.getElementById('nomeRepresentante').value = 'Larissa Barbosa Mariano';
        if (document.getElementById('cpfRepresentante')) document.getElementById('cpfRepresentante').value = '445.670.968-51';
        if (document.getElementById('rgNovoRep')) document.getElementById('rgNovoRep').checked = true;
        sincronizarRgCpf('Representante');
        if (document.getElementById('parentescoRepresentante')) document.getElementById('parentescoRepresentante').value = 'Cônjuge';
        if (document.getElementById('nacionalidadeRepresentante')) document.getElementById('nacionalidadeRepresentante').value = 'Brasileiro(a)';
        if (document.getElementById('estadoCivilRepresentante')) document.getElementById('estadoCivilRepresentante').value = 'Casado(a)';
        
        // Endereços
        if (document.getElementById('cep')) document.getElementById('cep').value = '01047-020';
        if (document.getElementById('rua')) document.getElementById('rua').value = 'Rua Rio Espera';
        if (document.getElementById('numero')) document.getElementById('numero').value = '12, Casa 10';
        if (document.getElementById('bairro')) document.getElementById('bairro').value = 'Capão do Embira';
        if (document.getElementById('cidade')) document.getElementById('cidade').value = 'São Paulo';
        if (document.getElementById('uf')) document.getElementById('uf').value = 'SP';
        
        if (document.getElementById('cepInss')) {
            document.getElementById('cepInss').value = '01047-020';
            document.getElementById('ruaInss').value = 'R. Cel. Xavier de Toledo';
            document.getElementById('numeroInss').value = '280';
            document.getElementById('bairroInss').value = 'Consolação';
            document.getElementById('cidadeInss').value = 'São Paulo';
            document.getElementById('ufInss').value = 'SP';
        }
        
        // Novos Campos Reavaliação
        if (document.getElementById('idadeCliente')) document.getElementById('idadeCliente').value = '39';
        if (document.getElementById('motivoIndeferimento')) document.getElementById('motivoIndeferimento').value = 'Avaliação biopsicossocial foi contrária a manutenção do benefício';
        if (document.getElementById('dataInicioBeneficio')) document.getElementById('dataInicioBeneficio').value = '11/02/2014';
        if (document.getElementById('dataCessacao')) document.getElementById('dataCessacao').value = '28/11/2025';

        // Dados Médicos
        if (document.getElementById('diagnosticoCid')) document.getElementById('diagnosticoCid').value = 'Transtorno do Espectro do Autismo Nível 3 (severo) (TEA)- CID 10 F 84.0';
        if (document.getElementById('siglaDoenca')) document.getElementById('siglaDoenca').value = 'TEA';
        if (document.getElementById('dataLaudo')) document.getElementById('dataLaudo').value = '15/05/2026';
        if (document.getElementById('fatoresAvaliacao')) document.getElementById('fatoresAvaliacao').value = 'fatores ambientais GRAVE e atividades e participações MODERADA';
        if (document.getElementById('oabAdvogado')) document.getElementById('oabAdvogado').value = '32.185';
        if (document.getElementById('introLeiDeficiencia')) document.getElementById('introLeiDeficiencia').value = 'Ressalte-se que a legislação equipara a pessoa com diagnóstico de TEA à pessoa com deficiência...';
        if (document.getElementById('citacaoLeiDeficiencia')) document.getElementById('citacaoLeiDeficiencia').value = 'Art. 1º Esta Lei institui a Política Nacional de Proteção...';
        if (document.getElementById('detalhesLaudo')) document.getElementById('detalhesLaudo').value = 'Este transtorno do neurodesenvolvimento é uma condição permanente que se manifesta...';
        if (document.getElementById('descricaoGrupoFamiliar')) document.getElementById('descricaoGrupoFamiliar').value = '04';
        
        if (document.getElementById('cpfCliente')) document.getElementById('cpfCliente').dispatchEvent(new Event('blur'));
        if (document.getElementById('cpfRepresentante')) document.getElementById('cpfRepresentante').dispatchEvent(new Event('blur'));
        
        console.log("Campos preenchidos automaticamente para testes!");
    }
});

// =========================================================
// FUNÇÃO INTELIGENTE: NÚMERO PARA EXTENSO (MOEDA BRASILEIRA)
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

// =========================================================
// VALIDAÇÃO E MÁSCARAS DIVERSAS (MOEDA, DATA, CPF)
// =========================================================

// Máscara de Moeda (Valor da Causa)
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
if (document.getElementById('valorCausa')) document.getElementById('valorCausa').addEventListener('input', mascararMoeda);

// Máscara de Data (DER, Laudo, Início de Benefício e Cessação)
function mascararData(evento) {
    let v = evento.target.value.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/, "$1/$2");
    v = v.replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
    evento.target.value = v;
}
if (document.getElementById('der')) document.getElementById('der').addEventListener('input', mascararData);
if (document.getElementById('dataLaudo')) document.getElementById('dataLaudo').addEventListener('input', mascararData);
if (document.getElementById('dataInicioBeneficio')) document.getElementById('dataInicioBeneficio').addEventListener('input', mascararData);
if (document.getElementById('dataCessacao')) document.getElementById('dataCessacao').addEventListener('input', mascararData);

// Máscara e Validador de CPF
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
    
    if (cpf === "") {
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

if (document.getElementById('cpfCliente')) {
    document.getElementById('cpfCliente').addEventListener('input', mascararCPF);
    document.getElementById('cpfCliente').addEventListener('blur', verificarCampoCPF);
}
if (document.getElementById('cpfRepresentante')) {
    document.getElementById('cpfRepresentante').addEventListener('input', mascararCPF);
    document.getElementById('cpfRepresentante').addEventListener('blur', verificarCampoCPF);
}

// =========================================================
// VALIDAÇÃO, MÁSCARA E BUSCA AUTOMÁTICA DE CEP (VIA CEP)
// =========================================================
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

if (document.getElementById('cep')) document.getElementById('cep').addEventListener('input', mascararCEP);
if (document.getElementById('cepInss')) document.getElementById('cepInss').addEventListener('input', mascararCEP);