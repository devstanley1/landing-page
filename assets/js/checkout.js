/**
 * Script para a página de checkout
 * Gerencia validação de formulário e exibição do plano selecionado
 */

// ===========================
// UTILITÁRIOS
// ===========================

/**
 * Obtém o plano selecionado da URL ou localStorage
 * @returns {string} Nome do plano selecionado
 */
function obterPlanoSelecionado() {
    // Primeiro tenta obter da URL
    const urlParams = new URLSearchParams(window.location.search);
    const planoURL = urlParams.get('plano');
    
    if (planoURL) {
        return planoURL;
    }
    
    // Se não houver na URL, tenta obter do localStorage
    return localStorage.getItem('planoSelecionado') || 'Nenhum plano selecionado';
}

/**
 * Exibe o plano selecionado na página
 */
function exibirPlanoSelecionado() {
    const plano = obterPlanoSelecionado();
    const elementoPlano = document.getElementById('plano-selecionado');
    
    if (elementoPlano) {
        elementoPlano.textContent = `Plano selecionado: ${plano}`;
    }
}

// ===========================
// VALIDAÇÃO DE FORMULÁRIO
// ===========================

/**
 * Valida o formato do email
 * @param {string} email - Email para validar
 * @returns {boolean} True se o email for válido
 */
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Valida o formato do telefone (formato brasileiro)
 * @param {string} telefone - Telefone para validar
 * @returns {boolean} True se o telefone for válido
 */
function validarTelefone(telefone) {
    const regex = /^\(?[1-9]{2}\)?\s?(?:9\d{4}|\d{4})-?\d{4}$/;
    const numeroLimpo = telefone.replace(/\D/g, '');
    return numeroLimpo.length >= 10 && numeroLimpo.length <= 11;
}

/**
 * Valida o número do cartão de crédito
 * @param {string} numero - Número do cartão
 * @returns {boolean} True se o número for válido
 */
function validarNumeroCartao(numero) {
    const numeroLimpo = numero.replace(/\s/g, '');
    return /^\d{13,19}$/.test(numeroLimpo);
}

/**
 * Valida a data de validade do cartão
 * @param {string} data - Data no formato MM/AA
 * @returns {boolean} True se a data for válida e futura
 */
function validarDataValidade(data) {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(data)) {
        return false;
    }
    
    const [mes, ano] = data.split('/');
    const anoCompleto = 2000 + parseInt(ano);
    const dataExpiracao = new Date(anoCompleto, parseInt(mes) - 1);
    const hoje = new Date();
    
    return dataExpiracao > hoje;
}

/**
 * Valida o CVV do cartão
 * @param {string} cvv - Código CVV
 * @returns {boolean} True se o CVV for válido
 */
function validarCVV(cvv) {
    return /^\d{3,4}$/.test(cvv);
}

/**
 * Adiciona ou remove classe de erro de um campo
 * @param {HTMLElement} campo - Campo do formulário
 * @param {boolean} temErro - Se true, adiciona erro; se false, remove
 */
function marcarCampo(campo, temErro) {
    if (temErro) {
        campo.classList.add('error');
    } else {
        campo.classList.remove('error');
    }
}

/**
 * Valida um campo individual do formulário
 * @param {HTMLElement} campo - Campo a ser validado
 * @returns {boolean} True se o campo for válido
 */
function validarCampo(campo) {
    const id = campo.id;
    const valor = campo.value.trim();
    let valido = true;
    
    switch (id) {
        case 'email':
            valido = validarEmail(valor);
            break;
        case 'phone':
            valido = validarTelefone(valor);
            break;
        case 'card-number':
            valido = validarNumeroCartao(valor);
            break;
        case 'expiry-date':
            valido = validarDataValidade(valor);
            break;
        case 'cvv':
            valido = validarCVV(valor);
            break;
        default:
            valido = valor.length > 0;
    }
    
    marcarCampo(campo, !valido);
    return valido;
}

// ===========================
// MÁSCARAS DE ENTRADA
// ===========================

/**
 * Aplica máscara de telefone
 * @param {string} valor - Valor do campo
 * @returns {string} Valor formatado
 */
function mascaraTelefone(valor) {
    const numero = valor.replace(/\D/g, '');
    
    if (numero.length <= 10) {
        return numero.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
        return numero.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
}

/**
 * Aplica máscara de cartão de crédito
 * @param {string} valor - Valor do campo
 * @returns {string} Valor formatado
 */
function mascaraCartao(valor) {
    const numero = valor.replace(/\D/g, '');
    return numero.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
}

/**
 * Aplica máscara de data de validade
 * @param {string} valor - Valor do campo
 * @returns {string} Valor formatado
 */
function mascaraDataValidade(valor) {
    const numero = valor.replace(/\D/g, '');
    if (numero.length <= 2) {
        return numero;
    }
    return numero.replace(/(\d{2})(\d{0,2})/, '$1/$2');
}

// ===========================
// INICIALIZAÇÃO
// ===========================

/**
 * Configura os event listeners para validação em tempo real
 */
function configurarValidacao() {
    const formulario = document.querySelector('form');
    
    if (!formulario) {
        return;
    }
    
    // Validação em tempo real
    const campos = formulario.querySelectorAll('input');
    campos.forEach(campo => {
        campo.addEventListener('blur', () => validarCampo(campo));
        campo.addEventListener('input', () => {
            if (campo.classList.contains('error')) {
                validarCampo(campo);
            }
        });
    });
    
    // Aplicar máscaras
    const campoTelefone = document.getElementById('phone');
    if (campoTelefone) {
        campoTelefone.addEventListener('input', (e) => {
            e.target.value = mascaraTelefone(e.target.value);
        });
    }
    
    const campoCartao = document.getElementById('card-number');
    if (campoCartao) {
        campoCartao.addEventListener('input', (e) => {
            e.target.value = mascaraCartao(e.target.value);
        });
        campoCartao.maxLength = 19;
    }
    
    const campoValidade = document.getElementById('expiry-date');
    if (campoValidade) {
        campoValidade.addEventListener('input', (e) => {
            e.target.value = mascaraDataValidade(e.target.value);
        });
        campoValidade.maxLength = 5;
    }
    
    const campoCVV = document.getElementById('cvv');
    if (campoCVV) {
        campoCVV.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
        campoCVV.maxLength = 4;
    }
    
    // Validação ao submeter
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let formularioValido = true;
        campos.forEach(campo => {
            if (!validarCampo(campo)) {
                formularioValido = false;
            }
        });
        
        if (formularioValido) {
            alert('Compra finalizada com sucesso! Em breve você receberá um email de confirmação.');
            formulario.reset();
            localStorage.removeItem('planoSelecionado');
        } else {
            alert('Por favor, corrija os campos destacados em vermelho.');
        }
    });
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    exibirPlanoSelecionado();
    configurarValidacao();
});
