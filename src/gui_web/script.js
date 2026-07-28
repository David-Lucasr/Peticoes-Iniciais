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
        // Exemplo para o futuro: document.querySelectorAll('.modulo-rural').forEach(el => el.style.display = 'block');
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

    // Altera o título da tela de acordo com a escolha
    const titulo = document.getElementById('tituloFormulario');
    if (causa === 'deficiencia') {
        titulo.innerText = "Formulário BPC - Deficiência";
    } else if (causa === 'bolsa-familia') {
        titulo.innerText = "Formulário BPC - Bolsa Família";
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

let imagensCategorizadas = {
    "img_renda": "",
    "img_pericial": "",
    "img_laudo": ""
};

let anexosMedicos = []; 
let fotosCasa = [];     
let contadorId = 0;     

let caixaAtivaParaColar = null;
let caminhoPdfAtual = "";

// =========================================================
// 1. SELEÇÃO DE ARQUIVOS (PDF e Caixas)
// =========================================================
async function selecionarPdf() {
    const caminho = await pywebview.api.escolher_pdf();
    if (caminho) {
        caminhoPdfAtual = caminho;
        document.getElementById('label_pdf').innerText = "PDF Selecionado: " + caminho;
    }
}

function selecionarCaixa(chave){
    caixaAtivaParaColar = chave;

    document.getElementById('caixa_img_renda').style.border = "1px dashed var(--border)";
    document.getElementById('caixa_img_pericial').style.border = "1px dashed var(--border)";
    document.getElementById('caixa_img_laudo').style.border = "1px dashed var(--border)";
    document.getElementById('caixa_anexos_medicos').style.border = "1px dashed var(--border)";
    document.getElementById('caixa_fotos_casa').style.border = "1px dashed var(--border)";

    // Usa as cores modernas do seu CSS
    if(chave === 'anexos_medicos') document.getElementById('caixa_' + chave).style.border = "3px solid var(--success)";
    else if(chave === 'fotos_casa') document.getElementById('caixa_' + chave).style.border = "3px solid var(--info)";
    else document.getElementById('caixa_' + chave).style.border = "3px solid var(--accent)";
}

// =========================================================
// 2. RENDERIZAÇÃO DAS GALERIAS DINÂMICAS
// =========================================================
function renderizarGaleriaMedicos() {
    const container = document.getElementById('galeria_anexos_medicos');
    container.innerHTML = "";

    anexosMedicos.forEach(doc => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <img src="${doc.base64}">
            <input type="text" placeholder="Ex: Receita Médica" value="${doc.titulo}" 
                   onchange="atualizarTituloMedico(${doc.id}, this.value)" 
                   onclick="event.stopPropagation();">
            <button class="btn-remove" onclick="removerMedico(${doc.id}); event.stopPropagation();">Remover</button>
        `;
        container.appendChild(card);
    });
}

function renderizarGaleriaCasa() {
    const container = document.getElementById('galeria_fotos_casa');
    container.innerHTML = ""; 

    fotosCasa.forEach(foto => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <img src="${foto.base64}">
            <button class="btn-remove" onclick="removerFotoCasa(${foto.id}); event.stopPropagation();">Remover</button>
        `;
        container.appendChild(card);
    });
}

function atualizarTituloMedico(id, novoTitulo) {
    const index = anexosMedicos.findIndex(doc => doc.id === id);
    if (index !== -1) anexosMedicos[index].titulo = novoTitulo;
}

function removerMedico(id) {
    anexosMedicos = anexosMedicos.filter(doc => doc.id !== id);
    renderizarGaleriaMedicos();
}

function removerFotoCasa(id) {
    fotosCasa = fotosCasa.filter(foto => foto.id !== id);
    renderizarGaleriaCasa();
}

// =========================================================
// 3. LISTENER DE COLA (Ctrl + V)
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
                else {
                    imagensCategorizadas[caixaAtivaParaColar] = base64;
                    const divPreview = document.getElementById('preview_' + caixaAtivaParaColar);
                    divPreview.innerHTML = `<img src="${base64}" style="max-height: 120px; border: 1px solid var(--border-soft); border-radius: 4px; margin-top: 10px;" />`;
                }
            };
            leitor.readAsDataURL(arquivoBlob);
        }
    }
});

