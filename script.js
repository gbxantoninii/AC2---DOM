const btnNoturno = document.querySelector("#btnNoturno");
const servico = document.querySelector("#servico");
const precoBase = document.querySelector("#precoBase");
const distancia = document.querySelector("#distancia");
const btnCalcular = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");
const btnChamar = document.querySelector("#btnChamar");
const areaSucesso = document.querySelector("#areaSucesso");

const precoResidencial = 80;
const precoAutomotivo = 120;
const valorPorKm = 3.5;

servico.addEventListener("change", function () {

    if (servico.value === "residencial") {
        precoBase.textContent = "R$ " + precoResidencial;
    } else if (servico.value === "automotivo") {
        precoBase.textContent = "R$ " + precoAutomotivo;
    } else {
        precoBase.textContent = "R$ --";
    }

    resultado.textContent = "";
});

btnNoturno.addEventListener("click", function () {
    document.body.classList.toggle("noturno");

    if (document.body.classList.contains("noturno")) {
        btnNoturno.textContent = "☀️ Modo claro";
    } else {
        btnNoturno.textContent = "🌙 Modo noturno";
    }
});

btnCalcular.addEventListener("click", function () {

    distancia.classList.remove("erro");

    if (servico.value === "") {
        resultado.textContent = "Escolha o tipo de serviço!";
        return;
    }

    if (distancia.value === "") {
        resultado.textContent = "Digite a distância em KM!";
        distancia.classList.add("erro");
        return;
    }

    const km = Number(distancia.value);
    let base = precoResidencial;
    if (servico.value === "automotivo") {
        base = precoAutomotivo;
    }
    const total = base + km * valorPorKm;

    resultado.textContent = "Valor total: R$ " + total.toFixed(2);
});

distancia.addEventListener("input", function () {
    distancia.classList.remove("erro");
});

btnChamar.addEventListener("click", function () {

    const mensagem = document.createElement("p");

    mensagem.textContent = "✅ Pedido enviado! O profissional está a caminho.";
    mensagem.classList.add("sucesso");

    areaSucesso.appendChild(mensagem);

    btnChamar.disabled = true;

    setTimeout(function () {
        mensagem.remove();
        btnChamar.disabled = false;
    }, 5000);
});