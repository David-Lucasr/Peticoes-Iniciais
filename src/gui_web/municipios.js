// =============================================
// MAPEAMENTO DE MUNICÍPIOS PARA SUBSEÇÕES
// =============================================

const baseMunicipios = {
    "manaus/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "alvarães/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "anamã/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "anori/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "apuí/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "autazes/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "barcelos/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "barreirinha/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "beruri/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "boa vista do ramos/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "boca do acre/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "borba/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "caapiranga/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "canutama/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "carauari/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "careiro/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "careiro da várzea/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "coari/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "codajás/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "eirunepé/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "envira/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "fonte boa/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "guajará/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "humaitá/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "ipixuna/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "iranduba/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "itacoatiara/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "itamarati/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "itapiranga/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "japurá/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "juruá/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "lábrea/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "manacapuru/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "manaquiri/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "manicoré/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "maraã/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "maués/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "nhamundá/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "nova olinda do norte/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "novo airão/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "novo aripuanã/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "parintins/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "pauini/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "presidente figueiredo/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "rio preto da eva/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "santa isabel do rio negro/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "são gabriel da cachoeira/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "são sebastião do uatumã/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "silves/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "tapauá/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "tefé/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "uarini/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "urucará/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "urucurituba/am": {
        "subsecao": "Manaus/AM",
        "endereco_inss": "Rua Leovegildo Coelho, n° 452, Centro, Manaus/AM - CEP: 69005-090",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "tabatinga/am": {
        "subsecao": "Tabatinga/AM",
        "endereco_inss": "Rua Rui Barbosa, n° 846, Centro, Tabatinga/AM - CEP: 69640-000",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "amaturá/am": {
        "subsecao": "Tabatinga/AM",
        "endereco_inss": "Rua Rui Barbosa, n° 846, Centro, Tabatinga/AM - CEP: 69640-000",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "atalaia do norte/am": {
        "subsecao": "Tabatinga/AM",
        "endereco_inss": "Rua Rui Barbosa, n° 846, Centro, Tabatinga/AM - CEP: 69640-000",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "benjamin constant/am": {
        "subsecao": "Tabatinga/AM",
        "endereco_inss": "Rua Rui Barbosa, n° 846, Centro, Tabatinga/AM - CEP: 69640-000",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "jutaí/am": {
        "subsecao": "Tabatinga/AM",
        "endereco_inss": "Rua Rui Barbosa, n° 846, Centro, Tabatinga/AM - CEP: 69640-000",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "santo antônio do içá/am": {
        "subsecao": "Tabatinga/AM",
        "endereco_inss": "Rua Rui Barbosa, n° 846, Centro, Tabatinga/AM - CEP: 69640-000",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "são paulo de olivença/am": {
        "subsecao": "Tabatinga/AM",
        "endereco_inss": "Rua Rui Barbosa, n° 846, Centro, Tabatinga/AM - CEP: 69640-000",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "tonantins/am": {
        "subsecao": "Tabatinga/AM",
        "endereco_inss": "Rua Rui Barbosa, n° 846, Centro, Tabatinga/AM - CEP: 69640-000",
        "oab_advogado": "2768-A",
        "uf_oab": "AM"
    },
    "salvador/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "aratuípe/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "cachoeira/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "camaçari/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "candeias/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "cruz das almas/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "dias d'ávila/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "dom macedo costa/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "governador mangabeira/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itaparica/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "jaguaripe/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "lauro de freitas/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "madre de deus/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "mata de são joão/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "muniz ferreira/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "muritiba/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "nazaré/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "pojuca/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "salinas da margarida/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "santo amaro/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "santo antônio de jesus/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "são felipe/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "são félix/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "são francisco do conde/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "são sebastião do passé/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "saubara/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "simões filho/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "valença/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "vera cruz/ba": {
        "subsecao": "Salvador/BA",
        "endereco_inss": "Rua Miguel Calmon, n° 395, Comércio, Salvador/BA - CEP: 40015-010",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "alagoinhas/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "acajutiba/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "água fria/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "aporá/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "araças/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "aramari/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "cardeal da silva/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "catu/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "cipó/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "conde/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "crisópolis/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "entre rios/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "esplanada/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "inhambupe/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itanagra/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itapicuru/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "jandaíra/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "nova soure/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "olindina/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ribeira do amparo/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ribeira do pombal/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "rio real/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "sátiro dias/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "teodoro sampaio/ba": {
        "subsecao": "Alagoinhas/BA",
        "endereco_inss": "Rua Silva Jardim, n° 211, Silva Jardim, Alagoinhas/BA - CEP: 48060-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "barreiras/ba": {
        "subsecao": "Barreiras/BA",
        "endereco_inss": "Avenida Clériston Andrade, n° 743, Centro, Barreiras/BA - CEP: 47803-358",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "angical/ba": {
        "subsecao": "Barreiras/BA",
        "endereco_inss": "Avenida Clériston Andrade, n° 743, Centro, Barreiras/BA - CEP: 47803-358",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "baianópolis/ba": {
        "subsecao": "Barreiras/BA",
        "endereco_inss": "Avenida Clériston Andrade, n° 743, Centro, Barreiras/BA - CEP: 47803-358",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "brejolândia/ba": {
        "subsecao": "Barreiras/BA",
        "endereco_inss": "Avenida Clériston Andrade, n° 743, Centro, Barreiras/BA - CEP: 47803-358",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "buritirama/ba": {
        "subsecao": "Barreiras/BA",
        "endereco_inss": "Avenida Clériston Andrade, n° 743, Centro, Barreiras/BA - CEP: 47803-358",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "catolândia/ba": {
        "subsecao": "Barreiras/BA",
        "endereco_inss": "Avenida Clériston Andrade, n° 743, Centro, Barreiras/BA - CEP: 47803-358",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "cotegipe/ba": {
        "subsecao": "Barreiras/BA",
        "endereco_inss": "Avenida Clériston Andrade, n° 743, Centro, Barreiras/BA - CEP: 47803-358",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "cristópolis/ba": {
        "subsecao": "Barreiras/BA",
        "endereco_inss": "Avenida Clériston Andrade, n° 743, Centro, Barreiras/BA - CEP: 47803-358",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "formosa do rio preto/ba": {
        "subsecao": "Barreiras/BA",
        "endereco_inss": "Avenida Clériston Andrade, n° 743, Centro, Barreiras/BA - CEP: 47803-358",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "luís eduardo magalhães/ba": {
        "subsecao": "Barreiras/BA",
        "endereco_inss": "Avenida Clériston Andrade, n° 743, Centro, Barreiras/BA - CEP: 47803-358",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "mansidão/ba": {
        "subsecao": "Barreiras/BA",
        "endereco_inss": "Avenida Clériston Andrade, n° 743, Centro, Barreiras/BA - CEP: 47803-358",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "muquém de são francisco/ba": {
        "subsecao": "Barreiras/BA",
        "endereco_inss": "Avenida Clériston Andrade, n° 743, Centro, Barreiras/BA - CEP: 47803-358",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "riachão das neves/ba": {
        "subsecao": "Barreiras/BA",
        "endereco_inss": "Avenida Clériston Andrade, n° 743, Centro, Barreiras/BA - CEP: 47803-358",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "santa rita de cássia/ba": {
        "subsecao": "Barreiras/BA",
        "endereco_inss": "Avenida Clériston Andrade, n° 743, Centro, Barreiras/BA - CEP: 47803-358",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "são desidério/ba": {
        "subsecao": "Barreiras/BA",
        "endereco_inss": "Avenida Clériston Andrade, n° 743, Centro, Barreiras/BA - CEP: 47803-358",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "wanderley/ba": {
        "subsecao": "Barreiras/BA",
        "endereco_inss": "Avenida Clériston Andrade, n° 743, Centro, Barreiras/BA - CEP: 47803-358",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "bom jesus da lapa/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "boquira/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "brotas de macaúbas/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "canápolis/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "cocos/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "coribe/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "correntina/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "feira da mata/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ibipitanga/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ibotirama/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "igaporã/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ipupiara/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "jaborandi/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "macaúbas/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "morpará/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "oliveira dos brejinhos/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "paratinga/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "riacho de santana/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "santa maria da vitória/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "santana/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "são félix do coribe/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "serra do ramalho/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "serra dourada/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "sítio do mato/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "tabocas do brejo velho/ba": {
        "subsecao": "Bom Jesus da Lapa/BA",
        "endereco_inss": "Avenida Lió Dourado, n° s/n, Mirante da Lapa, Bom Jesus da Lapa/BA - CEP: 47600-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "campo formoso/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "andorinha/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "antônio gonçalves/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "caém/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "caldeirão grande/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "cansanção/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "capim grosso/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "filadélfia/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "gavião/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itiúba/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "jacobina/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "jaguarari/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "miguel calmon/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "mirangaba/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "monte santo/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "nordestina/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ourolândia/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "pindobaçu/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ponto novo/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "quixabeira/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "são josé do jacuípe/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "saúde/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "senhor do bonfim/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "serrolândia/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "umburanas/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "várzea da roça/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "várzea do poço/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "várzea nova/ba": {
        "subsecao": "Campo Formoso/BA",
        "endereco_inss": "Rua General Osório, n° 178, Centro, Senhor do Bonfim/BA - CEP: 48970-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "eunápolis/ba": {
        "subsecao": "Eunápolis/BA",
        "endereco_inss": "Rua Paulino Mendes Lima, n° 508, Centro, Eunápolis/BA - CEP: 45820-440",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "belmonte/ba": {
        "subsecao": "Eunápolis/BA",
        "endereco_inss": "Rua Paulino Mendes Lima, n° 508, Centro, Eunápolis/BA - CEP: 45820-440",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "guaratinga/ba": {
        "subsecao": "Eunápolis/BA",
        "endereco_inss": "Rua Paulino Mendes Lima, n° 508, Centro, Eunápolis/BA - CEP: 45820-440",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itabela/ba": {
        "subsecao": "Eunápolis/BA",
        "endereco_inss": "Rua Paulino Mendes Lima, n° 508, Centro, Eunápolis/BA - CEP: 45820-440",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itagimirim/ba": {
        "subsecao": "Eunápolis/BA",
        "endereco_inss": "Rua Paulino Mendes Lima, n° 508, Centro, Eunápolis/BA - CEP: 45820-440",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itapebi/ba": {
        "subsecao": "Eunápolis/BA",
        "endereco_inss": "Rua Paulino Mendes Lima, n° 508, Centro, Eunápolis/BA - CEP: 45820-440",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "jucuruçu/ba": {
        "subsecao": "Eunápolis/BA",
        "endereco_inss": "Rua Paulino Mendes Lima, n° 508, Centro, Eunápolis/BA - CEP: 45820-440",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "porto seguro/ba": {
        "subsecao": "Eunápolis/BA",
        "endereco_inss": "Rua Paulino Mendes Lima, n° 508, Centro, Eunápolis/BA - CEP: 45820-440",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "santa cruz cabrália/ba": {
        "subsecao": "Eunápolis/BA",
        "endereco_inss": "Rua Paulino Mendes Lima, n° 508, Centro, Eunápolis/BA - CEP: 45820-440",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "feira de santana/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "amargosa/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "amélia rodrigues/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "anguera/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "antônio cardoso/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "araci/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "baixa grande/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "barrocas/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "biritinga/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "boa vista do tupim/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "cabaceiras do paraguaçu/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "candeal/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "capela do alto alegre/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "castro alves/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "conceição da feira/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "conceição do almeida/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "conceição do coité/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "conceição do jacuípe/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "coração de maria/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "elísio medrado/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "iaçu/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ichu/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ipecaetá/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ipirá/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "irará/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itaberaba/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itatim/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "lajedinho/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "lamarão/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "macajuba/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "mairi/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "maragogipe/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "milagres/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "mundo novo/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "nova fátima/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ouriçangas/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "pé de serra/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "pedrão/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "pintadas/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "piritiba/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "queimadas/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "rafael jambeiro/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "retirolândia/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "riachão do jacuípe/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ruy barbosa/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "santa bárbara/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "santaluz/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "santanópolis/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "santa teresinha/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "santo estêvão/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "são domingos/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "são gonçalo dos campos/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "sapeaçu/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "serra preta/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "serrinha/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "tanquinho/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "tapiramutá/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "teofilândia/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "terra nova/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "valente/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "varzedo/ba": {
        "subsecao": "Feira de Santana/BA",
        "endereco_inss": "Rua N, n° 70, Queimadinha, Feira de Santana/BA - CEP: 44050-532",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "guanambi/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "botuporã/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "caculé/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "caetité/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "candiba/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "carinhanha/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "caturama/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "érico cardoso/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ibiassucê/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ibitiara/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "iuiú/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "jacaraci/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "lagoa real/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "licínio de almeida/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "malhada/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "matina/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "mortugaba/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "novo horizonte/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "palmas de monte alto/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "paramirim/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "pindaí/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "rio do antônio/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "rio do pires/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "sebastião laranjeiras/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "tanque novo/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "urandi/ba": {
        "subsecao": "Guanambi/BA",
        "endereco_inss": "Rua Rio de Janeiro, n° 348, Centro, Guanambi/BA - CEP: 46430-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ilhéus/ba": {
        "subsecao": "Ilhéus/BA",
        "endereco_inss": "Rua Marquês de Paranaguá, n° s/n, Centro, Ilhéus/BA - CEP: 45653-120",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "cairu/ba": {
        "subsecao": "Ilhéus/BA",
        "endereco_inss": "Rua Marquês de Paranaguá, n° s/n, Centro, Ilhéus/BA - CEP: 45653-120",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "camamu/ba": {
        "subsecao": "Ilhéus/BA",
        "endereco_inss": "Rua Marquês de Paranaguá, n° s/n, Centro, Ilhéus/BA - CEP: 45653-120",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "canavieiras/ba": {
        "subsecao": "Ilhéus/BA",
        "endereco_inss": "Rua Marquês de Paranaguá, n° s/n, Centro, Ilhéus/BA - CEP: 45653-120",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "igrapiúna/ba": {
        "subsecao": "Ilhéus/BA",
        "endereco_inss": "Rua Marquês de Paranaguá, n° s/n, Centro, Ilhéus/BA - CEP: 45653-120",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itacaré/ba": {
        "subsecao": "Ilhéus/BA",
        "endereco_inss": "Rua Marquês de Paranaguá, n° s/n, Centro, Ilhéus/BA - CEP: 45653-120",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ituberá/ba": {
        "subsecao": "Ilhéus/BA",
        "endereco_inss": "Rua Marquês de Paranaguá, n° s/n, Centro, Ilhéus/BA - CEP: 45653-120",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "maraú/ba": {
        "subsecao": "Ilhéus/BA",
        "endereco_inss": "Rua Marquês de Paranaguá, n° s/n, Centro, Ilhéus/BA - CEP: 45653-120",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "nilo peçanha/ba": {
        "subsecao": "Ilhéus/BA",
        "endereco_inss": "Rua Marquês de Paranaguá, n° s/n, Centro, Ilhéus/BA - CEP: 45653-120",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "taperoá/ba": {
        "subsecao": "Ilhéus/BA",
        "endereco_inss": "Rua Marquês de Paranaguá, n° s/n, Centro, Ilhéus/BA - CEP: 45653-120",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "una/ba": {
        "subsecao": "Ilhéus/BA",
        "endereco_inss": "Rua Marquês de Paranaguá, n° s/n, Centro, Ilhéus/BA - CEP: 45653-120",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "uruçuca/ba": {
        "subsecao": "Ilhéus/BA",
        "endereco_inss": "Rua Marquês de Paranaguá, n° s/n, Centro, Ilhéus/BA - CEP: 45653-120",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "irecê/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "américa dourada/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "andaraí/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "barra/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "barra do mendes/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "barro alto/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "boninal/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "bonito/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "cafarnaum/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "canarana/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "central/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "gentio do ouro/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ibipeba/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ibititá/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "iraquara/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itaguaçu da bahia/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "joão dourado/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "jussara/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "lapão/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "lençóis/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "morro do chapéu/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "mucugê/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "mulungu do morro/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "nova redenção/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "palmeiras/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "presidente dutra/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "são gabriel/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "seabra/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "souto soares/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "uibaí/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "utinga/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "wagner/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "xique-xique/ba": {
        "subsecao": "Irecê/BA",
        "endereco_inss": "Rua Graciliano Aleixo M. Júnior, n° s/n, Marques Júnior, Irecê/BA - CEP: 44900-000",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itabuna/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "almadina/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "arataca/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "aurelino leal/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "barro preto/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "buerarema/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "camacan/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "coaraci/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "firmino alves/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "floresta azul/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "gandu/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "gongogi/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ibicaraí/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ibicuí/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ibirapitanga/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "iguaí/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itaju do colônia/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itajuípe/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itapé/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itapitanga/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itororó/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "jussari/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "mascote/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "nova canaã/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "pau brasil/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "piraí do norte/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "potiraguá/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "presidente tancredo neves/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "santa cruz da vitória/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "santa luzia/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "são josé da vitória/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "teolândia/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ubaitaba/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ubatã/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "wenceslau guimarães/ba": {
        "subsecao": "Itabuna/BA",
        "endereco_inss": "Rua Laurinda Alves Fontes, n° 15, Centro, Itabuna/BA - CEP: 45600-025",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "jequié/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "aiquara/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "apuarema/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "barra do rocha/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "brejões/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "contendas do sincorá/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "cravolândia/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "dário meira/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ibicoara/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ibiquera/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ibirataia/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ipiaú/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "irajuba/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "iramaia/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itaeté/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itagi/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itagibá/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itamari/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itaquara/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itiruçu/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "jaguaquara/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "jiquiriçá/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "jitaúna/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "lafaiete coutinho/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "laje/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "lajedo do tabocal/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "manoel vitorino/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "maracás/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "marcionílio souza/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "mutuípe/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "nova ibiá/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "nova itarana/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "piatã/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "planaltino/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "santa inês/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "são miguel das matas/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ubaíra/ba": {
        "subsecao": "Jequié/BA",
        "endereco_inss": "Rua Edvaldo A. Teixeira, n° s/n, Centro, Jequié/BA - CEP: 45208-081",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "juazeiro/ba": {
        "subsecao": "Juazeiro/BA",
        "endereco_inss": "Avenida Adolfo Viana, n° s/n, Centro, Juazeiro/BA - CEP: 48904-001",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "campo alegre de lourdes/ba": {
        "subsecao": "Juazeiro/BA",
        "endereco_inss": "Avenida Adolfo Viana, n° s/n, Centro, Juazeiro/BA - CEP: 48904-001",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "casa nova/ba": {
        "subsecao": "Juazeiro/BA",
        "endereco_inss": "Avenida Adolfo Viana, n° s/n, Centro, Juazeiro/BA - CEP: 48904-001",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "curaçá/ba": {
        "subsecao": "Juazeiro/BA",
        "endereco_inss": "Avenida Adolfo Viana, n° s/n, Centro, Juazeiro/BA - CEP: 48904-001",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "pilão arcado/ba": {
        "subsecao": "Juazeiro/BA",
        "endereco_inss": "Avenida Adolfo Viana, n° s/n, Centro, Juazeiro/BA - CEP: 48904-001",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "remanso/ba": {
        "subsecao": "Juazeiro/BA",
        "endereco_inss": "Avenida Adolfo Viana, n° s/n, Centro, Juazeiro/BA - CEP: 48904-001",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "sento sé/ba": {
        "subsecao": "Juazeiro/BA",
        "endereco_inss": "Avenida Adolfo Viana, n° s/n, Centro, Juazeiro/BA - CEP: 48904-001",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "sobradinho/ba": {
        "subsecao": "Juazeiro/BA",
        "endereco_inss": "Avenida Adolfo Viana, n° s/n, Centro, Juazeiro/BA - CEP: 48904-001",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "uauá/ba": {
        "subsecao": "Juazeiro/BA",
        "endereco_inss": "Avenida Adolfo Viana, n° s/n, Centro, Juazeiro/BA - CEP: 48904-001",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "paulo afonso/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "abaré/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "adustina/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "antas/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "banzaê/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "canudos/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "chorrochó/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "cícero dantas/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "coronel joão sá/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "euclides da cunha/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "fátima/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "glória/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "heliópolis/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "jeremoabo/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "macururé/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "novo triunfo/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "paripiranga/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "pedro alexandre/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "quijingue/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "rodelas/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "santa brígida/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "sítio do quinto/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "tucano/ba": {
        "subsecao": "Paulo Afonso/BA",
        "endereco_inss": "Avenida Apolônio Sales, n° 200, Vila Poty, Paulo Afonso/BA - CEP: 48601-200",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "teixeira de freitas/ba": {
        "subsecao": "Teixeira de Freitas/BA",
        "endereco_inss": "Rua Ministro Alfredo Buzaid, n° 549, Monte Castelo, Teixeira de Freitas/BA - CEP: 45990-111",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "alcobaça/ba": {
        "subsecao": "Teixeira de Freitas/BA",
        "endereco_inss": "Rua Ministro Alfredo Buzaid, n° 549, Monte Castelo, Teixeira de Freitas/BA - CEP: 45990-111",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "caravelas/ba": {
        "subsecao": "Teixeira de Freitas/BA",
        "endereco_inss": "Rua Ministro Alfredo Buzaid, n° 549, Monte Castelo, Teixeira de Freitas/BA - CEP: 45990-111",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ibirapuã/ba": {
        "subsecao": "Teixeira de Freitas/BA",
        "endereco_inss": "Rua Ministro Alfredo Buzaid, n° 549, Monte Castelo, Teixeira de Freitas/BA - CEP: 45990-111",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itamaraju/ba": {
        "subsecao": "Teixeira de Freitas/BA",
        "endereco_inss": "Rua Ministro Alfredo Buzaid, n° 549, Monte Castelo, Teixeira de Freitas/BA - CEP: 45990-111",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itanhém/ba": {
        "subsecao": "Teixeira de Freitas/BA",
        "endereco_inss": "Rua Ministro Alfredo Buzaid, n° 549, Monte Castelo, Teixeira de Freitas/BA - CEP: 45990-111",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "lajedão/ba": {
        "subsecao": "Teixeira de Freitas/BA",
        "endereco_inss": "Rua Ministro Alfredo Buzaid, n° 549, Monte Castelo, Teixeira de Freitas/BA - CEP: 45990-111",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "medeiros neto/ba": {
        "subsecao": "Teixeira de Freitas/BA",
        "endereco_inss": "Rua Ministro Alfredo Buzaid, n° 549, Monte Castelo, Teixeira de Freitas/BA - CEP: 45990-111",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "mucuri/ba": {
        "subsecao": "Teixeira de Freitas/BA",
        "endereco_inss": "Rua Ministro Alfredo Buzaid, n° 549, Monte Castelo, Teixeira de Freitas/BA - CEP: 45990-111",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "nova viçosa/ba": {
        "subsecao": "Teixeira de Freitas/BA",
        "endereco_inss": "Rua Ministro Alfredo Buzaid, n° 549, Monte Castelo, Teixeira de Freitas/BA - CEP: 45990-111",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "prado/ba": {
        "subsecao": "Teixeira de Freitas/BA",
        "endereco_inss": "Rua Ministro Alfredo Buzaid, n° 549, Monte Castelo, Teixeira de Freitas/BA - CEP: 45990-111",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "vereda/ba": {
        "subsecao": "Teixeira de Freitas/BA",
        "endereco_inss": "Rua Ministro Alfredo Buzaid, n° 549, Monte Castelo, Teixeira de Freitas/BA - CEP: 45990-111",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "vitória da conquista/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "abaíra/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "anagé/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "aracatu/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "barra da estiva/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "barra do choça/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "belo campo/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "boa nova/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "bom jesus da serra/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "brumado/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "caatiba/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "caetanos/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "cândido sales/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "caraíbas/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "condeúba/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "cordeiros/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "dom basílio/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "encruzilhada/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "guajeru/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itambé/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itapetinga/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "itarantim/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ituaçu/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "jussiape/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "livramento de nossa senhora/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "macarani/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "maetinga/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "maiquinique/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "malhada de pedras/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "mirante/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "piripá/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "planalto/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "poções/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "presidente jânio quadros/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "ribeirão do largo/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "rio de contas/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "tanhaçu/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "tremedal/ba": {
        "subsecao": "Vitória da Conquista/BA",
        "endereco_inss": "Avenida Presidente Vargas, n° 253, Alto Maron, Vitória da Conquista/BA - CEP: 45005-306",
        "oab_advogado": "91701",
        "uf_oab": "BA"
    },
    "belém/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "abaetetuba/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "acará/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "afuá/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "anajás/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "ananindeua/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "bagre/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "baião/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "barcarena/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "benevides/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "breves/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "bujaru/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "cachoeira do arari/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "cametá/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "chaves/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "colares/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "concórdia do pará/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "curralinho/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "igarapé-miri/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "limoeiro do ajuru/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "marituba/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "melgaço/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "mocajuba/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "moju/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "muaná/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "oeiras do pará/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "ponta de pedras/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "portel/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "salvaterra/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "santa bárbara do pará/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "santa cruz do arari/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "santa izabel do pará/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "santo antônio do tauá/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "são caetano de odivelas/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "são sebastião da boa vista/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "soure/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "tomé-açu/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "vigia/pa": {
        "subsecao": "Belém/PA",
        "endereco_inss": "Passagem Lindolfo Collor, n° s/n, Marco, Belém/PA - CEP: 66095-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "altamira/pa": {
        "subsecao": "Altamira/PA",
        "endereco_inss": "Avenida Brigadeiro Eduardo Gomes, n° 2614, São Sebastião, Altamira/PA - CEP: 68372-005",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "anapu/pa": {
        "subsecao": "Altamira/PA",
        "endereco_inss": "Avenida Brigadeiro Eduardo Gomes, n° 2614, São Sebastião, Altamira/PA - CEP: 68372-005",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "brasil novo/pa": {
        "subsecao": "Altamira/PA",
        "endereco_inss": "Avenida Brigadeiro Eduardo Gomes, n° 2614, São Sebastião, Altamira/PA - CEP: 68372-005",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "medicilândia/pa": {
        "subsecao": "Altamira/PA",
        "endereco_inss": "Avenida Brigadeiro Eduardo Gomes, n° 2614, São Sebastião, Altamira/PA - CEP: 68372-005",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "porto de moz/pa": {
        "subsecao": "Altamira/PA",
        "endereco_inss": "Avenida Brigadeiro Eduardo Gomes, n° 2614, São Sebastião, Altamira/PA - CEP: 68372-005",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "senador josé porfírio/pa": {
        "subsecao": "Altamira/PA",
        "endereco_inss": "Avenida Brigadeiro Eduardo Gomes, n° 2614, São Sebastião, Altamira/PA - CEP: 68372-005",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "vitória do xingu/pa": {
        "subsecao": "Altamira/PA",
        "endereco_inss": "Avenida Brigadeiro Eduardo Gomes, n° 2614, São Sebastião, Altamira/PA - CEP: 68372-005",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "castanhal/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "augusto corrêa/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "bonito/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "bragança/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "capanema/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "curuçá/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "igarapé-açu/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "inhangapi/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "magalhães barata/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "maracanã/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "marapanim/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "nova timboteua/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "peixe-boi/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "primavera/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "quatipuru/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "salinópolis/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "santa maria do pará/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "santarém novo/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "são domingos do capim/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "são francisco do pará/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "são joão da ponta/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "são joão de pirabas/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "terra alta/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "tracuateua/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "viseu/pa": {
        "subsecao": "Castanhal/PA",
        "endereco_inss": "Avenida Presidente Getúlio Vargas, n° s/n, Ianetama, Castanhal/PA - CEP: 68742-755",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "itaituba/pa": {
        "subsecao": "Itaituba/PA",
        "endereco_inss": "Avenida Marechal Rondon, n° 09, Liberdade, Itaituba/PA - CEP: 68181-010",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "aveiro/pa": {
        "subsecao": "Itaituba/PA",
        "endereco_inss": "Avenida Marechal Rondon, n° 09, Liberdade, Itaituba/PA - CEP: 68181-010",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "jacareacanga/pa": {
        "subsecao": "Itaituba/PA",
        "endereco_inss": "Avenida Marechal Rondon, n° 09, Liberdade, Itaituba/PA - CEP: 68181-010",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "novo progresso/pa": {
        "subsecao": "Itaituba/PA",
        "endereco_inss": "Avenida Marechal Rondon, n° 09, Liberdade, Itaituba/PA - CEP: 68181-010",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "trairão/pa": {
        "subsecao": "Itaituba/PA",
        "endereco_inss": "Avenida Marechal Rondon, n° 09, Liberdade, Itaituba/PA - CEP: 68181-010",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "marabá/pa": {
        "subsecao": "Marabá/PA",
        "endereco_inss": "Estrada Agrópolis do Incra, n° s/n, Amapá, Marabá/PA - CEP: 68508-970",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "abel figueiredo/pa": {
        "subsecao": "Marabá/PA",
        "endereco_inss": "Estrada Agrópolis do Incra, n° s/n, Amapá, Marabá/PA - CEP: 68508-970",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "bom jesus do tocantins/pa": {
        "subsecao": "Marabá/PA",
        "endereco_inss": "Estrada Agrópolis do Incra, n° s/n, Amapá, Marabá/PA - CEP: 68508-970",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "brejo grande do araguaia/pa": {
        "subsecao": "Marabá/PA",
        "endereco_inss": "Estrada Agrópolis do Incra, n° s/n, Amapá, Marabá/PA - CEP: 68508-970",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "canaã dos carajás/pa": {
        "subsecao": "Marabá/PA",
        "endereco_inss": "Estrada Agrópolis do Incra, n° s/n, Amapá, Marabá/PA - CEP: 68508-970",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "curionópolis/pa": {
        "subsecao": "Marabá/PA",
        "endereco_inss": "Estrada Agrópolis do Incra, n° s/n, Amapá, Marabá/PA - CEP: 68508-970",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "eldorado do carajás/pa": {
        "subsecao": "Marabá/PA",
        "endereco_inss": "Estrada Agrópolis do Incra, n° s/n, Amapá, Marabá/PA - CEP: 68508-970",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "itupiranga/pa": {
        "subsecao": "Marabá/PA",
        "endereco_inss": "Estrada Agrópolis do Incra, n° s/n, Amapá, Marabá/PA - CEP: 68508-970",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "nova ipixuna/pa": {
        "subsecao": "Marabá/PA",
        "endereco_inss": "Estrada Agrópolis do Incra, n° s/n, Amapá, Marabá/PA - CEP: 68508-970",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "palestina do pará/pa": {
        "subsecao": "Marabá/PA",
        "endereco_inss": "Estrada Agrópolis do Incra, n° s/n, Amapá, Marabá/PA - CEP: 68508-970",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "parauapebas/pa": {
        "subsecao": "Marabá/PA",
        "endereco_inss": "Estrada Agrópolis do Incra, n° s/n, Amapá, Marabá/PA - CEP: 68508-970",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "piçarra/pa": {
        "subsecao": "Marabá/PA",
        "endereco_inss": "Estrada Agrópolis do Incra, n° s/n, Amapá, Marabá/PA - CEP: 68508-970",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "rondon do pará/pa": {
        "subsecao": "Marabá/PA",
        "endereco_inss": "Estrada Agrópolis do Incra, n° s/n, Amapá, Marabá/PA - CEP: 68508-970",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "são domingos do araguaia/pa": {
        "subsecao": "Marabá/PA",
        "endereco_inss": "Estrada Agrópolis do Incra, n° s/n, Amapá, Marabá/PA - CEP: 68508-970",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "são geraldo do araguaia/pa": {
        "subsecao": "Marabá/PA",
        "endereco_inss": "Estrada Agrópolis do Incra, n° s/n, Amapá, Marabá/PA - CEP: 68508-970",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "são joão do araguaia/pa": {
        "subsecao": "Marabá/PA",
        "endereco_inss": "Estrada Agrópolis do Incra, n° s/n, Amapá, Marabá/PA - CEP: 68508-970",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "paragominas/pa": {
        "subsecao": "Paragominas/PA",
        "endereco_inss": "Rua Santarém, n° s/n, Centro, Paragominas/PA - CEP: 68625-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "aurora do pará/pa": {
        "subsecao": "Paragominas/PA",
        "endereco_inss": "Rua Santarém, n° s/n, Centro, Paragominas/PA - CEP: 68625-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "cachoeira do piriá/pa": {
        "subsecao": "Paragominas/PA",
        "endereco_inss": "Rua Santarém, n° s/n, Centro, Paragominas/PA - CEP: 68625-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "capitão poço/pa": {
        "subsecao": "Paragominas/PA",
        "endereco_inss": "Rua Santarém, n° s/n, Centro, Paragominas/PA - CEP: 68625-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "dom eliseu/pa": {
        "subsecao": "Paragominas/PA",
        "endereco_inss": "Rua Santarém, n° s/n, Centro, Paragominas/PA - CEP: 68625-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "garrafão do norte/pa": {
        "subsecao": "Paragominas/PA",
        "endereco_inss": "Rua Santarém, n° s/n, Centro, Paragominas/PA - CEP: 68625-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "ipixuna do pará/pa": {
        "subsecao": "Paragominas/PA",
        "endereco_inss": "Rua Santarém, n° s/n, Centro, Paragominas/PA - CEP: 68625-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "irituia/pa": {
        "subsecao": "Paragominas/PA",
        "endereco_inss": "Rua Santarém, n° s/n, Centro, Paragominas/PA - CEP: 68625-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "mãe do rio/pa": {
        "subsecao": "Paragominas/PA",
        "endereco_inss": "Rua Santarém, n° s/n, Centro, Paragominas/PA - CEP: 68625-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "nova esperança do piriá/pa": {
        "subsecao": "Paragominas/PA",
        "endereco_inss": "Rua Santarém, n° s/n, Centro, Paragominas/PA - CEP: 68625-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "ourém/pa": {
        "subsecao": "Paragominas/PA",
        "endereco_inss": "Rua Santarém, n° s/n, Centro, Paragominas/PA - CEP: 68625-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "santa luzia do pará/pa": {
        "subsecao": "Paragominas/PA",
        "endereco_inss": "Rua Santarém, n° s/n, Centro, Paragominas/PA - CEP: 68625-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "são miguel do guamá/pa": {
        "subsecao": "Paragominas/PA",
        "endereco_inss": "Rua Santarém, n° s/n, Centro, Paragominas/PA - CEP: 68625-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "ulianópolis/pa": {
        "subsecao": "Paragominas/PA",
        "endereco_inss": "Rua Santarém, n° s/n, Centro, Paragominas/PA - CEP: 68625-310",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "redenção/pa": {
        "subsecao": "Redenção/PA",
        "endereco_inss": "Avenida Santa Tereza, n° 125, Ademar Guimarães, Redenção/PA - CEP: 68552-665",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "água azul do norte/pa": {
        "subsecao": "Redenção/PA",
        "endereco_inss": "Avenida Santa Tereza, n° 125, Ademar Guimarães, Redenção/PA - CEP: 68552-665",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "bannach/pa": {
        "subsecao": "Redenção/PA",
        "endereco_inss": "Avenida Santa Tereza, n° 125, Ademar Guimarães, Redenção/PA - CEP: 68552-665",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "conceição do araguaia/pa": {
        "subsecao": "Redenção/PA",
        "endereco_inss": "Avenida Santa Tereza, n° 125, Ademar Guimarães, Redenção/PA - CEP: 68552-665",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "cumaru do norte/pa": {
        "subsecao": "Redenção/PA",
        "endereco_inss": "Avenida Santa Tereza, n° 125, Ademar Guimarães, Redenção/PA - CEP: 68552-665",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "floresta do araguaia/pa": {
        "subsecao": "Redenção/PA",
        "endereco_inss": "Avenida Santa Tereza, n° 125, Ademar Guimarães, Redenção/PA - CEP: 68552-665",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "ourilândia do norte/pa": {
        "subsecao": "Redenção/PA",
        "endereco_inss": "Avenida Santa Tereza, n° 125, Ademar Guimarães, Redenção/PA - CEP: 68552-665",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "pau d'arco/pa": {
        "subsecao": "Redenção/PA",
        "endereco_inss": "Avenida Santa Tereza, n° 125, Ademar Guimarães, Redenção/PA - CEP: 68552-665",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "rio maria/pa": {
        "subsecao": "Redenção/PA",
        "endereco_inss": "Avenida Santa Tereza, n° 125, Ademar Guimarães, Redenção/PA - CEP: 68552-665",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "santa maria das barreiras/pa": {
        "subsecao": "Redenção/PA",
        "endereco_inss": "Avenida Santa Tereza, n° 125, Ademar Guimarães, Redenção/PA - CEP: 68552-665",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "santana do araguaia/pa": {
        "subsecao": "Redenção/PA",
        "endereco_inss": "Avenida Santa Tereza, n° 125, Ademar Guimarães, Redenção/PA - CEP: 68552-665",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "são félix do xingu/pa": {
        "subsecao": "Redenção/PA",
        "endereco_inss": "Avenida Santa Tereza, n° 125, Ademar Guimarães, Redenção/PA - CEP: 68552-665",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "sapucaia/pa": {
        "subsecao": "Redenção/PA",
        "endereco_inss": "Avenida Santa Tereza, n° 125, Ademar Guimarães, Redenção/PA - CEP: 68552-665",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "tucumã/pa": {
        "subsecao": "Redenção/PA",
        "endereco_inss": "Avenida Santa Tereza, n° 125, Ademar Guimarães, Redenção/PA - CEP: 68552-665",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "xinguara/pa": {
        "subsecao": "Redenção/PA",
        "endereco_inss": "Avenida Santa Tereza, n° 125, Ademar Guimarães, Redenção/PA - CEP: 68552-665",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "santarém/pa": {
        "subsecao": "Santarém/PA",
        "endereco_inss": "Rua Wilson Dias da Fonseca, n° 383, Centro, Santarém/PA - CEP: 68005-060",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "alenquer/pa": {
        "subsecao": "Santarém/PA",
        "endereco_inss": "Rua Wilson Dias da Fonseca, n° 383, Centro, Santarém/PA - CEP: 68005-060",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "almeirim/pa": {
        "subsecao": "Santarém/PA",
        "endereco_inss": "Rua Wilson Dias da Fonseca, n° 383, Centro, Santarém/PA - CEP: 68005-060",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "belterra/pa": {
        "subsecao": "Santarém/PA",
        "endereco_inss": "Rua Wilson Dias da Fonseca, n° 383, Centro, Santarém/PA - CEP: 68005-060",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "curuá/pa": {
        "subsecao": "Santarém/PA",
        "endereco_inss": "Rua Wilson Dias da Fonseca, n° 383, Centro, Santarém/PA - CEP: 68005-060",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "faro/pa": {
        "subsecao": "Santarém/PA",
        "endereco_inss": "Rua Wilson Dias da Fonseca, n° 383, Centro, Santarém/PA - CEP: 68005-060",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "gurupá/pa": {
        "subsecao": "Santarém/PA",
        "endereco_inss": "Rua Wilson Dias da Fonseca, n° 383, Centro, Santarém/PA - CEP: 68005-060",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "juruti/pa": {
        "subsecao": "Santarém/PA",
        "endereco_inss": "Rua Wilson Dias da Fonseca, n° 383, Centro, Santarém/PA - CEP: 68005-060",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "mouí dos campos/pa": {
        "subsecao": "Santarém/PA",
        "endereco_inss": "Rua Wilson Dias da Fonseca, n° 383, Centro, Santarém/PA - CEP: 68005-060",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "monte alegre/pa": {
        "subsecao": "Santarém/PA",
        "endereco_inss": "Rua Wilson Dias da Fonseca, n° 383, Centro, Santarém/PA - CEP: 68005-060",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "óbidos/pa": {
        "subsecao": "Santarém/PA",
        "endereco_inss": "Rua Wilson Dias da Fonseca, n° 383, Centro, Santarém/PA - CEP: 68005-060",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "oriximiná/pa": {
        "subsecao": "Santarém/PA",
        "endereco_inss": "Rua Wilson Dias da Fonseca, n° 383, Centro, Santarém/PA - CEP: 68005-060",
        "oab_advogado": "43696",
        "uf_oab": "PA"
    },
    "placas/pa": {
        "subsecao": "Santarém/PA",
        "endereco_inss": "Rua Wilson Dias da Fonseca, n° 383, Centro, Santarém/PA - CEP: 68005-060",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "prainha/pa": {
        "subsecao": "Santarém/PA",
        "endereco_inss": "Rua Wilson Dias da Fonseca, n° 383, Centro, Santarém/PA - CEP: 68005-060",
        "oab_advogado": "43696",
        "uf_oab": "PA"
    },
    "rurópolis/pa": {
        "subsecao": "Santarém/PA",
        "endereco_inss": "Rua Wilson Dias da Fonseca, n° 383, Centro, Santarém/PA - CEP: 68005-060",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "terra santa/pa": {
        "subsecao": "Santarém/PA",
        "endereco_inss": "Rua Wilson Dias da Fonseca, n° 383, Centro, Santarém/PA - CEP: 68005-060",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "uruará/pa": {
        "subsecao": "Santarém/PA",
        "endereco_inss": "Rua Wilson Dias da Fonseca, n° 383, Centro, Santarém/PA - CEP: 68005-060",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "tucuruí/pa": {
        "subsecao": "Tucuruí/PA",
        "endereco_inss": "Avenida Sete de Setembro, n° s/n, Esperança, Tucuruí/PA - CEP: 68459-210",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "breu branco/pa": {
        "subsecao": "Tucuruí/PA",
        "endereco_inss": "Avenida Sete de Setembro, n° s/n, Esperança, Tucuruí/PA - CEP: 68459-210",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "goianésia do pará/pa": {
        "subsecao": "Tucuruí/PA",
        "endereco_inss": "Avenida Sete de Setembro, n° s/n, Esperança, Tucuruí/PA - CEP: 68459-210",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "jacundá/pa": {
        "subsecao": "Tucuruí/PA",
        "endereco_inss": "Avenida Sete de Setembro, n° s/n, Esperança, Tucuruí/PA - CEP: 68459-210",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "novo repartimento/pa": {
        "subsecao": "Tucuruí/PA",
        "endereco_inss": "Avenida Sete de Setembro, n° s/n, Esperança, Tucuruí/PA - CEP: 68459-210",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "pacajá/pa": {
        "subsecao": "Tucuruí/PA",
        "endereco_inss": "Avenida Sete de Setembro, n° s/n, Esperança, Tucuruí/PA - CEP: 68459-210",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "tailândia/pa": {
        "subsecao": "Tucuruí/PA",
        "endereco_inss": "Avenida Sete de Setembro, n° s/n, Esperança, Tucuruí/PA - CEP: 68459-210",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "castelo de sonhos/pa": {
        "subsecao": "Itaituba/PA",
        "endereco_inss": "Avenida Marechal Rondon, n° 09, Liberdade, Itaituba/PA - CEP: 68181-010",
        "oab_advogado": "43696-A",
        "uf_oab": "PA"
    },
    "teresina/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "agricolândia/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "água branca/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "alto longá/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "altos/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "angical do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "assunção do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "barras/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "barro duro/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "batalha/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "beneditinos/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "boa hora/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "boqueirão do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "brasileira/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "buriti dos montes/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "cabeceiras do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "campo largo do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "campo maior/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "capitão de campos/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "castelo do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "cocal de telha/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "coivaras/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "curralinhos/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "demerval lobão/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "domingos mourão/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "elesbão veloso/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "esperantina/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "hugo napoleão/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "jatobá do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "joca marques/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "josé de freitas/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "juazeiro do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "lagoa alegre/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "lagoa de são francisco/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "lagoa do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "lagoinha do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "luzilândia/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "madeiro/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "matias olímpio/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "miguel alves/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "miguel leão/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "milton brandão/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "monsenhor gil/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "morro do chapéu do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "nazária/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "nossa senhora de nazaré/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "nossa senhora dos remédios/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "novo santo antônio/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "olho d'água do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "palmeirais/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "passagem franca do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "pau d'arco do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "pedro ii/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "piripiri/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "porto/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "prata do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "santa cruz do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "santa cruz dos milagres/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "santo antônio dos milagres/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são félix do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são gonçalo do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são joão da serra/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são joão do arraial/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são miguel da baixa grande/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são miguel do tapuio/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são pedro do piauí/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "sigefredo pacheco/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "união/pi": {
        "subsecao": "Teresina/PI",
        "endereco_inss": "Rua Areolino de Abreu, n° 1015, Centro, Teresina/PI - CEP: 64000-180",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "corrente/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "avelino lopes/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "barreiras do piauí/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "bom jesus/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "cristalândia do piauí/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "cristino castro/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "curimatá/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "currais/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "gilbués/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "júlio borges/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "monte alegre do piauí/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "morro cabeça no tempo/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "palmeira do piauí/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "parnaguá/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "redenção do gurguéia/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "riacho frio/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "santa filomena/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "santa luz/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são gonçalo do gurguéia/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "sebastião barros/pi": {
        "subsecao": "Corrente/PI",
        "endereco_inss": "Avenida Manoel Lourenço Cavalcante, n° s/n, Nova Corrente, Corrente/PI - CEP: 64980-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "floriano/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "amarante/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "antônio almeida/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "arraial/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "baixa grande do ribeiro/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "barra d'alcântara/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "bertolínia/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "cajazeiras do piauí/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "canavieira/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "colônia do gurguéia/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "colônia do piauí/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "conceição do canindé/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "eliseu martins/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "flores do piauí/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "floresta do piauí/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "francinópolis/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "francisco ayres/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "guadalupe/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "isaías coelho/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "itaueira/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "jardim do mulato/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "jerumenha/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "landri sales/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "manoel emídio/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "marcos parente/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "nazaré do piauí/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "oeiras/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "pavussu/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "porto alegre do piauí/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "regeneração/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "ribeiro gonçalves/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "rio grande do piauí/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "santa rosa do piauí/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "santo inácio do piauí/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são francisco do piauí/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são joão da varjota/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são josé do peixe/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são miguel do fidalgo/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "sebastião leal/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "tanque do piauí/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "uruçuí/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "várzea grande/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "wall ferraz/pi": {
        "subsecao": "Floriano/PI",
        "endereco_inss": "Avenida João Luís Ferreira, n° s/n, Centro, Floriano/PI - CEP: 64800-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "parnaíba/pi": {
        "subsecao": "Parnaíba/PI",
        "endereco_inss": "Rua Humberto de Campos, n° 512, Centro, Parnaíba/PI - CEP: 64200-380",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "bom princípio do piauí/pi": {
        "subsecao": "Parnaíba/PI",
        "endereco_inss": "Rua Humberto de Campos, n° 512, Centro, Parnaíba/PI - CEP: 64200-380",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "buriti dos lopes/pi": {
        "subsecao": "Parnaíba/PI",
        "endereco_inss": "Rua Humberto de Campos, n° 512, Centro, Parnaíba/PI - CEP: 64200-380",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "cajueiro da praia/pi": {
        "subsecao": "Parnaíba/PI",
        "endereco_inss": "Rua Humberto de Campos, n° 512, Centro, Parnaíba/PI - CEP: 64200-380",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "caraúbas do piauí/pi": {
        "subsecao": "Parnaíba/PI",
        "endereco_inss": "Rua Humberto de Campos, n° 512, Centro, Parnaíba/PI - CEP: 64200-380",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "caxingó/pi": {
        "subsecao": "Parnaíba/PI",
        "endereco_inss": "Rua Humberto de Campos, n° 512, Centro, Parnaíba/PI - CEP: 64200-380",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "cocal/pi": {
        "subsecao": "Parnaíba/PI",
        "endereco_inss": "Rua Humberto de Campos, n° 512, Centro, Parnaíba/PI - CEP: 64200-380",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "cocal dos alves/pi": {
        "subsecao": "Parnaíba/PI",
        "endereco_inss": "Rua Humberto de Campos, n° 512, Centro, Parnaíba/PI - CEP: 64200-380",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "ilha grande/pi": {
        "subsecao": "Parnaíba/PI",
        "endereco_inss": "Rua Humberto de Campos, n° 512, Centro, Parnaíba/PI - CEP: 64200-380",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "joaquim pires/pi": {
        "subsecao": "Parnaíba/PI",
        "endereco_inss": "Rua Humberto de Campos, n° 512, Centro, Parnaíba/PI - CEP: 64200-380",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "luís correia/pi": {
        "subsecao": "Parnaíba/PI",
        "endereco_inss": "Rua Humberto de Campos, n° 512, Centro, Parnaíba/PI - CEP: 64200-380",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "murici dos portelas/pi": {
        "subsecao": "Parnaíba/PI",
        "endereco_inss": "Rua Humberto de Campos, n° 512, Centro, Parnaíba/PI - CEP: 64200-380",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "piracuruca/pi": {
        "subsecao": "Parnaíba/PI",
        "endereco_inss": "Rua Humberto de Campos, n° 512, Centro, Parnaíba/PI - CEP: 64200-380",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são joão da fronteira/pi": {
        "subsecao": "Parnaíba/PI",
        "endereco_inss": "Rua Humberto de Campos, n° 512, Centro, Parnaíba/PI - CEP: 64200-380",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são josé do divino/pi": {
        "subsecao": "Parnaíba/PI",
        "endereco_inss": "Rua Humberto de Campos, n° 512, Centro, Parnaíba/PI - CEP: 64200-380",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "picos/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "acauã/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "alagoinha do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "alegrete do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "aroazes/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "aroeiras do itaim/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "belém do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "betânia do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "bocaina/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "caldeirão grande do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "campo grande do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "caridade do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "curral novo do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "dom expedito lopes/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "francisco macedo/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "francisco santos/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "fronteiras/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "geminiano/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "inhuma/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "ipiranga do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "itainópolis/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "jacobina do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "jaicós/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "lagoa do sítio/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "marcolândia/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "massapê do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "monsenhor hipólito/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "novo oriente do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "padre marcos/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "paquetá/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "patos do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "paulistana/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "pimenteiras/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "pio ix/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "santana do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "santo antônio de lisboa/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são joão da canabrava/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são josé do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são julião/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são luis do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "simões/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "sussuapara/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "valença do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "vera mendes/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "vila nova do piauí/pi": {
        "subsecao": "Picos/PI",
        "endereco_inss": "Rua Coronel Francisco Santos, n° 219, Centro, Picos/PI - CEP: 64600-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são raimundo nonato/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "alvorada do gurguéia/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "anísio de abreu/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "bela vista do piauí/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "bonfim do piauí/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "brejo do piauí/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "campinas do piauí/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "campo alegre do fidalgo/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "canto do buriti/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "capitão gervásio oliveira/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "caracol/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "coronel josé dias/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "dirceu arcoverde/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "dom inocêncio/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "fartura do piauí/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "guaribas/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "joão costa/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "jurema/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "lagoa do barro do piauí/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "nova santa rita/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "paes landim/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "pajeú do piauí/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "pedro laurentino/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "queimada nova/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "ribeira do piauí/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são braz do piauí/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são francisco de assis do piauí/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são joão do piauí/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "são lourenço do piauí/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "simplício mendes/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "socorro do piauí/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "tamboril do piauí/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "várzea branca/pi": {
        "subsecao": "São Raimundo Nonato/PI",
        "endereco_inss": "Rua Projetada 112, n° s/n, Centro, São Raimundo Nonato/PI - CEP: 64770-000",
        "oab_advogado": "26596",
        "uf_oab": "PI"
    },
    "itaguaí/rj": {
        "subsecao": "Rio de Janeiro/RJ",
        "endereco_inss": "Rua Acre, n° 80, Centro, Rio de Janeiro/RJ - CEP: 20081-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "mangaratiba/rj": {
        "subsecao": "Rio de Janeiro/RJ",
        "endereco_inss": "Rua Acre, n° 80, Centro, Rio de Janeiro/RJ - CEP: 20081-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "rio de janeiro/rj": {
        "subsecao": "Rio de Janeiro/RJ",
        "endereco_inss": "Rua Acre, n° 80, Centro, Rio de Janeiro/RJ - CEP: 20081-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "seropédica/rj": {
        "subsecao": "Rio de Janeiro/RJ",
        "endereco_inss": "Rua Acre, n° 80, Centro, Rio de Janeiro/RJ - CEP: 20081-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "angra dos reis/rj": {
        "subsecao": "Angra dos Reis/RJ",
        "endereco_inss": "Rua Coronel Carvalho, n° 43, Centro, Angra dos Reis/RJ - CEP: 23900-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "paraty/rj": {
        "subsecao": "Angra dos Reis/RJ",
        "endereco_inss": "Rua Coronel Carvalho, n° 43, Centro, Angra dos Reis/RJ - CEP: 23900-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "barra do piraí/rj": {
        "subsecao": "Barra do Piraí/RJ",
        "endereco_inss": "Rua Aureliano Garcia, n° 222, Centro, Barra do Piraí/RJ - CEP: 27135-070",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "engenheiro paulo de frontin/rj": {
        "subsecao": "Barra do Piraí/RJ",
        "endereco_inss": "Rua Aureliano Garcia, n° 222, Centro, Barra do Piraí/RJ - CEP: 27135-070",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "mendes/rj": {
        "subsecao": "Barra do Piraí/RJ",
        "endereco_inss": "Rua Aureliano Garcia, n° 222, Centro, Barra do Piraí/RJ - CEP: 27135-070",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "piraí/rj": {
        "subsecao": "Barra do Piraí/RJ",
        "endereco_inss": "Rua Aureliano Garcia, n° 222, Centro, Barra do Piraí/RJ - CEP: 27135-070",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "rio das flores/rj": {
        "subsecao": "Barra do Piraí/RJ",
        "endereco_inss": "Rua Aureliano Garcia, n° 222, Centro, Barra do Piraí/RJ - CEP: 27135-070",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "valença/rj": {
        "subsecao": "Barra do Piraí/RJ",
        "endereco_inss": "Rua Aureliano Garcia, n° 222, Centro, Barra do Piraí/RJ - CEP: 27135-070",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "vassouras/rj": {
        "subsecao": "Barra do Piraí/RJ",
        "endereco_inss": "Rua Aureliano Garcia, n° 222, Centro, Barra do Piraí/RJ - CEP: 27135-070",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "campos dos goytacazes/rj": {
        "subsecao": "Campos dos Goytacazes/RJ",
        "endereco_inss": "Rua Treze de Maio, n° 70, Centro, Campos dos Goytacazes/RJ - CEP: 28010-260",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "cambuci/rj": {
        "subsecao": "Campos dos Goytacazes/RJ",
        "endereco_inss": "Rua Treze de Maio, n° 70, Centro, Campos dos Goytacazes/RJ - CEP: 28010-260",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "cardoso moreira/rj": {
        "subsecao": "Campos dos Goytacazes/RJ",
        "endereco_inss": "Rua Treze de Maio, n° 70, Centro, Campos dos Goytacazes/RJ - CEP: 28010-260",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "itaocara/rj": {
        "subsecao": "Campos dos Goytacazes/RJ",
        "endereco_inss": "Rua Treze de Maio, n° 70, Centro, Campos dos Goytacazes/RJ - CEP: 28010-260",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "quissamã/rj": {
        "subsecao": "Campos dos Goytacazes/RJ",
        "endereco_inss": "Rua Treze de Maio, n° 70, Centro, Campos dos Goytacazes/RJ - CEP: 28010-260",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "são fidélis/rj": {
        "subsecao": "Campos dos Goytacazes/RJ",
        "endereco_inss": "Rua Treze de Maio, n° 70, Centro, Campos dos Goytacazes/RJ - CEP: 28010-260",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "são francisco de itabapoana/rj": {
        "subsecao": "Campos dos Goytacazes/RJ",
        "endereco_inss": "Rua Treze de Maio, n° 70, Centro, Campos dos Goytacazes/RJ - CEP: 28010-260",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "são joão da barra/rj": {
        "subsecao": "Campos dos Goytacazes/RJ",
        "endereco_inss": "Rua Treze de Maio, n° 70, Centro, Campos dos Goytacazes/RJ - CEP: 28010-260",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "duque de caxias/rj": {
        "subsecao": "Duque de Caxias/RJ",
        "endereco_inss": "Rua Marechal Deodoro, n° 500, Jardim 25 de Agosto, Duque de Caxias/RJ - CEP: 25071-190",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "belford roxo/rj": {
        "subsecao": "Duque de Caxias/RJ",
        "endereco_inss": "Rua Marechal Deodoro, n° 500, Jardim 25 de Agosto, Duque de Caxias/RJ - CEP: 25071-190",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "itaboraí/rj": {
        "subsecao": "Itaboraí/RJ",
        "endereco_inss": "Rua Dr. Macedo, n° 238, Centro, Itaboraí/RJ - CEP: 24800-213",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "cachoeiras de macacu/rj": {
        "subsecao": "Itaboraí/RJ",
        "endereco_inss": "Rua Dr. Macedo, n° 238, Centro, Itaboraí/RJ - CEP: 24800-213",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "rio bonito/rj": {
        "subsecao": "Itaboraí/RJ",
        "endereco_inss": "Rua Dr. Macedo, n° 238, Centro, Itaboraí/RJ - CEP: 24800-213",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "silva jardim/rj": {
        "subsecao": "Itaboraí/RJ",
        "endereco_inss": "Rua Dr. Macedo, n° 238, Centro, Itaboraí/RJ - CEP: 24800-213",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "tanguá/rj": {
        "subsecao": "Itaboraí/RJ",
        "endereco_inss": "Rua Dr. Macedo, n° 238, Centro, Itaboraí/RJ - CEP: 24800-213",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "itaperuna/rj": {
        "subsecao": "Itaperuna/RJ",
        "endereco_inss": "Avenida Senador Francisco Sá Tinoco, n° 92, Centro, Itaperuna/RJ - CEP: 28300-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "aperibé/rj": {
        "subsecao": "Itaperuna/RJ",
        "endereco_inss": "Avenida Senador Francisco Sá Tinoco, n° 92, Centro, Itaperuna/RJ - CEP: 28300-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "bom jesus do itabapoana/rj": {
        "subsecao": "Itaperuna/RJ",
        "endereco_inss": "Avenida Senador Francisco Sá Tinoco, n° 92, Centro, Itaperuna/RJ - CEP: 28300-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "italva/rj": {
        "subsecao": "Itaperuna/RJ",
        "endereco_inss": "Avenida Senador Francisco Sá Tinoco, n° 92, Centro, Itaperuna/RJ - CEP: 28300-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "laje do muriaé/rj": {
        "subsecao": "Itaperuna/RJ",
        "endereco_inss": "Avenida Senador Francisco Sá Tinoco, n° 92, Centro, Itaperuna/RJ - CEP: 28300-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "miracema/rj": {
        "subsecao": "Itaperuna/RJ",
        "endereco_inss": "Avenida Senador Francisco Sá Tinoco, n° 92, Centro, Itaperuna/RJ - CEP: 28300-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "natividade/rj": {
        "subsecao": "Itaperuna/RJ",
        "endereco_inss": "Avenida Senador Francisco Sá Tinoco, n° 92, Centro, Itaperuna/RJ - CEP: 28300-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "porciúncula/rj": {
        "subsecao": "Itaperuna/RJ",
        "endereco_inss": "Avenida Senador Francisco Sá Tinoco, n° 92, Centro, Itaperuna/RJ - CEP: 28300-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "santo antônio de pádua/rj": {
        "subsecao": "Itaperuna/RJ",
        "endereco_inss": "Avenida Senador Francisco Sá Tinoco, n° 92, Centro, Itaperuna/RJ - CEP: 28300-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "são josé de ubá/rj": {
        "subsecao": "Itaperuna/RJ",
        "endereco_inss": "Avenida Senador Francisco Sá Tinoco, n° 92, Centro, Itaperuna/RJ - CEP: 28300-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "varre-sai/rj": {
        "subsecao": "Itaperuna/RJ",
        "endereco_inss": "Avenida Senador Francisco Sá Tinoco, n° 92, Centro, Itaperuna/RJ - CEP: 28300-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "macaé/rj": {
        "subsecao": "Macaé/RJ",
        "endereco_inss": "Rua Dr. Francisco Portela, n° 569, Centro, Macaé/RJ - CEP: 27910-200",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "carapebus/rj": {
        "subsecao": "Macaé/RJ",
        "endereco_inss": "Rua Dr. Francisco Portela, n° 569, Centro, Macaé/RJ - CEP: 27910-200",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "casimiro de abreu/rj": {
        "subsecao": "Macaé/RJ",
        "endereco_inss": "Rua Dr. Francisco Portela, n° 569, Centro, Macaé/RJ - CEP: 27910-200",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "conceição de macabu/rj": {
        "subsecao": "Macaé/RJ",
        "endereco_inss": "Rua Dr. Francisco Portela, n° 569, Centro, Macaé/RJ - CEP: 27910-200",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "rio das ostras/rj": {
        "subsecao": "Macaé/RJ",
        "endereco_inss": "Rua Dr. Francisco Portela, n° 569, Centro, Macaé/RJ - CEP: 27910-200",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "magé/rj": {
        "subsecao": "Magé/RJ",
        "endereco_inss": "Avenida Simão da Motta, n° 785, Magemirim, Magé/RJ - CEP: 25903-587",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "guapimirim/rj": {
        "subsecao": "Magé/RJ",
        "endereco_inss": "Avenida Simão da Motta, n° 785, Magemirim, Magé/RJ - CEP: 25903-587",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "niterói/rj": {
        "subsecao": "Niterói/RJ",
        "endereco_inss": "Rua Visconde do Uruguai, n° 531, Centro, Niterói/RJ - CEP: 24030-078",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "maricá/rj": {
        "subsecao": "Niterói/RJ",
        "endereco_inss": "Rua Visconde do Uruguai, n° 531, Centro, Niterói/RJ - CEP: 24030-078",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "são gonçalo/rj": {
        "subsecao": "Niterói/RJ",
        "endereco_inss": "Rua Visconde do Uruguai, n° 531, Centro, Niterói/RJ - CEP: 24030-078",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "nova friburgo/rj": {
        "subsecao": "Nova Friburgo/RJ",
        "endereco_inss": "Endereço da APS não localizado nas fontes consultadas – conferir no Meu INSS",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "bom jardim/rj": {
        "subsecao": "Nova Friburgo/RJ",
        "endereco_inss": "Endereço da APS não localizado nas fontes consultadas – conferir no Meu INSS",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "cantagalo/rj": {
        "subsecao": "Nova Friburgo/RJ",
        "endereco_inss": "Endereço da APS não localizado nas fontes consultadas – conferir no Meu INSS",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "carmo/rj": {
        "subsecao": "Nova Friburgo/RJ",
        "endereco_inss": "Endereço da APS não localizado nas fontes consultadas – conferir no Meu INSS",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "cordeiro/rj": {
        "subsecao": "Nova Friburgo/RJ",
        "endereco_inss": "Endereço da APS não localizado nas fontes consultadas – conferir no Meu INSS",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "duas barras/rj": {
        "subsecao": "Nova Friburgo/RJ",
        "endereco_inss": "Endereço da APS não localizado nas fontes consultadas – conferir no Meu INSS",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "macuco/rj": {
        "subsecao": "Nova Friburgo/RJ",
        "endereco_inss": "Endereço da APS não localizado nas fontes consultadas – conferir no Meu INSS",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "santa maria madalena/rj": {
        "subsecao": "Nova Friburgo/RJ",
        "endereco_inss": "Endereço da APS não localizado nas fontes consultadas – conferir no Meu INSS",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "são sebastião do alto/rj": {
        "subsecao": "Nova Friburgo/RJ",
        "endereco_inss": "Endereço da APS não localizado nas fontes consultadas – conferir no Meu INSS",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "sumidouro/rj": {
        "subsecao": "Nova Friburgo/RJ",
        "endereco_inss": "Endereço da APS não localizado nas fontes consultadas – conferir no Meu INSS",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "trajano de moraes/rj": {
        "subsecao": "Nova Friburgo/RJ",
        "endereco_inss": "Endereço da APS não localizado nas fontes consultadas – conferir no Meu INSS",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "nova iguaçu/rj": {
        "subsecao": "Nova Iguaçu/RJ",
        "endereco_inss": "Rua Estados Unidos, n° 300, Metrópole, Nova Iguaçu/RJ - CEP: 26286-261",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "japeri/rj": {
        "subsecao": "Nova Iguaçu/RJ",
        "endereco_inss": "Rua Estados Unidos, n° 300, Metrópole, Nova Iguaçu/RJ - CEP: 26286-261",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "paracambi/rj": {
        "subsecao": "Nova Iguaçu/RJ",
        "endereco_inss": "Rua Estados Unidos, n° 300, Metrópole, Nova Iguaçu/RJ - CEP: 26286-261",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "queimados/rj": {
        "subsecao": "Nova Iguaçu/RJ",
        "endereco_inss": "Rua Estados Unidos, n° 300, Metrópole, Nova Iguaçu/RJ - CEP: 26286-261",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "petrópolis/rj": {
        "subsecao": "Petrópolis/RJ",
        "endereco_inss": "Rua Antônio da Silva Ligeiro, n° 420, Taquara, Petrópolis/RJ - CEP: 25600-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "resende/rj": {
        "subsecao": "Resende/RJ",
        "endereco_inss": "Rua Paul Harris, n° 106, Centro, Resende/RJ - CEP: 27511-340",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "itatiaia/rj": {
        "subsecao": "Resende/RJ",
        "endereco_inss": "Rua Paul Harris, n° 106, Centro, Resende/RJ - CEP: 27511-340",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "porto real/rj": {
        "subsecao": "Resende/RJ",
        "endereco_inss": "Rua Paul Harris, n° 106, Centro, Resende/RJ - CEP: 27511-340",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "quatis/rj": {
        "subsecao": "Resende/RJ",
        "endereco_inss": "Rua Paul Harris, n° 106, Centro, Resende/RJ - CEP: 27511-340",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "são joão de meriti/rj": {
        "subsecao": "São João de Meriti/RJ",
        "endereco_inss": "Avenida Automóvel Clube, n° 2384, Vilar dos Teles, São João de Meriti/RJ - CEP: 25565-172",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "mesquita/rj": {
        "subsecao": "São João de Meriti/RJ",
        "endereco_inss": "Avenida Automóvel Clube, n° 2384, Vilar dos Teles, São João de Meriti/RJ - CEP: 25565-172",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "nilópolis/rj": {
        "subsecao": "São João de Meriti/RJ",
        "endereco_inss": "Avenida Automóvel Clube, n° 2384, Vilar dos Teles, São João de Meriti/RJ - CEP: 25565-172",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "são pedro da aldeia/rj": {
        "subsecao": "São Pedro da Aldeia/RJ",
        "endereco_inss": "Rua Francisco Santos Silva, n° 64, Centro, São Pedro da Aldeia/RJ - CEP: 28940-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "araruama/rj": {
        "subsecao": "São Pedro da Aldeia/RJ",
        "endereco_inss": "Rua Francisco Santos Silva, n° 64, Centro, São Pedro da Aldeia/RJ - CEP: 28940-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "armação dos búzios/rj": {
        "subsecao": "São Pedro da Aldeia/RJ",
        "endereco_inss": "Rua Francisco Santos Silva, n° 64, Centro, São Pedro da Aldeia/RJ - CEP: 28940-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "arraial do cabo/rj": {
        "subsecao": "São Pedro da Aldeia/RJ",
        "endereco_inss": "Rua Francisco Santos Silva, n° 64, Centro, São Pedro da Aldeia/RJ - CEP: 28940-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "cabo frio/rj": {
        "subsecao": "São Pedro da Aldeia/RJ",
        "endereco_inss": "Rua Francisco Santos Silva, n° 64, Centro, São Pedro da Aldeia/RJ - CEP: 28940-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "iguaba grande/rj": {
        "subsecao": "São Pedro da Aldeia/RJ",
        "endereco_inss": "Rua Francisco Santos Silva, n° 64, Centro, São Pedro da Aldeia/RJ - CEP: 28940-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "saquarema/rj": {
        "subsecao": "São Pedro da Aldeia/RJ",
        "endereco_inss": "Rua Francisco Santos Silva, n° 64, Centro, São Pedro da Aldeia/RJ - CEP: 28940-000",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "teresópolis/rj": {
        "subsecao": "Teresópolis/RJ",
        "endereco_inss": "Rua Monte Líbano, n° 158, Várzea, Teresópolis/RJ - CEP: 25953-020",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "são josé do vale do rio preto/rj": {
        "subsecao": "Teresópolis/RJ",
        "endereco_inss": "Rua Monte Líbano, n° 158, Várzea, Teresópolis/RJ - CEP: 25953-020",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "três rios/rj": {
        "subsecao": "Três Rios/RJ",
        "endereco_inss": "Rua Quinze de Novembro, n° 1813, Centro, Três Rios/RJ - CEP: 25807-280",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "areal/rj": {
        "subsecao": "Três Rios/RJ",
        "endereco_inss": "Rua Quinze de Novembro, n° 1813, Centro, Três Rios/RJ - CEP: 25807-280",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "comendador levy gasparian/rj": {
        "subsecao": "Três Rios/RJ",
        "endereco_inss": "Rua Quinze de Novembro, n° 1813, Centro, Três Rios/RJ - CEP: 25807-280",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "miguel pereira/rj": {
        "subsecao": "Três Rios/RJ",
        "endereco_inss": "Rua Quinze de Novembro, n° 1813, Centro, Três Rios/RJ - CEP: 25807-280",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "paraíba do sul/rj": {
        "subsecao": "Três Rios/RJ",
        "endereco_inss": "Rua Quinze de Novembro, n° 1813, Centro, Três Rios/RJ - CEP: 25807-280",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "paty do alferes/rj": {
        "subsecao": "Três Rios/RJ",
        "endereco_inss": "Rua Quinze de Novembro, n° 1813, Centro, Três Rios/RJ - CEP: 25807-280",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "sapucaia/rj": {
        "subsecao": "Três Rios/RJ",
        "endereco_inss": "Rua Quinze de Novembro, n° 1813, Centro, Três Rios/RJ - CEP: 25807-280",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "volta redonda/rj": {
        "subsecao": "Volta Redonda/RJ",
        "endereco_inss": "Avenida Getúlio Vargas, n° 403, Centro, Volta Redonda/RJ - CEP: 27253-410",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "barra mansa/rj": {
        "subsecao": "Volta Redonda/RJ",
        "endereco_inss": "Avenida Getúlio Vargas, n° 403, Centro, Volta Redonda/RJ - CEP: 27253-410",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "pinheiral/rj": {
        "subsecao": "Volta Redonda/RJ",
        "endereco_inss": "Avenida Getúlio Vargas, n° 403, Centro, Volta Redonda/RJ - CEP: 27253-410",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "rio claro/rj": {
        "subsecao": "Volta Redonda/RJ",
        "endereco_inss": "Avenida Getúlio Vargas, n° 403, Centro, Volta Redonda/RJ - CEP: 27253-410",
        "oab_advogado": "267893",
        "uf_oab": "RJ"
    },
    "blumenau/sc": {
        "subsecao": "Blumenau/SC",
        "endereco_inss": "Rua Floriano Peixoto, n° 126, Centro, Blumenau/SC - CEP: 89010-022",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "apiúna/sc": {
        "subsecao": "Blumenau/SC",
        "endereco_inss": "Rua Floriano Peixoto, n° 126, Centro, Blumenau/SC - CEP: 89010-022",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "ascurra/sc": {
        "subsecao": "Blumenau/SC",
        "endereco_inss": "Rua Floriano Peixoto, n° 126, Centro, Blumenau/SC - CEP: 89010-022",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "benedito novo/sc": {
        "subsecao": "Blumenau/SC",
        "endereco_inss": "Rua Floriano Peixoto, n° 126, Centro, Blumenau/SC - CEP: 89010-022",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "doutor pedrinho/sc": {
        "subsecao": "Blumenau/SC",
        "endereco_inss": "Rua Floriano Peixoto, n° 126, Centro, Blumenau/SC - CEP: 89010-022",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "gaspar/sc": {
        "subsecao": "Blumenau/SC",
        "endereco_inss": "Rua Floriano Peixoto, n° 126, Centro, Blumenau/SC - CEP: 89010-022",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "ilhota/sc": {
        "subsecao": "Blumenau/SC",
        "endereco_inss": "Rua Floriano Peixoto, n° 126, Centro, Blumenau/SC - CEP: 89010-022",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "indaial/sc": {
        "subsecao": "Blumenau/SC",
        "endereco_inss": "Rua Floriano Peixoto, n° 126, Centro, Blumenau/SC - CEP: 89010-022",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "luiz alves/sc": {
        "subsecao": "Blumenau/SC",
        "endereco_inss": "Rua Floriano Peixoto, n° 126, Centro, Blumenau/SC - CEP: 89010-022",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "pomerode/sc": {
        "subsecao": "Blumenau/SC",
        "endereco_inss": "Rua Floriano Peixoto, n° 126, Centro, Blumenau/SC - CEP: 89010-022",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "rio dos cedros/sc": {
        "subsecao": "Blumenau/SC",
        "endereco_inss": "Rua Floriano Peixoto, n° 126, Centro, Blumenau/SC - CEP: 89010-022",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "rodeio/sc": {
        "subsecao": "Blumenau/SC",
        "endereco_inss": "Rua Floriano Peixoto, n° 126, Centro, Blumenau/SC - CEP: 89010-022",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "timbó/sc": {
        "subsecao": "Blumenau/SC",
        "endereco_inss": "Rua Floriano Peixoto, n° 126, Centro, Blumenau/SC - CEP: 89010-022",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "brusque/sc": {
        "subsecao": "Brusque/SC",
        "endereco_inss": "Rua Barão do Rio Branco, n° 206, Centro, Brusque/SC - CEP: 88350-200",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "botuverá/sc": {
        "subsecao": "Brusque/SC",
        "endereco_inss": "Rua Barão do Rio Branco, n° 206, Centro, Brusque/SC - CEP: 88350-200",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "guabiruba/sc": {
        "subsecao": "Brusque/SC",
        "endereco_inss": "Rua Barão do Rio Branco, n° 206, Centro, Brusque/SC - CEP: 88350-200",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "major gercino/sc": {
        "subsecao": "Brusque/SC",
        "endereco_inss": "Rua Barão do Rio Branco, n° 206, Centro, Brusque/SC - CEP: 88350-200",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "nova trento/sc": {
        "subsecao": "Brusque/SC",
        "endereco_inss": "Rua Barão do Rio Branco, n° 206, Centro, Brusque/SC - CEP: 88350-200",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são joão batista/sc": {
        "subsecao": "Brusque/SC",
        "endereco_inss": "Rua Barão do Rio Branco, n° 206, Centro, Brusque/SC - CEP: 88350-200",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "caçador/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "arroio trinta/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "calmon/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "curitibanos/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "fraiburgo/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "frei rogério/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "iomerê/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "irineópolis/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "lebon régis/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "macieira/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "matos costa/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "monte carlo/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "ponte alta do norte/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "porto união/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "rio das antas/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "salto veloso/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "santa cecília/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são cristovão do sul/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "timbó grande/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "videira/sc": {
        "subsecao": "Caçador/SC",
        "endereco_inss": "Rua Campos Novos, n° 301, Centro, Caçador/SC - CEP: 89500-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "chapecó/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "abelardo luz/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "águas de chapecó/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "águas frias/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "arvoredo/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "bom jesus/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "caxambu do sul/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "cordilheira alta/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "coronel freitas/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "coronel martins/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "entre rios/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "formosa do sul/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "galvão/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "guatambú/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "ipuaçu/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "irati/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "jardinópolis/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "jupiá/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "lajeado grande/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "marema/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "modelo/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "nova erechim/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "nova itaberaba/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "novo horizonte/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "ouro verde/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "paial/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "palmitos/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "pinhalzinho/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "planalto alegre/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "quilombo/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "santiago do sul/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são carlos/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são domingos/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são lourenço do oeste/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "saudades/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "serra alta/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "sul brasil/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "união do oeste/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "xanxerê/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "xaxim/sc": {
        "subsecao": "Chapecó/SC",
        "endereco_inss": "Rua Rui Barbosa, n° 42, Centro, Chapecó/SC - CEP: 89801-147",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "concórdia/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "alto bela vista/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "arabutã/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "faxinal dos guedes/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "ipira/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "ipumirim/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "irani/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "itá/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "jaborá/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "lindóia do sul/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "passos maia/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "peritiba/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "piratuba/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "ponte serrada/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "presidente castello branco/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "seara/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "vargeão/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "xavantina/sc": {
        "subsecao": "Concórdia/SC",
        "endereco_inss": "Rua Independência, n° 221, Centro, Concórdia/SC - CEP: 89700-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "criciúma/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "araranguá/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "balneário arroio do silva/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "balneário gaivota/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "balneário rincão/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "cocal do sul/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "ermo/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "forquilhinha/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "içara/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "jacinto machado/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "lauro muller/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "maracajá/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "meleiro/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "morro da fumaça/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "morro grande/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "nova veneza/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "orleans/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "passo de torres/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "praia grande/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "santa rosa do sul/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são joão do sul/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "siderópolis/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "sombrio/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "timbé do sul/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "treviso/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "turvo/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "urussanga/sc": {
        "subsecao": "Criciúma/SC",
        "endereco_inss": "Rua São José, n° 146, Centro, Criciúma/SC - CEP: 88811-070",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "florianópolis/sc": {
        "subsecao": "Florianópolis/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 331, Centro, Florianópolis/SC - CEP: 88010-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "águas mornas/sc": {
        "subsecao": "Florianópolis/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 331, Centro, Florianópolis/SC - CEP: 88010-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "alfredo wagner/sc": {
        "subsecao": "Florianópolis/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 331, Centro, Florianópolis/SC - CEP: 88010-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "angelina/sc": {
        "subsecao": "Florianópolis/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 331, Centro, Florianópolis/SC - CEP: 88010-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "anitápolis/sc": {
        "subsecao": "Florianópolis/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 331, Centro, Florianópolis/SC - CEP: 88010-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "antônio carlos/sc": {
        "subsecao": "Florianópolis/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 331, Centro, Florianópolis/SC - CEP: 88010-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "biguaçu/sc": {
        "subsecao": "Florianópolis/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 331, Centro, Florianópolis/SC - CEP: 88010-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "governador celso ramos/sc": {
        "subsecao": "Florianópolis/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 331, Centro, Florianópolis/SC - CEP: 88010-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "palhoça/sc": {
        "subsecao": "Florianópolis/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 331, Centro, Florianópolis/SC - CEP: 88010-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "paulo lopes/sc": {
        "subsecao": "Florianópolis/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 331, Centro, Florianópolis/SC - CEP: 88010-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "rancho queimado/sc": {
        "subsecao": "Florianópolis/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 331, Centro, Florianópolis/SC - CEP: 88010-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "santo amaro da imperatriz/sc": {
        "subsecao": "Florianópolis/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 331, Centro, Florianópolis/SC - CEP: 88010-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são bonifácio/sc": {
        "subsecao": "Florianópolis/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 331, Centro, Florianópolis/SC - CEP: 88010-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são josé/sc": {
        "subsecao": "Florianópolis/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 331, Centro, Florianópolis/SC - CEP: 88010-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são pedro de alcântara/sc": {
        "subsecao": "Florianópolis/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 331, Centro, Florianópolis/SC - CEP: 88010-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "itajaí/sc": {
        "subsecao": "Itajaí/SC",
        "endereco_inss": "Rua Doutor José Bonifácio Malburg, n° 195, Centro, Itajaí/SC - CEP: 88301-350",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "balneário camboriú/sc": {
        "subsecao": "Itajaí/SC",
        "endereco_inss": "Rua Doutor José Bonifácio Malburg, n° 195, Centro, Itajaí/SC - CEP: 88301-350",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "balneário piçarras/sc": {
        "subsecao": "Itajaí/SC",
        "endereco_inss": "Rua Doutor José Bonifácio Malburg, n° 195, Centro, Itajaí/SC - CEP: 88301-350",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "bombinhas/sc": {
        "subsecao": "Itajaí/SC",
        "endereco_inss": "Rua Doutor José Bonifácio Malburg, n° 195, Centro, Itajaí/SC - CEP: 88301-350",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "camboriú/sc": {
        "subsecao": "Itajaí/SC",
        "endereco_inss": "Rua Doutor José Bonifácio Malburg, n° 195, Centro, Itajaí/SC - CEP: 88301-350",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "canelinha/sc": {
        "subsecao": "Itajaí/SC",
        "endereco_inss": "Rua Doutor José Bonifácio Malburg, n° 195, Centro, Itajaí/SC - CEP: 88301-350",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "itapema/sc": {
        "subsecao": "Itajaí/SC",
        "endereco_inss": "Rua Doutor José Bonifácio Malburg, n° 195, Centro, Itajaí/SC - CEP: 88301-350",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "navegantes/sc": {
        "subsecao": "Itajaí/SC",
        "endereco_inss": "Rua Doutor José Bonifácio Malburg, n° 195, Centro, Itajaí/SC - CEP: 88301-350",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "penha/sc": {
        "subsecao": "Itajaí/SC",
        "endereco_inss": "Rua Doutor José Bonifácio Malburg, n° 195, Centro, Itajaí/SC - CEP: 88301-350",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "porto belo/sc": {
        "subsecao": "Itajaí/SC",
        "endereco_inss": "Rua Doutor José Bonifácio Malburg, n° 195, Centro, Itajaí/SC - CEP: 88301-350",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "tijucas/sc": {
        "subsecao": "Itajaí/SC",
        "endereco_inss": "Rua Doutor José Bonifácio Malburg, n° 195, Centro, Itajaí/SC - CEP: 88301-350",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "jaraguá do sul/sc": {
        "subsecao": "Jaraguá do Sul/SC",
        "endereco_inss": "Avenida Getúlio Vargas, n° 500, Centro, Jaraguá do Sul/SC - CEP: 89251-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "corupá/sc": {
        "subsecao": "Jaraguá do Sul/SC",
        "endereco_inss": "Avenida Getúlio Vargas, n° 500, Centro, Jaraguá do Sul/SC - CEP: 89251-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "guaramirim/sc": {
        "subsecao": "Jaraguá do Sul/SC",
        "endereco_inss": "Avenida Getúlio Vargas, n° 500, Centro, Jaraguá do Sul/SC - CEP: 89251-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "massaranduba/sc": {
        "subsecao": "Jaraguá do Sul/SC",
        "endereco_inss": "Avenida Getúlio Vargas, n° 500, Centro, Jaraguá do Sul/SC - CEP: 89251-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "schroeder/sc": {
        "subsecao": "Jaraguá do Sul/SC",
        "endereco_inss": "Avenida Getúlio Vargas, n° 500, Centro, Jaraguá do Sul/SC - CEP: 89251-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "joaçaba/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "abdon batista/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "água doce/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "brunópolis/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "campos novos/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "capinzal/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "catanduvas/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "celso ramos/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "erval velho/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "herval d'oeste/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "ibiam/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "ibicaré/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "lacerdópolis/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "luzerna/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "ouro/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "pinheiro preto/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "tangará/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "treze tílias/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "vargem/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "vargem bonita/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "zortéa/sc": {
        "subsecao": "Joaçaba/SC",
        "endereco_inss": "Rua Felipe Schmidt, n° 12, Centro, Joaçaba/SC - CEP: 89600-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "joinville/sc": {
        "subsecao": "Joinville/SC",
        "endereco_inss": "Rua Nove de Março, n° 241, Centro, Joinville/SC - CEP: 89201-903",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "araquari/sc": {
        "subsecao": "Joinville/SC",
        "endereco_inss": "Rua Nove de Março, n° 241, Centro, Joinville/SC - CEP: 89201-903",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "balneário barra do sul/sc": {
        "subsecao": "Joinville/SC",
        "endereco_inss": "Rua Nove de Março, n° 241, Centro, Joinville/SC - CEP: 89201-903",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "barra velha/sc": {
        "subsecao": "Joinville/SC",
        "endereco_inss": "Rua Nove de Março, n° 241, Centro, Joinville/SC - CEP: 89201-903",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "campo alegre/sc": {
        "subsecao": "Joinville/SC",
        "endereco_inss": "Rua Nove de Março, n° 241, Centro, Joinville/SC - CEP: 89201-903",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "garuva/sc": {
        "subsecao": "Joinville/SC",
        "endereco_inss": "Rua Nove de Março, n° 241, Centro, Joinville/SC - CEP: 89201-903",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "itapoá/sc": {
        "subsecao": "Joinville/SC",
        "endereco_inss": "Rua Nove de Março, n° 241, Centro, Joinville/SC - CEP: 89201-903",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são francisco do sul/sc": {
        "subsecao": "Joinville/SC",
        "endereco_inss": "Rua Nove de Março, n° 241, Centro, Joinville/SC - CEP: 89201-903",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são joão do itaperiú/sc": {
        "subsecao": "Joinville/SC",
        "endereco_inss": "Rua Nove de Março, n° 241, Centro, Joinville/SC - CEP: 89201-903",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "lages/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "anita garibaldi/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "bocaina do sul/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "bom jardim da serra/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "bom retiro/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "campo belo do sul/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "capão alto/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "cerro negro/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "correia pinto/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "otacílio costa/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "painel/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "palmeira/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "ponte alta/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "rio rufino/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são joaquim/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são josé do cerrito/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "urubici/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "urupema/sc": {
        "subsecao": "Lages/SC",
        "endereco_inss": "Rua Governador Jorge Lacerda, n° 126, Centro, Lages/SC - CEP: 88501-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "laguna/sc": {
        "subsecao": "Laguna/SC",
        "endereco_inss": "Rua Raulino Horn, n° 140, Centro, Laguna/SC - CEP: 88790-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "garopaba/sc": {
        "subsecao": "Laguna/SC",
        "endereco_inss": "Rua Raulino Horn, n° 140, Centro, Laguna/SC - CEP: 88790-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "imaruí/sc": {
        "subsecao": "Laguna/SC",
        "endereco_inss": "Rua Raulino Horn, n° 140, Centro, Laguna/SC - CEP: 88790-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "imbituba/sc": {
        "subsecao": "Laguna/SC",
        "endereco_inss": "Rua Raulino Horn, n° 140, Centro, Laguna/SC - CEP: 88790-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "pescaria brava/sc": {
        "subsecao": "Laguna/SC",
        "endereco_inss": "Rua Raulino Horn, n° 140, Centro, Laguna/SC - CEP: 88790-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "mafra/sc": {
        "subsecao": "Mafra/SC",
        "endereco_inss": "Rua Doutor Mathias Piechnick, n° 37, Centro, Mafra/SC - CEP: 89300-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "bela vista do toldo/sc": {
        "subsecao": "Mafra/SC",
        "endereco_inss": "Rua Doutor Mathias Piechnick, n° 37, Centro, Mafra/SC - CEP: 89300-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "canoinhas/sc": {
        "subsecao": "Mafra/SC",
        "endereco_inss": "Rua Doutor Mathias Piechnick, n° 37, Centro, Mafra/SC - CEP: 89300-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "itaiópolis/sc": {
        "subsecao": "Mafra/SC",
        "endereco_inss": "Rua Doutor Mathias Piechnick, n° 37, Centro, Mafra/SC - CEP: 89300-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "major vieira/sc": {
        "subsecao": "Mafra/SC",
        "endereco_inss": "Rua Doutor Mathias Piechnick, n° 37, Centro, Mafra/SC - CEP: 89300-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "monte castelo/sc": {
        "subsecao": "Mafra/SC",
        "endereco_inss": "Rua Doutor Mathias Piechnick, n° 37, Centro, Mafra/SC - CEP: 89300-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "papanduva/sc": {
        "subsecao": "Mafra/SC",
        "endereco_inss": "Rua Doutor Mathias Piechnick, n° 37, Centro, Mafra/SC - CEP: 89300-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "rio negrinho/sc": {
        "subsecao": "Mafra/SC",
        "endereco_inss": "Rua Doutor Mathias Piechnick, n° 37, Centro, Mafra/SC - CEP: 89300-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são bento do sul/sc": {
        "subsecao": "Mafra/SC",
        "endereco_inss": "Rua Doutor Mathias Piechnick, n° 37, Centro, Mafra/SC - CEP: 89300-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "três barras/sc": {
        "subsecao": "Mafra/SC",
        "endereco_inss": "Rua Doutor Mathias Piechnick, n° 37, Centro, Mafra/SC - CEP: 89300-000",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "rio do sul/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "agrolândia/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "agronômica/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "atalanta/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "aurora/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "braço do trombudo/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "chapadão do lageado/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "dona emma/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "ibirama/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "imbuia/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "ituporanga/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "josé boiteux/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "laurentino/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "leoberto leal/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "lontras/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "mirim doce/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "petrolândia/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "pouso redondo/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "presidente getúlio/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "presidente nereu/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "rio do campo/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "rio do oeste/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "salete/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "santa terezinha/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "taió/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "trombudo central/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "vidal ramos/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "vitor meireles/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "witmarsum/sc": {
        "subsecao": "Rio do Sul/SC",
        "endereco_inss": "Rua Sete de Setembro, n° 352, Jardim América, Rio do Sul/SC - CEP: 89160-924",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são miguel do oeste/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "anchieta/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "bandeirante/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "barra bonita/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "belmonte/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "bom jesus do oeste/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "caibi/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "campo erê/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "cunha porã/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "cunhataí/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "descanso/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "dionísio cerqueira/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "flor do sertão/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "guaraciaba/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "guarujá do sul/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "iporã do oeste/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "iraceminha/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "itapiranga/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "maravilha/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "mondaí/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "palma sola/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "paraíso/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "princesa/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "riqueza/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "romelândia/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "saltinho/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "santa helena/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "santa terezinha do progresso/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são bernardino/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são joão do oeste/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são josé do cedro/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são miguel da boa vista/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "tigrinhos/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "tunápolis/sc": {
        "subsecao": "São Miguel do Oeste/SC",
        "endereco_inss": "Rua XV de Novembro, n° 1460, Centro, São Miguel do Oeste/SC - CEP: 89900-970",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "tubarão/sc": {
        "subsecao": "Tubarão/SC",
        "endereco_inss": "Rua São Manoel, n° 40, Centro, Tubarão/SC - CEP: 88701-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "armazém/sc": {
        "subsecao": "Tubarão/SC",
        "endereco_inss": "Rua São Manoel, n° 40, Centro, Tubarão/SC - CEP: 88701-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "braço do norte/sc": {
        "subsecao": "Tubarão/SC",
        "endereco_inss": "Rua São Manoel, n° 40, Centro, Tubarão/SC - CEP: 88701-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "capivari de baixo/sc": {
        "subsecao": "Tubarão/SC",
        "endereco_inss": "Rua São Manoel, n° 40, Centro, Tubarão/SC - CEP: 88701-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "grão pará/sc": {
        "subsecao": "Tubarão/SC",
        "endereco_inss": "Rua São Manoel, n° 40, Centro, Tubarão/SC - CEP: 88701-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "gravatal/sc": {
        "subsecao": "Tubarão/SC",
        "endereco_inss": "Rua São Manoel, n° 40, Centro, Tubarão/SC - CEP: 88701-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "jaguaruna/sc": {
        "subsecao": "Tubarão/SC",
        "endereco_inss": "Rua São Manoel, n° 40, Centro, Tubarão/SC - CEP: 88701-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "pedras grandes/sc": {
        "subsecao": "Tubarão/SC",
        "endereco_inss": "Rua São Manoel, n° 40, Centro, Tubarão/SC - CEP: 88701-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "rio fortuna/sc": {
        "subsecao": "Tubarão/SC",
        "endereco_inss": "Rua São Manoel, n° 40, Centro, Tubarão/SC - CEP: 88701-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "sangão/sc": {
        "subsecao": "Tubarão/SC",
        "endereco_inss": "Rua São Manoel, n° 40, Centro, Tubarão/SC - CEP: 88701-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "santa rosa de lima/sc": {
        "subsecao": "Tubarão/SC",
        "endereco_inss": "Rua São Manoel, n° 40, Centro, Tubarão/SC - CEP: 88701-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são ludgero/sc": {
        "subsecao": "Tubarão/SC",
        "endereco_inss": "Rua São Manoel, n° 40, Centro, Tubarão/SC - CEP: 88701-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "são martinho/sc": {
        "subsecao": "Tubarão/SC",
        "endereco_inss": "Rua São Manoel, n° 40, Centro, Tubarão/SC - CEP: 88701-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "treze de maio/sc": {
        "subsecao": "Tubarão/SC",
        "endereco_inss": "Rua São Manoel, n° 40, Centro, Tubarão/SC - CEP: 88701-120",
        "oab_advogado": "80082-A",
        "uf_oab": "SC"
    },
    "fortaleza/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "acarape/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "aquiraz/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "aracoiaba/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "aratuba/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "barreira/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "baturité/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "capistrano/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "cascavel/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "caucaia/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "chorozinho/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "eusébio/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "guaiúba/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "guaramiranga/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "horizonte/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "itaitinga/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "mulungu/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "ocara/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "pacajus/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "pacoti/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "palmácia/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "paracuru/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "pindoretama/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "redenção/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "são gonçalo do amarante/ce": {
        "subsecao": "Fortaleza/CE",
        "endereco_inss": "Rua Pedro Pereira, n° 383, Centro, Fortaleza/CE - CEP: 60035-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "crateús/ce": {
        "subsecao": "Crateús/CE",
        "endereco_inss": "Rua Antônio Flávio Lima, n° 50, Centro, Crateús/CE - CEP: 63700-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "ararendá/ce": {
        "subsecao": "Crateús/CE",
        "endereco_inss": "Rua Antônio Flávio Lima, n° 50, Centro, Crateús/CE - CEP: 63700-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "catunda/ce": {
        "subsecao": "Crateús/CE",
        "endereco_inss": "Rua Antônio Flávio Lima, n° 50, Centro, Crateús/CE - CEP: 63700-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "independência/ce": {
        "subsecao": "Crateús/CE",
        "endereco_inss": "Rua Antônio Flávio Lima, n° 50, Centro, Crateús/CE - CEP: 63700-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "ipaporanga/ce": {
        "subsecao": "Crateús/CE",
        "endereco_inss": "Rua Antônio Flávio Lima, n° 50, Centro, Crateús/CE - CEP: 63700-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "ipueiras/ce": {
        "subsecao": "Crateús/CE",
        "endereco_inss": "Rua Antônio Flávio Lima, n° 50, Centro, Crateús/CE - CEP: 63700-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "monsenhor tabosa/ce": {
        "subsecao": "Crateús/CE",
        "endereco_inss": "Rua Antônio Flávio Lima, n° 50, Centro, Crateús/CE - CEP: 63700-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "nova russas/ce": {
        "subsecao": "Crateús/CE",
        "endereco_inss": "Rua Antônio Flávio Lima, n° 50, Centro, Crateús/CE - CEP: 63700-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "novo oriente/ce": {
        "subsecao": "Crateús/CE",
        "endereco_inss": "Rua Antônio Flávio Lima, n° 50, Centro, Crateús/CE - CEP: 63700-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "poranga/ce": {
        "subsecao": "Crateús/CE",
        "endereco_inss": "Rua Antônio Flávio Lima, n° 50, Centro, Crateús/CE - CEP: 63700-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "tamboril/ce": {
        "subsecao": "Crateús/CE",
        "endereco_inss": "Rua Antônio Flávio Lima, n° 50, Centro, Crateús/CE - CEP: 63700-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "iguatu/ce": {
        "subsecao": "Iguatu/CE",
        "endereco_inss": "Rua Vinte e Um de Abril, n° 45, Vila Cidão, Iguatu/CE - CEP: 63500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "acopiara/ce": {
        "subsecao": "Iguatu/CE",
        "endereco_inss": "Rua Vinte e Um de Abril, n° 45, Vila Cidão, Iguatu/CE - CEP: 63500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "cariús/ce": {
        "subsecao": "Iguatu/CE",
        "endereco_inss": "Rua Vinte e Um de Abril, n° 45, Vila Cidão, Iguatu/CE - CEP: 63500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "cedro/ce": {
        "subsecao": "Iguatu/CE",
        "endereco_inss": "Rua Vinte e Um de Abril, n° 45, Vila Cidão, Iguatu/CE - CEP: 63500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "deputado irapuan pinheiro/ce": {
        "subsecao": "Iguatu/CE",
        "endereco_inss": "Rua Vinte e Um de Abril, n° 45, Vila Cidão, Iguatu/CE - CEP: 63500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "icó/ce": {
        "subsecao": "Iguatu/CE",
        "endereco_inss": "Rua Vinte e Um de Abril, n° 45, Vila Cidão, Iguatu/CE - CEP: 63500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "jucás/ce": {
        "subsecao": "Iguatu/CE",
        "endereco_inss": "Rua Vinte e Um de Abril, n° 45, Vila Cidão, Iguatu/CE - CEP: 63500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "milhã/ce": {
        "subsecao": "Iguatu/CE",
        "endereco_inss": "Rua Vinte e Um de Abril, n° 45, Vila Cidão, Iguatu/CE - CEP: 63500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "orós/ce": {
        "subsecao": "Iguatu/CE",
        "endereco_inss": "Rua Vinte e Um de Abril, n° 45, Vila Cidão, Iguatu/CE - CEP: 63500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "piquet carneiro/ce": {
        "subsecao": "Iguatu/CE",
        "endereco_inss": "Rua Vinte e Um de Abril, n° 45, Vila Cidão, Iguatu/CE - CEP: 63500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "quixelô/ce": {
        "subsecao": "Iguatu/CE",
        "endereco_inss": "Rua Vinte e Um de Abril, n° 45, Vila Cidão, Iguatu/CE - CEP: 63500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "saboeiro/ce": {
        "subsecao": "Iguatu/CE",
        "endereco_inss": "Rua Vinte e Um de Abril, n° 45, Vila Cidão, Iguatu/CE - CEP: 63500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "solonópole/ce": {
        "subsecao": "Iguatu/CE",
        "endereco_inss": "Rua Vinte e Um de Abril, n° 45, Vila Cidão, Iguatu/CE - CEP: 63500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "tarrafas/ce": {
        "subsecao": "Iguatu/CE",
        "endereco_inss": "Rua Vinte e Um de Abril, n° 45, Vila Cidão, Iguatu/CE - CEP: 63500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "itapipoca/ce": {
        "subsecao": "Itapipoca/CE",
        "endereco_inss": "Rua Presidente Roosevelt, n° 25, Boa Vista, Itapipoca/CE - CEP: 62500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "acaraú/ce": {
        "subsecao": "Itapipoca/CE",
        "endereco_inss": "Rua Presidente Roosevelt, n° 25, Boa Vista, Itapipoca/CE - CEP: 62500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "amontada/ce": {
        "subsecao": "Itapipoca/CE",
        "endereco_inss": "Rua Presidente Roosevelt, n° 25, Boa Vista, Itapipoca/CE - CEP: 62500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "itapajé/ce": {
        "subsecao": "Itapipoca/CE",
        "endereco_inss": "Rua Presidente Roosevelt, n° 25, Boa Vista, Itapipoca/CE - CEP: 62500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "itarema/ce": {
        "subsecao": "Itapipoca/CE",
        "endereco_inss": "Rua Presidente Roosevelt, n° 25, Boa Vista, Itapipoca/CE - CEP: 62500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "miraíma/ce": {
        "subsecao": "Itapipoca/CE",
        "endereco_inss": "Rua Presidente Roosevelt, n° 25, Boa Vista, Itapipoca/CE - CEP: 62500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "paraipaba/ce": {
        "subsecao": "Itapipoca/CE",
        "endereco_inss": "Rua Presidente Roosevelt, n° 25, Boa Vista, Itapipoca/CE - CEP: 62500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "são Luís do curu/ce": {
        "subsecao": "Itapipoca/CE",
        "endereco_inss": "Rua Presidente Roosevelt, n° 25, Boa Vista, Itapipoca/CE - CEP: 62500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "tejuçuoca/ce": {
        "subsecao": "Itapipoca/CE",
        "endereco_inss": "Rua Presidente Roosevelt, n° 25, Boa Vista, Itapipoca/CE - CEP: 62500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "trairi/ce": {
        "subsecao": "Itapipoca/CE",
        "endereco_inss": "Rua Presidente Roosevelt, n° 25, Boa Vista, Itapipoca/CE - CEP: 62500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "tururu/ce": {
        "subsecao": "Itapipoca/CE",
        "endereco_inss": "Rua Presidente Roosevelt, n° 25, Boa Vista, Itapipoca/CE - CEP: 62500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "umirim/ce": {
        "subsecao": "Itapipoca/CE",
        "endereco_inss": "Rua Presidente Roosevelt, n° 25, Boa Vista, Itapipoca/CE - CEP: 62500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "uruburetama/ce": {
        "subsecao": "Itapipoca/CE",
        "endereco_inss": "Rua Presidente Roosevelt, n° 25, Boa Vista, Itapipoca/CE - CEP: 62500-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "juazeiro do norte/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "abaiara/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "altaneira/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "antonina do norte/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "araripe/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "assaré/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "aurora/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "baixio/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "barbalha/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "barro/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "brejo santo/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "campos sales/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "caririaçu/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "crato/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "farias brito/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "granjeiro/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "ipaumirim/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "jardim/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "jati/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "lavras da mangabeira/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "mauriti/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "milagres/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "missão velha/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "nova olinda/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "penaforte/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "porteiras/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "potengi/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "salitre/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "santana do cariri/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "umari/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "várzea alegre/ce": {
        "subsecao": "Juazeiro do Norte/CE",
        "endereco_inss": "Rua Santa Luzia, n° 287, Centro, Juazeiro do Norte/CE - CEP: 63010-227",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "limoeiro do norte/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "alto santo/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "aracati/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "beberibe/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "ererê/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "fortim/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "icapuí/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "iracema/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "itaiçaba/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "jaguaretama/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "jaguaribara/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "jaguaribe/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "jaguaruana/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "morada nova/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "palhano/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "pereiro/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "potiretama/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "quixeré/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "russas/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "são joão do jaguaribe/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "tabuleiro do norte/ce": {
        "subsecao": "Limoeiro do Norte/CE",
        "endereco_inss": "Rua Coronel Antônio Joaquim, n° 1182, Centro, Limoeiro do Norte/CE - CEP: 62930-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "maracanaú/ce": {
        "subsecao": "Maracanaú/CE",
        "endereco_inss": "Avenida 4 de Julho, n° s/n, Centro, Maracanaú/CE - CEP: 61900-350",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "apuiarés/ce": {
        "subsecao": "Maracanaú/CE",
        "endereco_inss": "Avenida 4 de Julho, n° s/n, Centro, Maracanaú/CE - CEP: 61900-350",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "caridade/ce": {
        "subsecao": "Maracanaú/CE",
        "endereco_inss": "Avenida 4 de Julho, n° s/n, Centro, Maracanaú/CE - CEP: 61900-350",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "general sampaio/ce": {
        "subsecao": "Maracanaú/CE",
        "endereco_inss": "Avenida 4 de Julho, n° s/n, Centro, Maracanaú/CE - CEP: 61900-350",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "maranguape/ce": {
        "subsecao": "Maracanaú/CE",
        "endereco_inss": "Avenida 4 de Julho, n° s/n, Centro, Maracanaú/CE - CEP: 61900-350",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "pacatuba/ce": {
        "subsecao": "Maracanaú/CE",
        "endereco_inss": "Avenida 4 de Julho, n° s/n, Centro, Maracanaú/CE - CEP: 61900-350",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "paramoti/ce": {
        "subsecao": "Maracanaú/CE",
        "endereco_inss": "Avenida 4 de Julho, n° s/n, Centro, Maracanaú/CE - CEP: 61900-350",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "pentecoste/ce": {
        "subsecao": "Maracanaú/CE",
        "endereco_inss": "Avenida 4 de Julho, n° s/n, Centro, Maracanaú/CE - CEP: 61900-350",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "quixadá/ce": {
        "subsecao": "Quixadá/CE",
        "endereco_inss": "Rua Florêncio Lopes, n° 171, Combate, Quixadá/CE - CEP: 63900-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "banabuiú/ce": {
        "subsecao": "Quixadá/CE",
        "endereco_inss": "Rua Florêncio Lopes, n° 171, Combate, Quixadá/CE - CEP: 63900-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "boa viagem/ce": {
        "subsecao": "Quixadá/CE",
        "endereco_inss": "Rua Florêncio Lopes, n° 171, Combate, Quixadá/CE - CEP: 63900-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "canindé/ce": {
        "subsecao": "Quixadá/CE",
        "endereco_inss": "Rua Florêncio Lopes, n° 171, Combate, Quixadá/CE - CEP: 63900-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "choró/ce": {
        "subsecao": "Quixadá/CE",
        "endereco_inss": "Rua Florêncio Lopes, n° 171, Combate, Quixadá/CE - CEP: 63900-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "ibaretama/ce": {
        "subsecao": "Quixadá/CE",
        "endereco_inss": "Rua Florêncio Lopes, n° 171, Combate, Quixadá/CE - CEP: 63900-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "ibicuitinga/ce": {
        "subsecao": "Quixadá/CE",
        "endereco_inss": "Rua Florêncio Lopes, n° 171, Combate, Quixadá/CE - CEP: 63900-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "itapiúna/ce": {
        "subsecao": "Quixadá/CE",
        "endereco_inss": "Rua Florêncio Lopes, n° 171, Combate, Quixadá/CE - CEP: 63900-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "itatira/ce": {
        "subsecao": "Quixadá/CE",
        "endereco_inss": "Rua Florêncio Lopes, n° 171, Combate, Quixadá/CE - CEP: 63900-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "madalena/ce": {
        "subsecao": "Quixadá/CE",
        "endereco_inss": "Rua Florêncio Lopes, n° 171, Combate, Quixadá/CE - CEP: 63900-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "quixeramobim/ce": {
        "subsecao": "Quixadá/CE",
        "endereco_inss": "Rua Florêncio Lopes, n° 171, Combate, Quixadá/CE - CEP: 63900-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "sobral/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "alcântaras/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "barroquinha/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "bela cruz/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "camocim/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "cariré/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "carnaubal/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "chaval/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "coreaú/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "croatá/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "cruz/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "forquilha/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "frecheirinha/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "graça/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "granja/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "groaíras/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "guaraciaba do norte/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "hidrolândia/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "ibiapina/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "ipu/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "irauçuba/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "jijoca de jericoacoara/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "marco/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "martinópole/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "massapê/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "meruoca/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "moraújo/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "morrinhos/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "mucambo/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "pacujá/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "pires ferreira/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "reriutaba/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "santana do acaraú/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "santa quitéria/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "são benedito/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "senador sá/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "tianguá/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "ubajara/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "uruoca/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "varjota/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "viçosa do ceará/ce": {
        "subsecao": "Sobral/CE",
        "endereco_inss": "Avenida Lúcia Sabóia, n° 131, Centro, Sobral/CE - CEP: 62010-830",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "tauá/ce": {
        "subsecao": "Tauá/CE",
        "endereco_inss": "Rua Jornalista Hélder Feitosa, n° 331, Planalto dos Calibris, Tauá/CE - CEP: 63660-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "aiuaba/ce": {
        "subsecao": "Tauá/CE",
        "endereco_inss": "Rua Jornalista Hélder Feitosa, n° 331, Planalto dos Calibris, Tauá/CE - CEP: 63660-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "arneiroz/ce": {
        "subsecao": "Tauá/CE",
        "endereco_inss": "Rua Jornalista Hélder Feitosa, n° 331, Planalto dos Calibris, Tauá/CE - CEP: 63660-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "catarina/ce": {
        "subsecao": "Tauá/CE",
        "endereco_inss": "Rua Jornalista Hélder Feitosa, n° 331, Planalto dos Calibris, Tauá/CE - CEP: 63660-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "mombaça/ce": {
        "subsecao": "Tauá/CE",
        "endereco_inss": "Rua Jornalista Hélder Feitosa, n° 331, Planalto dos Calibris, Tauá/CE - CEP: 63660-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "parambu/ce": {
        "subsecao": "Tauá/CE",
        "endereco_inss": "Rua Jornalista Hélder Feitosa, n° 331, Planalto dos Calibris, Tauá/CE - CEP: 63660-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "pedra branca/ce": {
        "subsecao": "Tauá/CE",
        "endereco_inss": "Rua Jornalista Hélder Feitosa, n° 331, Planalto dos Calibris, Tauá/CE - CEP: 63660-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "quiterianópolis/ce": {
        "subsecao": "Tauá/CE",
        "endereco_inss": "Rua Jornalista Hélder Feitosa, n° 331, Planalto dos Calibris, Tauá/CE - CEP: 63660-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "senador pompeu/ce": {
        "subsecao": "Tauá/CE",
        "endereco_inss": "Rua Jornalista Hélder Feitosa, n° 331, Planalto dos Calibris, Tauá/CE - CEP: 63660-000",
        "oab_advogado": "32185",
        "uf_oab": "CE"
    },
    "maceió/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "anadia/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "atalaia/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "barra de santo antônio/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "barra de são miguel/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "boca da mata/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "campo alegre/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "capela/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "coqueiro seco/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "coruripe/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "feliz deserto/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "igreja nova/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "japaratinga/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "jequiá da praia/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "junqueiro/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "maragogi/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "marechal deodoro/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "maribondo/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "mar vermelho/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "matriz de camaragibe/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "paripueira/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "passo de camaragibe/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "paulo jacinto/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "penedo/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "piaçabuçu/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "pilar/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "pindoba/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "porto calvo/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "porto de pedras/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "quebrangulo/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "rio largo/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "roteiro/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "santa luzia do norte/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "são luís do quitunde/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "são miguel dos campos/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "são miguel dos milagres/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "satuba/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "teotônio vilela/al": {
        "subsecao": "Maceió/AL",
        "endereco_inss": "Avenida Almirante Álvaro Calheiros, n° 1187, Jatiúca, Maceió/AL - CEP: 57035-558",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "arapiraca/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "batalha/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "belém/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "belo monte/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "cacimbinhas/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "campo grande/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "coité do nóia/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "craíbas/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "estrela de alagoas/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "feira grande/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "girau do ponciano/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "igaci/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "jaramataia/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "lagoa da canoa/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "limoeiro de anadia/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "major isidoro/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "minador do negrão/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "olho d'água grande/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "palmeira dos índios/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "porto real do colégio/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "são brás/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "são sebastião/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "tanque d'arca/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "taquarana/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "traipu/al": {
        "subsecao": "Arapiraca/AL",
        "endereco_inss": "Rua José Leite Bezerra, n° 178, Santa Edwiges, Arapiraca/AL - CEP: 57310-400",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "santana do ipanema/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "água branca/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "canapi/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "carneiros/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "delmiro gouveia/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "dois riachos/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "inhapi/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "jacaré dos homens/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "maravilha/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "mata grande/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "monteirópolis/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "olho d'água das flores/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "olho d'água do casado/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "olivença/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "ouro branco/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "palestina/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "pão de açúcar/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "pariconha/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "piranhas/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "poço das trincheiras/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "são josé da tapera/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "senador rui palmeira/al": {
        "subsecao": "Santana do Ipanema/AL",
        "endereco_inss": "Rua Benício Gomes de Barros, n° 51, Centro, Santana do Ipanema/AL - CEP: 57500-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "união dos palmares/al": {
        "subsecao": "União dos Palmares/AL",
        "endereco_inss": "Rua Coronel José Bezerra, n° s/n, Centro, União dos Palmares/AL - CEP: 57800-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "branquinha/al": {
        "subsecao": "União dos Palmares/AL",
        "endereco_inss": "Rua Coronel José Bezerra, n° s/n, Centro, União dos Palmares/AL - CEP: 57800-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "cajueiro/al": {
        "subsecao": "União dos Palmares/AL",
        "endereco_inss": "Rua Coronel José Bezerra, n° s/n, Centro, União dos Palmares/AL - CEP: 57800-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "campestre/al": {
        "subsecao": "União dos Palmares/AL",
        "endereco_inss": "Rua Coronel José Bezerra, n° s/n, Centro, União dos Palmares/AL - CEP: 57800-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "chã preta/al": {
        "subsecao": "União dos Palmares/AL",
        "endereco_inss": "Rua Coronel José Bezerra, n° s/n, Centro, União dos Palmares/AL - CEP: 57800-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "colônia leopoldina/al": {
        "subsecao": "União dos Palmares/AL",
        "endereco_inss": "Rua Coronel José Bezerra, n° s/n, Centro, União dos Palmares/AL - CEP: 57800-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "flexeiras/al": {
        "subsecao": "União dos Palmares/AL",
        "endereco_inss": "Rua Coronel José Bezerra, n° s/n, Centro, União dos Palmares/AL - CEP: 57800-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "ibateguara/al": {
        "subsecao": "União dos Palmares/AL",
        "endereco_inss": "Rua Coronel José Bezerra, n° s/n, Centro, União dos Palmares/AL - CEP: 57800-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "jacuípe/al": {
        "subsecao": "União dos Palmares/AL",
        "endereco_inss": "Rua Coronel José Bezerra, n° s/n, Centro, União dos Palmares/AL - CEP: 57800-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "joaquim gomes/al": {
        "subsecao": "União dos Palmares/AL",
        "endereco_inss": "Rua Coronel José Bezerra, n° s/n, Centro, União dos Palmares/AL - CEP: 57800-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "jundiá/al": {
        "subsecao": "União dos Palmares/AL",
        "endereco_inss": "Rua Coronel José Bezerra, n° s/n, Centro, União dos Palmares/AL - CEP: 57800-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "messias/al": {
        "subsecao": "União dos Palmares/AL",
        "endereco_inss": "Rua Coronel José Bezerra, n° s/n, Centro, União dos Palmares/AL - CEP: 57800-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "murici/al": {
        "subsecao": "União dos Palmares/AL",
        "endereco_inss": "Rua Coronel José Bezerra, n° s/n, Centro, União dos Palmares/AL - CEP: 57800-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "novo lino/al": {
        "subsecao": "União dos Palmares/AL",
        "endereco_inss": "Rua Coronel José Bezerra, n° s/n, Centro, União dos Palmares/AL - CEP: 57800-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "santana do mundaú/al": {
        "subsecao": "União dos Palmares/AL",
        "endereco_inss": "Rua Coronel José Bezerra, n° s/n, Centro, União dos Palmares/AL - CEP: 57800-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "são josé da laje/al": {
        "subsecao": "União dos Palmares/AL",
        "endereco_inss": "Rua Coronel José Bezerra, n° s/n, Centro, União dos Palmares/AL - CEP: 57800-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "viçosa/al": {
        "subsecao": "União dos Palmares/AL",
        "endereco_inss": "Rua Coronel José Bezerra, n° s/n, Centro, União dos Palmares/AL - CEP: 57800-000",
        "oab_advogado": "24231-A",
        "uf_oab": "AL"
    },
    "belo horizonte/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "araújos/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "barão de cocais/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "belo vale/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "betim/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bom jesus do amparo/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bonfim/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "brumadinho/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cabo verde/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "caeté/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "capela nova/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "capim branco/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "caranaíba/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "carandaí/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "casa grande/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "catas altas/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "catas altas da noruega/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "conceição do mato dentro/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "confins/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "congonhas/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "congonhas do norte/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "conselheiro lafaiete/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "contagem/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cristiano otoni/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "crucilândia/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "divisa nova/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "dom joaquim/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "esmeraldas/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "florestal/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ibirité/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "igarapé/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "igaratinga/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itabira/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itabirito/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itambé do mato dentro/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itaverava/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "jaboticatubas/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "juatuba/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "lagoa santa/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "lamim/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "mário campos/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "mateus leme/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "matozinhos/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "moeda/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "morro do pilar/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "nova lima/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "nova união/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "onça de pitangui/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ouro branco/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pará de minas/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pedro leopoldo/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pequi/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "piedade dos gerais/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "prudente de morais/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "queluzito/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "raposos/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ribeirão das neves/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rio acima/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rio espera/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rio manso/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "sabará/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa bárbara/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa luzia/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa maria de itabira/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santana do riacho/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santana dos montes/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são gonçalo do pará/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são gonçalo do rio abaixo/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são joaquim de bicas/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são josé da lapa/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são josé da varginha/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "sarzedo/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "taquaraçu de minas/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "vespasiano/mg": {
        "subsecao": "Belo Horizonte/MG",
        "endereco_inss": "Rua Espírito Santo, n° 54, Centro, Belo Horizonte/MG - CEP: 30160-030",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "divinópolis/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "abaeté/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "arcos/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bambuí/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bom despacho/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "camacho/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "carmo da mata/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "carmo do cajuru/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "carmópolis de minas/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cedro do abaeté/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cláudio/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "conceição do pará/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "córrego danta/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "córrego fundo/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "dores do indaiá/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "estrela do indaiá/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "formiga/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "iguatama/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itaguara/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itapecerica/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itatiaiuçu/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itaúna/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "japaraíba/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "lagoa da prata/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "leandro ferreira/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "luz/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "maravilhas/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "martinho campos/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "medeiros/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "moema/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "nova serrana/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "oliveira/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "paineiras/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pains/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "papagaios/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "passa tempo/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pedra do indaiá/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "perdigão/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pimenta/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "piracema/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pitangui/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pompéu/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "quartel geral/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santo antônio do monte/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são francisco de paula/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são sebastião do oeste/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "serra da saudade/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "tapiraí/mg": {
        "subsecao": "Divinópolis/MG",
        "endereco_inss": "Avenida Getúlio Vargas, n° 342, Centro, Divinópolis/MG - CEP: 35500-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "governador valadares/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "aimorés/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "alpercata/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "alvarenga/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cantagalo/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "capitão andrade/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "central de minas/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "coluna/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "conselheiro pena/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "coroaci/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cuparaque/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "divino das laranjeiras/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "divinolândia de minas/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "engenheiro caldas/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "fernandes tourinho/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "frei inocêncio/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "frei lagonegro/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "galiléia/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "goiabeira/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "gonzaga/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itabirinha/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itanhomi/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itueta/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "josé raydan/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "mantena/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "marilac/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "mathias lobato/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "mendes pimentel/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "nacip raydan/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "nova belém/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "paulistas/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "peçanha/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "periquito/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "resplendor/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rio vermelho/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa efigênia de minas/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa maria do suaçuí/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa rita do itueto/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são félix de minas/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são geraldo da piedade/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são geraldo do baixio/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são joão do manteninha/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são joão evangelista/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são josé da safira/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são josé do jacuri/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são pedro do suaçuí/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são sebastião do maranhão/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "sardoá/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "sobrália/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "tarumirim/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "tumiritinga/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "virginópolis/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "virgolândia/mg": {
        "subsecao": "Governador Valadares/MG",
        "endereco_inss": "Rua Afonso Pena, n° 3016, Centro, Governador Valadares/MG - CEP: 35010-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ipatinga/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "açucena/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "antônio dias/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bela vista de minas/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "belo oriente/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "braúnas/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bugre/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "carmésia/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "coronel fabriciano/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "dionísio/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "dom cavati/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "dores de guanhães/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ferros/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "guanhães/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "iapu/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "inhapim/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ipaba/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "jaguaraçu/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "joanésia/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "joão monlevade/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "marliéria/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "materlândia/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "mesquita/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "naque/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "nova era/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "passabém/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rio piracicaba/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "sabinópolis/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santana do paraíso/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santo antônio do rio abaixo/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são domingos das dores/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são domingos do prata/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são joão do oriente/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são josé do goiabal/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são sebastião do anta/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são sebastião do rio preto/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "senhora do porto/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "timóteo/mg": {
        "subsecao": "Ipatinga/MG",
        "endereco_inss": "Rua Poços de Caldas, n° 15, Centro, Ipatinga/MG - CEP: 35160-033",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ituiutaba/mg": {
        "subsecao": "Ituiutaba/MG",
        "endereco_inss": "Avenida 11, n° 50, Centro, Ituiutaba/MG - CEP: 38300-102",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cachoeira dourada/mg": {
        "subsecao": "Ituiutaba/MG",
        "endereco_inss": "Avenida 11, n° 50, Centro, Ituiutaba/MG - CEP: 38300-102",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "campina verde/mg": {
        "subsecao": "Ituiutaba/MG",
        "endereco_inss": "Avenida 11, n° 50, Centro, Ituiutaba/MG - CEP: 38300-102",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "canápolis/mg": {
        "subsecao": "Ituiutaba/MG",
        "endereco_inss": "Avenida 11, n° 50, Centro, Ituiutaba/MG - CEP: 38300-102",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "capinópolis/mg": {
        "subsecao": "Ituiutaba/MG",
        "endereco_inss": "Avenida 11, n° 50, Centro, Ituiutaba/MG - CEP: 38300-102",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "carneirinho/mg": {
        "subsecao": "Ituiutaba/MG",
        "endereco_inss": "Avenida 11, n° 50, Centro, Ituiutaba/MG - CEP: 38300-102",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "centralina/mg": {
        "subsecao": "Ituiutaba/MG",
        "endereco_inss": "Avenida 11, n° 50, Centro, Ituiutaba/MG - CEP: 38300-102",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "gurinhatã/mg": {
        "subsecao": "Ituiutaba/MG",
        "endereco_inss": "Avenida 11, n° 50, Centro, Ituiutaba/MG - CEP: 38300-102",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ipiaçu/mg": {
        "subsecao": "Ituiutaba/MG",
        "endereco_inss": "Avenida 11, n° 50, Centro, Ituiutaba/MG - CEP: 38300-102",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "iturama/mg": {
        "subsecao": "Ituiutaba/MG",
        "endereco_inss": "Avenida 11, n° 50, Centro, Ituiutaba/MG - CEP: 38300-102",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "limeira do oeste/mg": {
        "subsecao": "Ituiutaba/MG",
        "endereco_inss": "Avenida 11, n° 50, Centro, Ituiutaba/MG - CEP: 38300-102",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "prata/mg": {
        "subsecao": "Ituiutaba/MG",
        "endereco_inss": "Avenida 11, n° 50, Centro, Ituiutaba/MG - CEP: 38300-102",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa vitória/mg": {
        "subsecao": "Ituiutaba/MG",
        "endereco_inss": "Avenida 11, n° 50, Centro, Ituiutaba/MG - CEP: 38300-102",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "união de minas/mg": {
        "subsecao": "Ituiutaba/MG",
        "endereco_inss": "Avenida 11, n° 50, Centro, Ituiutaba/MG - CEP: 38300-102",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "janaúba/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "berizal/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "catuti/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "curral de dentro/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "espinosa/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "gameleiras/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "indaiabira/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "jaíba/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "juvenília/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "mamonas/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "manga/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "matias cardoso/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "mato verde/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "miravânia/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "montalvânia/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "monte azul/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "montezuma/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ninheira/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "nova porteirinha/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pai pedro/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "porteirinha/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "riacho dos machados/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rio pardo de minas/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santo antônio do retiro/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são joão das missões/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são joão do paraíso/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "serranópolis de minas/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "taiobeiras/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "vargem grande do rio pardo/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "verdelândia/mg": {
        "subsecao": "Janaúba/MG",
        "endereco_inss": "Rua São João da Ponte, n° 206, Centro, Janaúba/MG - CEP: 39440-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "juiz de fora/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "além paraíba/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "aracitaba/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "belmiro braga/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bicas/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "chácara/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "chiador/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "coronel pacheco/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "descoberto/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ewbank da câmara/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "goianá/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "guarani/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "guarará/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "lima duarte/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "mar de espanha/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "maripá de minas/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "matias barbosa/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "mercês/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "olaria/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "oliveira fortes/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "paiva/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pedro teixeira/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pequeri/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "piau/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "piraúba/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rio novo/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rio pomba/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rio preto/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rochedo de minas/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa bárbara do monte verde/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santana do deserto/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa rita de jacutinga/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santo antônio do aventureiro/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santos dumont/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são joão nepomuceno/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "senador cortes/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "silveirânia/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "simão pereira/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "tabuleiro/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "volta grande/mg": {
        "subsecao": "Juiz de Fora/MG",
        "endereco_inss": "Rua Santo Antônio, n° 115, Centro, Juiz de Fora/MG - CEP: 36035-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "lavras/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "aguanil/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "andrelândia/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "arantina/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "boa esperança/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bom jardim de minas/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bom sucesso/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "campo belo/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cana verde/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "candeias/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "carrancas/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "coqueiral/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cristais/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ibituruna/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ijaci/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ilicínea/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ingaí/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itumirim/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itutinga/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "luminárias/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "madre de deus de minas/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "nepomuceno/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "perdões/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ribeirão vermelho/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santana do jacaré/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santo antônio do amparo/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são vicente de minas/mg": {
        "subsecao": "Lavras/MG",
        "endereco_inss": "Rua Doutor Francisco Sales, n° 507, Santa Teresinha, Lavras/MG - CEP: 37200-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "manhuaçu/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "abre campo/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "alto caparaó/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "alto jequitibá/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bom jesus do galho/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "caiana/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "caparaó/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "caputira/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "carangola/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "caratinga/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "chalé/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "conceição de ipanema/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "córrego novo/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "divino/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "durandé/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "entre folhas/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "espera feliz/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "faria lemos/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "fervedouro/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "imbé de minas/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ipanema/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "lajinha/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "luisburgo/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "manhumirim/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "martins soares/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "matipó/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "mutum/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "orizânia/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pedra bonita/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "piedade de caratinga/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pingo-d'água/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pocrane/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "reduto/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa bárbara do leste/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa margarida/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santana do manhuaçu/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa rita de minas/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são joão do manhuaçu/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são josé do mantimento/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "sericita/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "simonésia/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "taparuba/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ubaporanga/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "vargem alegre/mg": {
        "subsecao": "Manhuaçu/MG",
        "endereco_inss": "Avenida Doutor Jorge Hannas, n° s/n, Bom Jardim, Manhuaçu/MG - CEP: 36906-360",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "montes claros/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "aricanduva/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "augusto de lima/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "berilo/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bocaiúva/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bonito de minas/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "botumirim/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "brasília de minas/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "buenópolis/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "buritizeiro/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "campo azul/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "capitão enéas/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "carbonita/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "chapada do norte/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "claro dos poções/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cônego marinho/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "coração de jesus/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cristália/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "engenheiro navarro/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "francisco badaró/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "francisco dumont/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "francisco sá/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "fruta de leite/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "glaucilândia/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "grão mogol/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "guaraciama/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ibiaí/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ibiracatu/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "icaraí de minas/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itacambira/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itacarambi/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itamarandiba/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "januária/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "japonvar/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "jenipapo de minas/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "jequitaí/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "joaquim felício/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "josé gonçalves de minas/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "josenópolis/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "juramento/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "lagoa dos patos/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "lassance/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "leme do prado/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "lontra/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "luislândia/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "minas novas/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "mirabela/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "novorizonte/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "olhos d'água/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "padre carvalho/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "patis/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pedras de maria da cruz/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pintópolis/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pirapora/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ponto chique/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rubelita/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "salinas/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa cruz de salinas/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são francisco/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são joão da lagoa/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são joão da ponte/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são joão do pacuí/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "turmalina/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ubaí/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "várzea da palma/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "varzelândia/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "veredinha/mg": {
        "subsecao": "Montes Claros/MG",
        "endereco_inss": "Rua Dom Pedro II, n° 152, Centro, Montes Claros/MG - CEP: 39400-058",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "muriaé/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "antônio prado de minas/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "argirita/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "astolfo dutra/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "barão de monte alto/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cataguases/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "dona eusébia/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "estrela dalva/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "eugenópolis/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itamarati de minas/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "laranjal/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "leopoldina/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "miradouro/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "miraí/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "palma/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "patrocínio do muriaé/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pedra dourada/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pirapetinga/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "recreio/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rosário da limeira/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santana de cataguases/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são francisco do glória/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são sebastião da vargem alegre/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "tombos/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "vieiras/mg": {
        "subsecao": "Muriaé/MG",
        "endereco_inss": "Rua Doutor Antônio Canedo, n° s/n, Centro, Muriaé/MG - CEP: 36880-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "paracatu/mg": {
        "subsecao": "Paracatu/MG",
        "endereco_inss": "Rua Doutor Rubens Bitencourt, n° s/n, Centro, Paracatu/MG - CEP: 38600-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "brasilândia de minas/mg": {
        "subsecao": "Paracatu/MG",
        "endereco_inss": "Rua Doutor Rubens Bitencourt, n° s/n, Centro, Paracatu/MG - CEP: 38600-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "guarda-mor/mg": {
        "subsecao": "Paracatu/MG",
        "endereco_inss": "Rua Doutor Rubens Bitencourt, n° s/n, Centro, Paracatu/MG - CEP: 38600-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "joão pinheiro/mg": {
        "subsecao": "Paracatu/MG",
        "endereco_inss": "Rua Doutor Rubens Bitencourt, n° s/n, Centro, Paracatu/MG - CEP: 38600-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "vazante/mg": {
        "subsecao": "Paracatu/MG",
        "endereco_inss": "Rua Doutor Rubens Bitencourt, n° s/n, Centro, Paracatu/MG - CEP: 38600-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "passos/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "alpinópolis/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bom jesus da penha/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "capetinga/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "capitólio/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "carmo do rio claro/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cássia/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "claraval/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "conceição da aparecida/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "delfinópolis/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "doresópolis/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "guapé/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ibiraci/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itaú de minas/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "nova resende/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "piumhi/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pratápolis/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são joão batista do glória/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são josé da barra/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são roque de minas/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "vargem bonita/mg": {
        "subsecao": "Passos/MG",
        "endereco_inss": "Rua Coronel Neca Medeiros, n° 164, Centro, Passos/MG - CEP: 37900-011",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "patos de minas/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "abadia dos dourados/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "arapuá/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "carmo do paranaíba/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "coromandel/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cruzeiro da fortaleza/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "guimarânia/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "lagamar/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "lagoa formosa/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "lagoa grande/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "matutina/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "patrocínio/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "presidente olegário/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rio paranaíba/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são gonçalo do abaeté/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são gotardo/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "serra do salitre/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "tiros/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "varjão de minas/mg": {
        "subsecao": "Patos de Minas/MG",
        "endereco_inss": "Rua Tiradentes, n° 500, Centro, Patos de Minas/MG - CEP: 38700-134",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "poços de caldas/mg": {
        "subsecao": "Poços de Caldas/MG",
        "endereco_inss": "Avenida Francisco Salles, n° 177, Centro, Poços de Caldas/MG - CEP: 37701-702",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "albertina/mg": {
        "subsecao": "Poços de Caldas/MG",
        "endereco_inss": "Avenida Francisco Salles, n° 177, Centro, Poços de Caldas/MG - CEP: 37701-702",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "andradas/mg": {
        "subsecao": "Poços de Caldas/MG",
        "endereco_inss": "Avenida Francisco Salles, n° 177, Centro, Poços de Caldas/MG - CEP: 37701-702",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bandeira do sul/mg": {
        "subsecao": "Poços de Caldas/MG",
        "endereco_inss": "Avenida Francisco Salles, n° 177, Centro, Poços de Caldas/MG - CEP: 37701-702",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "botelhos/mg": {
        "subsecao": "Poços de Caldas/MG",
        "endereco_inss": "Avenida Francisco Salles, n° 177, Centro, Poços de Caldas/MG - CEP: 37701-702",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "caldas/mg": {
        "subsecao": "Poços de Caldas/MG",
        "endereco_inss": "Avenida Francisco Salles, n° 177, Centro, Poços de Caldas/MG - CEP: 37701-702",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "campestre/mg": {
        "subsecao": "Poços de Caldas/MG",
        "endereco_inss": "Avenida Francisco Salles, n° 177, Centro, Poços de Caldas/MG - CEP: 37701-702",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "carvalhópolis/mg": {
        "subsecao": "Poços de Caldas/MG",
        "endereco_inss": "Avenida Francisco Salles, n° 177, Centro, Poços de Caldas/MG - CEP: 37701-702",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ibitiúra de minas/mg": {
        "subsecao": "Poços de Caldas/MG",
        "endereco_inss": "Avenida Francisco Salles, n° 177, Centro, Poços de Caldas/MG - CEP: 37701-702",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ipuiúna/mg": {
        "subsecao": "Poços de Caldas/MG",
        "endereco_inss": "Avenida Francisco Salles, n° 177, Centro, Poços de Caldas/MG - CEP: 37701-702",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "jacutinga/mg": {
        "subsecao": "Poços de Caldas/MG",
        "endereco_inss": "Avenida Francisco Salles, n° 177, Centro, Poços de Caldas/MG - CEP: 37701-702",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "machado/mg": {
        "subsecao": "Poços de Caldas/MG",
        "endereco_inss": "Avenida Francisco Salles, n° 177, Centro, Poços de Caldas/MG - CEP: 37701-702",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "monte sião/mg": {
        "subsecao": "Poços de Caldas/MG",
        "endereco_inss": "Avenida Francisco Salles, n° 177, Centro, Poços de Caldas/MG - CEP: 37701-702",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "poço fundo/mg": {
        "subsecao": "Poços de Caldas/MG",
        "endereco_inss": "Avenida Francisco Salles, n° 177, Centro, Poços de Caldas/MG - CEP: 37701-702",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa rita de caldas/mg": {
        "subsecao": "Poços de Caldas/MG",
        "endereco_inss": "Avenida Francisco Salles, n° 177, Centro, Poços de Caldas/MG - CEP: 37701-702",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ponte nova/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "acaiaca/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "alvinópolis/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "amparo do serra/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "barra longa/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "diogo de vasconcelos/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "dom silvério/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "guaraciaba/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "jequeri/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "mariana/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "oratórios/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ouro preto/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "piedade de ponte nova/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "raul soares/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rio casca/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rio doce/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa cruz do escalvado/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santo antônio do grama/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são pedro dos ferros/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "sem-peixe/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "urucânia/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "vermelho novo/mg": {
        "subsecao": "Ponte Nova/MG",
        "endereco_inss": "Rua Assad Zaidan, n° 21, Palmeiras, Ponte Nova/MG - CEP: 35430-234",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pouso alegre/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "alagoa/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bom repouso/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "borda da mata/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "brazópolis/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bueno brandão/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cachoeira de minas/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "camanducaia/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cambuí/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "careaçu/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "carmo de minas/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "conceição das pedras/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "conceição dos ouros/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "congonhal/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "consolação/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cordislândia/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "córrego do bom jesus/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cristina/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "delfim moreira/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "dom viçoso/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "espírito santo do dourado/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "estiva/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "extrema/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "gonçalves/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "heliodora/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "inconfidentes/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itajubá/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itamonte/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itanhandu/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itapeva/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "jesuânia/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "lambari/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "maria da fé/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "marmelópolis/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "munhoz/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "natércia/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "olímpio noronha/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ouro fino/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "paraisópolis/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "passa quatro/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pedralva/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "piranguçu/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "piranguinho/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pouso alto/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa rita do sapucaí/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são gonçalo do sapucaí/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são joão da mata/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são josé do alegre/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são lourenço/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são sebastião da bela vista/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são sebastião do rio verde/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "sapucaí-mirim/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "senador amaral/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "senador josé bento/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "silvianópolis/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "soledade de minas/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "tocos do moji/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "toledo/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "turvolândia/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "virgínia/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "wenceslau braz/mg": {
        "subsecao": "Pouso Alegre/MG",
        "endereco_inss": "Avenida Prefeito Sapucaí, n° 120, São Vicente de Paulo, Pouso Alegre/MG - CEP: 37550-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são joão del-rei/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "alfredo vasconcelos/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "antônio carlos/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "barbacena/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "barroso/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bias fortes/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "conceição da barra de minas/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "coronel xavier chaves/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "desterro de entre rios/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "desterro do melo/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "dores de campos/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "entre rios de minas/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ibertioga/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "jeceaba/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "lagoa dourada/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "nazareno/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "piedade do rio grande/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "prados/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "resende costa/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ressaquinha/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ritápolis/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa bárbara do tugúrio/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa cruz de minas/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santana do garambéu/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa rita de ibitipoca/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são brás do suaçuí/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são tiago/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "senhora dos remédios/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "tiradentes/mg": {
        "subsecao": "São João del-Rei/MG",
        "endereco_inss": "Avenida Tiradentes, n° 684, Centro, São João del-Rei/MG - CEP: 36307-332",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são sebastião do paraíso/mg": {
        "subsecao": "São Sebastião do Paraíso/MG",
        "endereco_inss": "Rua Doutor Placidino Brigagão, n° 1194, Centro, São Sebastião do Paraíso/MG - CEP: 37950-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "alterosa/mg": {
        "subsecao": "São Sebastião do Paraíso/MG",
        "endereco_inss": "Rua Doutor Placidino Brigagão, n° 1194, Centro, São Sebastião do Paraíso/MG - CEP: 37950-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "arceburgo/mg": {
        "subsecao": "São Sebastião do Paraíso/MG",
        "endereco_inss": "Rua Doutor Placidino Brigagão, n° 1194, Centro, São Sebastião do Paraíso/MG - CEP: 37950-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "areado/mg": {
        "subsecao": "São Sebastião do Paraíso/MG",
        "endereco_inss": "Rua Doutor Placidino Brigagão, n° 1194, Centro, São Sebastião do Paraíso/MG - CEP: 37950-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "fortaleza de minas/mg": {
        "subsecao": "São Sebastião do Paraíso/MG",
        "endereco_inss": "Rua Doutor Placidino Brigagão, n° 1194, Centro, São Sebastião do Paraíso/MG - CEP: 37950-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "guaranésia/mg": {
        "subsecao": "São Sebastião do Paraíso/MG",
        "endereco_inss": "Rua Doutor Placidino Brigagão, n° 1194, Centro, São Sebastião do Paraíso/MG - CEP: 37950-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "guaxupé/mg": {
        "subsecao": "São Sebastião do Paraíso/MG",
        "endereco_inss": "Rua Doutor Placidino Brigagão, n° 1194, Centro, São Sebastião do Paraíso/MG - CEP: 37950-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itamogi/mg": {
        "subsecao": "São Sebastião do Paraíso/MG",
        "endereco_inss": "Rua Doutor Placidino Brigagão, n° 1194, Centro, São Sebastião do Paraíso/MG - CEP: 37950-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "jacuí/mg": {
        "subsecao": "São Sebastião do Paraíso/MG",
        "endereco_inss": "Rua Doutor Placidino Brigagão, n° 1194, Centro, São Sebastião do Paraíso/MG - CEP: 37950-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "juruaia/mg": {
        "subsecao": "São Sebastião do Paraíso/MG",
        "endereco_inss": "Rua Doutor Placidino Brigagão, n° 1194, Centro, São Sebastião do Paraíso/MG - CEP: 37950-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "monte belo/mg": {
        "subsecao": "São Sebastião do Paraíso/MG",
        "endereco_inss": "Rua Doutor Placidino Brigagão, n° 1194, Centro, São Sebastião do Paraíso/MG - CEP: 37950-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "monte santo de minas/mg": {
        "subsecao": "São Sebastião do Paraíso/MG",
        "endereco_inss": "Rua Doutor Placidino Brigagão, n° 1194, Centro, São Sebastião do Paraíso/MG - CEP: 37950-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "muzambinho/mg": {
        "subsecao": "São Sebastião do Paraíso/MG",
        "endereco_inss": "Rua Doutor Placidino Brigagão, n° 1194, Centro, São Sebastião do Paraíso/MG - CEP: 37950-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são pedro da união/mg": {
        "subsecao": "São Sebastião do Paraíso/MG",
        "endereco_inss": "Rua Doutor Placidino Brigagão, n° 1194, Centro, São Sebastião do Paraíso/MG - CEP: 37950-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são tomás de aquino/mg": {
        "subsecao": "São Sebastião do Paraíso/MG",
        "endereco_inss": "Rua Doutor Placidino Brigagão, n° 1194, Centro, São Sebastião do Paraíso/MG - CEP: 37950-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "sete lagoas/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "alvorada de minas/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "araçaí/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "baldim/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "biquinhas/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cachoeira da prata/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "caetanópolis/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cordisburgo/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "corinto/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "couto de magalhães de minas/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "curvelo/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "datas/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "diamantina/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "felício dos santos/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "felixlândia/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "fortuna de minas/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "funilândia/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "gouveia/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "inhaúma/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "inimutaba/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "jequitibá/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "monjolos/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "morada nova de minas/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "morro da garça/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "paropeba/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "presidente juscelino/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "presidente kubitschek/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santana de pirapama/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santo antônio do itambé/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santo hipólito/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são gonçalo do rio preto/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "senador modestino gonçalves/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "serra azul de minas/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "serro/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "três marias/mg": {
        "subsecao": "Sete Lagoas/MG",
        "endereco_inss": "Rua Doutor Pedro Luiz, n° 59, Centro, Sete Lagoas/MG - CEP: 35700-001",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "teófilo otoni/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "água boa/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "águas formosas/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "águas vermelhas/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "almenara/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "angelândia/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "araçuaí/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ataléia/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bandeira/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bertópolis/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cachoeira de pajeú/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "campanário/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "capelinha/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "caraí/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "carlos chagas/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "catuji/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "comercinho/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "coronel murta/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "crisólita/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "divisa alegre/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "divisópolis/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "felisburgo/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "franciscópolis/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "frei gaspar/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "fronteira dos vales/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itaipé/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itambacuri/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itaobim/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itinga/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "jacinto/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "jampruca/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "jequitinhonha/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "joaíma/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "jordânia/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ladainha/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "machacalis/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "malacacheta/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "mata verde/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "medina/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "monte formoso/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "nanuque/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "nova módica/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "novo cruzeiro/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "novo oriente de minas/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ouro verde de minas/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "padre paraíso/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "palmópolis/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pavão/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pedra azul/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pescador/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ponto dos volantes/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "poté/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rio do prado/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rubim/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "salto da divisa/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa helena de minas/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa maria do salto/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santo antônio do jacinto/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são josé do divino/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "serra dos aimorés/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "setubinha/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "umburatiba/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "virgem da lapa/mg": {
        "subsecao": "Teófilo Otoni/MG",
        "endereco_inss": "Rua José de Souza Neves, n° 75, Marajoara, Teófilo Otoni/MG - CEP: 39803-137",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "uberaba/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "água comprida/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "araxá/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "campo florido/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "campos altos/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "comendador gomes/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "conceição das alagoas/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "conquista/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "delta/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "fronteira/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "frutal/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ibiá/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "itapagipe/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pedrinópolis/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "perdizes/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pirajuba/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "planura/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pratinha/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "sacramento/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa rosa da serra/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são francisco de sales/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "tapira/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "veríssimo/mg": {
        "subsecao": "Uberaba/MG",
        "endereco_inss": "Avenida Leopoldino de Oliveira, n° 4086, Fabrício, Uberaba/MG - CEP: 38065-165",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "uberlândia/mg": {
        "subsecao": "Uberlândia/MG",
        "endereco_inss": "Praça Clarimundo Carneiro, n° 162, Centro, Uberlândia/MG - CEP: 38400-154",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "araguari/mg": {
        "subsecao": "Uberlândia/MG",
        "endereco_inss": "Praça Clarimundo Carneiro, n° 162, Centro, Uberlândia/MG - CEP: 38400-154",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "araporã/mg": {
        "subsecao": "Uberlândia/MG",
        "endereco_inss": "Praça Clarimundo Carneiro, n° 162, Centro, Uberlândia/MG - CEP: 38400-154",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cascalho rico/mg": {
        "subsecao": "Uberlândia/MG",
        "endereco_inss": "Praça Clarimundo Carneiro, n° 162, Centro, Uberlândia/MG - CEP: 38400-154",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "douradoquara/mg": {
        "subsecao": "Uberlândia/MG",
        "endereco_inss": "Praça Clarimundo Carneiro, n° 162, Centro, Uberlândia/MG - CEP: 38400-154",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "estrela do sul/mg": {
        "subsecao": "Uberlândia/MG",
        "endereco_inss": "Praça Clarimundo Carneiro, n° 162, Centro, Uberlândia/MG - CEP: 38400-154",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "grupiara/mg": {
        "subsecao": "Uberlândia/MG",
        "endereco_inss": "Praça Clarimundo Carneiro, n° 162, Centro, Uberlândia/MG - CEP: 38400-154",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "indianópolis/mg": {
        "subsecao": "Uberlândia/MG",
        "endereco_inss": "Praça Clarimundo Carneiro, n° 162, Centro, Uberlândia/MG - CEP: 38400-154",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "iraí de minas/mg": {
        "subsecao": "Uberlândia/MG",
        "endereco_inss": "Praça Clarimundo Carneiro, n° 162, Centro, Uberlândia/MG - CEP: 38400-154",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "monte alegre de minas/mg": {
        "subsecao": "Uberlândia/MG",
        "endereco_inss": "Praça Clarimundo Carneiro, n° 162, Centro, Uberlândia/MG - CEP: 38400-154",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "monte carmelo/mg": {
        "subsecao": "Uberlândia/MG",
        "endereco_inss": "Praça Clarimundo Carneiro, n° 162, Centro, Uberlândia/MG - CEP: 38400-154",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "nova ponte/mg": {
        "subsecao": "Uberlândia/MG",
        "endereco_inss": "Praça Clarimundo Carneiro, n° 162, Centro, Uberlândia/MG - CEP: 38400-154",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "romaria/mg": {
        "subsecao": "Uberlândia/MG",
        "endereco_inss": "Praça Clarimundo Carneiro, n° 162, Centro, Uberlândia/MG - CEP: 38400-154",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa juliana/mg": {
        "subsecao": "Uberlândia/MG",
        "endereco_inss": "Praça Clarimundo Carneiro, n° 162, Centro, Uberlândia/MG - CEP: 38400-154",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "tupaciguara/mg": {
        "subsecao": "Uberlândia/MG",
        "endereco_inss": "Praça Clarimundo Carneiro, n° 162, Centro, Uberlândia/MG - CEP: 38400-154",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "unaí/mg": {
        "subsecao": "Unaí/MG",
        "endereco_inss": "Avenida Governador Valadares, n° s/n, Centro, Unaí/MG - CEP: 38610-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "arinos/mg": {
        "subsecao": "Unaí/MG",
        "endereco_inss": "Avenida Governador Valadares, n° s/n, Centro, Unaí/MG - CEP: 38610-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bonfinópolis de minas/mg": {
        "subsecao": "Unaí/MG",
        "endereco_inss": "Avenida Governador Valadares, n° s/n, Centro, Unaí/MG - CEP: 38610-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "buritis/mg": {
        "subsecao": "Unaí/MG",
        "endereco_inss": "Avenida Governador Valadares, n° s/n, Centro, Unaí/MG - CEP: 38610-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cabeceira grande/mg": {
        "subsecao": "Unaí/MG",
        "endereco_inss": "Avenida Governador Valadares, n° s/n, Centro, Unaí/MG - CEP: 38610-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "chapada gaúcha/mg": {
        "subsecao": "Unaí/MG",
        "endereco_inss": "Avenida Governador Valadares, n° s/n, Centro, Unaí/MG - CEP: 38610-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "dom bosco/mg": {
        "subsecao": "Unaí/MG",
        "endereco_inss": "Avenida Governador Valadares, n° s/n, Centro, Unaí/MG - CEP: 38610-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "formoso/mg": {
        "subsecao": "Unaí/MG",
        "endereco_inss": "Avenida Governador Valadares, n° s/n, Centro, Unaí/MG - CEP: 38610-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "natalândia/mg": {
        "subsecao": "Unaí/MG",
        "endereco_inss": "Avenida Governador Valadares, n° s/n, Centro, Unaí/MG - CEP: 38610-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "riachinho/mg": {
        "subsecao": "Unaí/MG",
        "endereco_inss": "Avenida Governador Valadares, n° s/n, Centro, Unaí/MG - CEP: 38610-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santa fé de minas/mg": {
        "subsecao": "Unaí/MG",
        "endereco_inss": "Avenida Governador Valadares, n° s/n, Centro, Unaí/MG - CEP: 38610-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são romão/mg": {
        "subsecao": "Unaí/MG",
        "endereco_inss": "Avenida Governador Valadares, n° s/n, Centro, Unaí/MG - CEP: 38610-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "uruana de minas/mg": {
        "subsecao": "Unaí/MG",
        "endereco_inss": "Avenida Governador Valadares, n° s/n, Centro, Unaí/MG - CEP: 38610-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "urucuia/mg": {
        "subsecao": "Unaí/MG",
        "endereco_inss": "Avenida Governador Valadares, n° s/n, Centro, Unaí/MG - CEP: 38610-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "varginha/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "aiuruoca/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "alfenas/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "baependi/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "bocaina de minas/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cambuquira/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "campanha/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "campo do meio/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "campos gerais/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "carmo da cachoeira/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "carvalhos/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "caxambu/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "conceição do rio verde/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cruzília/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "elói mendes/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "fama/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "liberdade/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "minduri/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "monsenhor paulo/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "paraguaçu/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "passa-vinte/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "santana da vargem/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são bento abade/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são thomé das letras/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "seritinga/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "serrania/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "serranos/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "três corações/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "três pontas/mg": {
        "subsecao": "Varginha/MG",
        "endereco_inss": "Rua Doutor Wenceslau Braz, n° 157, Centro, Varginha/MG - CEP: 37002-081",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "viçosa/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "alto rio doce/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "araponga/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "brás pires/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cajuri/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "canaã/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "cipotânea/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "coimbra/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "divinésia/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "dores do turvo/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ervália/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "guidoval/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "guiricema/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "paula cândido/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "pedra do anta/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "piranga/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "porto firme/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "presidente bernardes/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "rodeiro/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são geraldo/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "são miguel do anta/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "senador firmino/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "senhora de oliveira/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "teixeiras/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "tocantins/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "ubá/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "visconde do rio branco/mg": {
        "subsecao": "Viçosa/MG",
        "endereco_inss": "Rua Doutor Milton Bandeira, n° 160, Vereda do Bosque, Viçosa/MG - CEP: 36570-000",
        "oab_advogado": "251051",
        "uf_oab": "MG"
    },
    "plano piloto/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "brasília/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "gama/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "taguatinga/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "brazlândia/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "sobradinho/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "planaltina/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "paranoá/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "núcleo bandeirante/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "ceilândia/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "guará/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "cruzeiro/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "samambaia/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "santa maria/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "são sebastião/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "recanto das emas/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "lago sul/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "riacho fundo/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "lago norte/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "candangolândia/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "águas claras/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "riacho fundo ii/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "sudoeste/octogonal/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "varjão/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "park way/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "scia/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "estrutural/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "sobradinho ii/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "jardim botânico/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "itapoã/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "sia/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "vicente pires/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "fercal/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "sol nascente/pôr do sol/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "arniqueira/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "água quente/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "arapoanga/df": {
        "subsecao": "Brasília/DF",
        "endereco_inss": "EQS 502/503, Bloco A, Asa Sul, Brasília/DF - CEP: 70330-400",
        "oab_advogado": "89956",
        "uf_oab": "DF"
    },
    "joão pessoa/pb": {
        "subsecao": "João Pessoa/PB",
        "endereco_inss": "Avenida Almirante Barroso, n° 455, Centro, João Pessoa/PB - CEP: 58013-120",
        "oab_advogado": "36361-A",
        "uf_oab": "PB"
    },
    "campina grande/pb": {
        "subsecao": "Campina Grande/PB",
        "endereco_inss": "Rua Marquês do Herval, n° 36, Centro, Campina Grande/PB - CEP: 58400-263",
        "oab_advogado": "36361-A",
        "uf_oab": "PB"
    },
    "santa rita/pb": {
        "subsecao": "João Pessoa/PB",
        "endereco_inss": "Rua Senador José Américo de Almeida, n° 126, Centro, Santa Rita/PB - CEP: 58300-000",
        "oab_advogado": "36361-A",
        "uf_oab": "PB"
    },
    "patos/pb": {
        "subsecao": "Patos/PB",
        "endereco_inss": "Rua Bossuet Wanderley, n° 420, Centro, Patos/PB - CEP: 58700-410",
        "oab_advogado": "36361-A",
        "uf_oab": "PB"
    },
    "sousa/pb": {
        "subsecao": "Sousa/PB",
        "endereco_inss": "Rua Coronel José Gomes de Sá, n° 23, Centro, Sousa/PB - CEP: 58800-050",
        "oab_advogado": "36361-A",
        "uf_oab": "PB"
    },
    "cajazeiras/pb": {
        "subsecao": "Cajazeiras/PB",
        "endereco_inss": "Rua Coronel Juvêncio Carneiro, n° 314, Centro, Cajazeiras/PB - CEP: 58900-000",
        "oab_advogado": "36361-A",
        "uf_oab": "PB"
    },
    "guarabira/pb": {
        "subsecao": "Guarabira/PB",
        "endereco_inss": "Avenida Dom Pedro II, n° 365, Centro, Guarabira/PB - CEP: 58200-000",
        "oab_advogado": "36361-A",
        "uf_oab": "PB"
    },
    "cabedelo/pb": {
        "subsecao": "João Pessoa/PB",
        "endereco_inss": "BR-230, Km 01, s/n, Centro, Cabedelo/PB - CEP: 58100-000",
        "oab_advogado": "36361-A",
        "uf_oab": "PB"
    },
    "bayeux/pb": {
        "subsecao": "João Pessoa/PB",
        "endereco_inss": "Avenida Liberdade, n° 3362, Centro, Bayeux/PB - CEP: 58306-000",
        "oab_advogado": "36361-A",
        "uf_oab": "PB"
    }
}