// =========================================================
// 4. ENVIO PARA O PYTHON
// =========================================================
async function enviarDados() {
    const pastaSelecionada = await pywebview.api.escolher_pasta();
    if (!pastaSelecionada) {
        alert("Você precisa escolher uma pasta de destino!");
        return;
    }

    // Validação Segura de CPF no ato do clique
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

    // LÓGICA DO RG: Preenche com espaços vazios caso não tenha sido digitado
    let rgClienteFinal = document.getElementById('rgCliente') ? document.getElementById('rgCliente').value.trim() : "";
    if (rgClienteFinal === "") rgClienteFinal = "______________";

    let rgRepresentanteFinal = possuiRep && document.getElementById('rgRepresentante') ? document.getElementById('rgRepresentante').value.trim() : "";
    if (possuiRep && rgRepresentanteFinal === "") rgRepresentanteFinal = "______________";

    const anexosParaPython = anexosMedicos.map(doc => ({
        titulo: doc.titulo,
        imagem_base64: doc.base64
    }));

    const fotosCasaParaPython = fotosCasa.map(foto => foto.base64);
    
    // Captura os dados do endereço desmembrado
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const uf = document.getElementById('uf').value;
    const cep = document.getElementById('cep').value;
    
    // Monta o endereço completo
    const enderecoMontado = `${rua}, nº ${numero}, ${bairro}, ${cidade}/${uf} - CEP: ${cep}`;

    // Endereço INSS
    const ruaInss = document.getElementById('ruaInss').value;
    const numeroInss = document.getElementById('numeroInss').value;
    const bairroInss = document.getElementById('bairroInss').value;
    const cidadeInss = document.getElementById('cidadeInss').value;
    const ufInss = document.getElementById('ufInss').value;
    const cepInss = document.getElementById('cepInss').value;
    const enderecoInssMontado = `${ruaInss}, nº ${numeroInss}, ${bairroInss}, ${cidadeInss}/${ufInss} - CEP: ${cepInss}`;

    const dados = {
        causa: document.getElementById('causaBpc') ? document.getElementById('causaBpc').value : "",
        subsecao_judiciaria: document.getElementById('subsecao') ? document.getElementById('subsecao').value : "",
        der: document.getElementById('der') ? document.getElementById('der').value : "",
        nb: document.getElementById('nb') ? document.getElementById('nb').value : "",
        valor_causa: document.getElementById('valorCausa') ? document.getElementById('valorCausa').value : "",
        
        // Dados Pessoais Cliente
        nome_cliente: document.getElementById('nomeCliente') ? document.getElementById('nomeCliente').value : "",
        cpf_cliente: document.getElementById('cpfCliente') ? document.getElementById('cpfCliente').value : "",
        rg_cliente: rgClienteFinal,
        nacionalidade_cliente: document.getElementById('nacionalidadeCliente') ? document.getElementById('nacionalidadeCliente').value : "",
        estado_civil_cliente: document.getElementById('estadoCivilCliente') ? document.getElementById('estadoCivilCliente').value : "",
        
        tem_representante: possuiRep,
        
        // Dados Pessoais Representante
        nome_representante: possuiRep && document.getElementById('nomeRepresentante') ? document.getElementById('nomeRepresentante').value : "",
        cpf_representante: possuiRep && document.getElementById('cpfRepresentante') ? document.getElementById('cpfRepresentante').value : "",
        rg_representante: possuiRep ? rgRepresentanteFinal : "", 
        nacionalidade_representante: possuiRep && document.getElementById('nacionalidadeRepresentante') ? document.getElementById('nacionalidadeRepresentante').value : "",
        estado_civil_representante: possuiRep && document.getElementById('estadoCivilRepresentante') ? document.getElementById('estadoCivilRepresentante').value : "",
        
        // Dados do endereço
        endereco_completo: enderecoMontado,
        endereco_inss: enderecoInssMontado, 
        
        rua: rua, numero: numero, bairro: bairro, cidade: cidade, uf: uf, cep: cep,
        rua_inss: ruaInss, numero_inss: numeroInss, bairro_inss: bairroInss, 
        cidade_inss: cidadeInss, uf_inss: ufInss, cep_inss: cepInss,
        
        // Dados Médicos/Específicos do BPC
        diagnostico_cid: document.getElementById('diagnosticoCid') ? document.getElementById('diagnosticoCid').value : "",
        fatores_avaliacao: document.getElementById('fatoresAvaliacao') ? document.getElementById('fatoresAvaliacao').value : "",
        oab_advogado: document.getElementById('oabAdvogado') ? document.getElementById('oabAdvogado').value : "",
        sigla_doenca: document.getElementById('siglaDoenca') ? document.getElementById('siglaDoenca').value : "",
        intro_lei_deficiencia: document.getElementById('introLeiDeficiencia') ? document.getElementById('introLeiDeficiencia').value : "",
        citacao_lei_deficiencia: document.getElementById('citacaoLeiDeficiencia') ? document.getElementById('citacaoLeiDeficiencia').value : "",
        detalhes_laudo: document.getElementById('detalhesLaudo') ? document.getElementById('detalhesLaudo').value : "",
        descricao_grupo_familiar: document.getElementById('descricaoGrupoFamiliar') ? document.getElementById('descricaoGrupoFamiliar').value : "",
        local_data: document.getElementById('localData') ? document.getElementById('localData').value : "",
        
        imagens_categorizadas: imagensCategorizadas,
        anexos_medicos_dinamicos: anexosParaPython,
        fotos_casa: fotosCasaParaPython,
        pasta_destino: pastaSelecionada,
        caminho_pdf: caminhoPdfAtual
    };

    document.body.style.cursor = 'wait';

    try {
        const resposta = await pywebview.api.gerar_formulario(dados);
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
        
        // Ativa o Switch e expande a div do representante automaticamente
        document.getElementById('temRepresentante').checked = true;
        alternarRepresentante();

        if (document.getElementById('causaBpc')) document.getElementById('causaBpc').value = 'deficiencia';
        if (document.getElementById('subsecao')) document.getElementById('subsecao').value = 'SÃO PAULO/SP';
        if (document.getElementById('der')) document.getElementById('der').value = '24/03/2026';
        if (document.getElementById('nb')) document.getElementById('nb').value = '729.397.891-0';
        if (document.getElementById('valorCausa')) document.getElementById('valorCausa').value = 'R$ 14.589,00';
        
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
        if (document.getElementById('nacionalidadeRepresentante')) document.getElementById('nacionalidadeRepresentante').value = 'Brasileiro(a)';
        if (document.getElementById('estadoCivilRepresentante')) document.getElementById('estadoCivilRepresentante').value = 'Casado(a)';
        
        // Novos campos de endereço preenchidos
        if (document.getElementById('cep')) document.getElementById('cep').value = '01047-020';
        if (document.getElementById('rua')) document.getElementById('rua').value = 'Rua Rio Espera';
        if (document.getElementById('numero')) document.getElementById('numero').value = '12, Casa 10';
        if (document.getElementById('bairro')) document.getElementById('bairro').value = 'Capão do Embira';
        if (document.getElementById('cidade')) document.getElementById('cidade').value = 'São Paulo';
        if (document.getElementById('uf')) document.getElementById('uf').value = 'SP';
        
        // Dados do INSS de Teste
        if (document.getElementById('cepInss')) {
            document.getElementById('cepInss').value = '01047-020';
            document.getElementById('ruaInss').value = 'R. Cel. Xavier de Toledo';
            document.getElementById('numeroInss').value = '280';
            document.getElementById('bairroInss').value = 'Consolação';
            document.getElementById('cidadeInss').value = 'São Paulo';
            document.getElementById('ufInss').value = 'SP';
        }
        
        if (document.getElementById('diagnosticoCid')) document.getElementById('diagnosticoCid').value = 'Transtorno do Espectro do Autismo Nível 3 (severo) (TEA)- CID 10 F 84.0';
        if (document.getElementById('fatoresAvaliacao')) document.getElementById('fatoresAvaliacao').value = 'fatores ambientais GRAVE e atividades e participações MODERADA';
        if (document.getElementById('oabAdvogado')) document.getElementById('oabAdvogado').value = '32.185';
        if (document.getElementById('siglaDoenca')) document.getElementById('siglaDoenca').value = 'TEA';
        if (document.getElementById('introLeiDeficiencia')) document.getElementById('introLeiDeficiencia').value = 'Ressalte-se que a legislação equipara a pessoa com diagnóstico de TEA à pessoa com deficiência...';
        if (document.getElementById('citacaoLeiDeficiencia')) document.getElementById('citacaoLeiDeficiencia').value = 'Art. 1º Esta Lei institui a Política Nacional de Proteção...';
        if (document.getElementById('detalhesLaudo')) document.getElementById('detalhesLaudo').value = 'O laudo detalha que se trata de uma patologia neurodesenvolvimental...';
        if (document.getElementById('descricaoGrupoFamiliar')) document.getElementById('descricaoGrupoFamiliar').value = 'Quanto o núcleo familiar é composto por 04 pessoas, a sua moradia é modesta...';
        if (document.getElementById('localData')) document.getElementById('localData').value = 'Guaraciaba do Norte/CE, 11 de junho de 2026.';
        
        // Simula o blur para pintar os CPFs de verde ao usar o autocompletar
        if (document.getElementById('cpfCliente')) document.getElementById('cpfCliente').dispatchEvent(new Event('blur'));
        if (document.getElementById('cpfRepresentante')) document.getElementById('cpfRepresentante').dispatchEvent(new Event('blur'));
        
        console.log("Campos preenchidos automaticamente para testes!");
    }
});

