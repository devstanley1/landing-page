/**
 * Script principal para a landing page do curso Front-End
 * Gerencia a navegação e redirecionamento para checkout
 */

// ===========================
// CONSTANTES
// ===========================
const PLANOS = {
    BASICO: 'Plano Básico',
    PREMIUM: 'Plano Premium',
    VITALICIO: 'Plano Vitalício'
};

// ===========================
// FUNÇÕES PRINCIPAIS
// ===========================

/**
 * Redireciona o usuário para a página de checkout com o plano selecionado
 * @param {string} plano - Nome do plano selecionado
 */
function redirecionarParaCheckout(plano) {
    if (!plano) {
        console.error('Plano não especificado');
        return;
    }
    
    // Salva o plano selecionado no localStorage para persistência
    localStorage.setItem('planoSelecionado', plano);
    
    // Redireciona para a página de checkout
    window.location.href = `pages/checkout.html?plano=${encodeURIComponent(plano)}`;
}

/**
 * Adiciona os event listeners aos botões de seleção de plano
 */
function inicializarBotoes() {
    const botoes = document.querySelectorAll('.button');
    
    if (botoes.length === 0) {
        console.warn('Nenhum botão encontrado na página');
        return;
    }

    botoes.forEach((botao, index) => {
        botao.addEventListener('click', (e) => {
            e.preventDefault();
            
            let planoSelecionado = '';
            
            // Mapeia o índice do botão para o plano correspondente
            switch (index) {
                case 0:
                    planoSelecionado = PLANOS.BASICO;
                    break;
                case 1:
                    planoSelecionado = PLANOS.PREMIUM;
                    break;
                case 2:
                    planoSelecionado = PLANOS.VITALICIO;
                    break;
                default:
                    planoSelecionado = 'Plano Indefinido';
            }
            
            redirecionarParaCheckout(planoSelecionado);
        });
    });
}

/**
 * Adiciona event listener ao botão CTA principal
 */
function inicializarBotaoCTA() {
    const botaoCTA = document.querySelector('.cta-button');
    
    if (botaoCTA) {
        botaoCTA.addEventListener('click', (e) => {
            e.preventDefault();
            // Rola suavemente até a seção de ofertas
            const secaoOfertas = document.querySelector('.offers');
            if (secaoOfertas) {
                secaoOfertas.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// ===========================
// INICIALIZAÇÃO
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    inicializarBotoes();
    inicializarBotaoCTA();
});
