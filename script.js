
function redirecionarParaCheckout(plano) {
    alert(`Você selecionou o plano: ${plano}. Redirecionando para o checkout...`);
    window.location.href = `checkout.html?plano=${encodeURIComponent(plano)}`;
}


document.querySelectorAll(".button").forEach((botao, index) => {
    botao.addEventListener("click", () => {
        let planoSelecionado = "";
        switch (index) {
            case 0:
                planoSelecionado = "Plano Básico";
                break;
            case 1:
                planoSelecionado = "Plano Premium";
                break;
            case 2:
                planoSelecionado = "Plano Vitalício";
                break;
        }
        redirecionarParaCheckout(planoSelecionado);
    });
});


const botaoInscrever = document.querySelector("button.cta-button");
if (botaoInscrever) {
    botaoInscrever.addEventListener("click", () => {
        redirecionarParaCheckout("Plano Indefinido");
    });
}