// =========================================================
// VALIDAÇÃO E MÁSCARAS DIVERSAS (MOEDA, DATA, CPF)
// =========================================================

// Máscara de Moeda (Valor da Causa)
function mascararMoeda(evento) {
    let valor = evento.target.value.replace(/\D/g, ""); 
    if (valor === "") {
        evento.target.value = "";
        return;
    }
    valor = (parseInt(valor, 10) / 100).toFixed(2) + "";
    valor = valor.replace(".", ",");
    valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    evento.target.value = "R$ " + valor;
}
if (document.getElementById('valorCausa')) document.getElementById('valorCausa').addEventListener('input', mascararMoeda);

// Máscara de Data (DER)
function mascararData(evento) {
    let v = evento.target.value.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/, "$1/$2");
    v = v.replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
    evento.target.value = v;
}
if (document.getElementById('der')) document.getElementById('der').addEventListener('input', mascararData);

// Máscara e Validador de CPF (ATUALIZADO COM SINCRONIZAÇÃO DE RG)
function mascararCPF(evento) {
    let v = evento.target.value.replace(/\D/g, ""); // Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    evento.target.value = v;

    // Dispara a sincronização de RG enquanto digita o CPF, se a caixinha estiver marcada
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

    // Se o CEP estiver completo (9 caracteres incluindo o traço), dispara a busca automaticamente
    if (evento.target.value.length === 9) {
        // Verifica se é o CEP do INSS ou do Cliente para passar o sufixo correto
        const sufixo = evento.target.id === 'cepInss' ? 'Inss' : '';
        buscarCEPApi(evento.target.value, sufixo);
    } else {
        evento.target.classList.remove('campo-valido', 'campo-invalido');
    }
}

async function buscarCEPApi(cepFormatado, sufixo = '') {
    const inputCep = document.getElementById('cep' + sufixo);
    const cepLimpo = cepFormatado.replace("-", ""); // Tira o traço para a API

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

        // Preenche os campos do formulário com os dados da API
        document.getElementById('rua' + sufixo).value = dados.logradouro || "";
        document.getElementById('bairro' + sufixo).value = dados.bairro || "";
        document.getElementById('cidade' + sufixo).value = dados.localidade || "";
        document.getElementById('uf' + sufixo).value = dados.uf || "";

        // Joga o cursor do mouse direto para o campo "Número"
        document.getElementById('numero' + sufixo).focus();

    } catch (erro) {
        inputCep.classList.remove('campo-buscando');
        alert("Erro de conexão ao buscar o CEP.");
        console.error("Erro na API ViaCEP:", erro);
    }
}

if (document.getElementById('cep')) document.getElementById('cep').addEventListener('input', mascararCEP);
if (document.getElementById('cepInss')) document.getElementById('cepInss').addEventListener('input', mascararCEP);