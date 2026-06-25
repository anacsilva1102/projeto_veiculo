import { calcularIPVA } from "./script_calculo.js"

let listaVeiculos = []

const formulario = document.getElementById("formulario-veiculo")
const divDados = document.getElementById("div-dados")

formulario.addEventListener("submit", adicionarVeiculo)

function adicionarVeiculo(event){

    event.preventDefault()

    let modelo = document.getElementById("modelo").value
    let marca = document.getElementById("marca").value
    let placa = document.getElementById("placa").value
    let ano = Number(document.getElementById("ano").value)
    let valor = Number(document.getElementById("valor").value)

    let combustivel =
    document.querySelector('input[name="combustivel"]:checked').value

    let anoAtual = new Date().getFullYear()

    let idade = anoAtual - ano

    let seguro = valor * 0.10

    let ipva = calcularIPVA(valor, combustivel, idade)

    let licenciamento = 200

    let valorFinal = 0

    if(ipva == "Isento"){
        valorFinal = seguro + licenciamento
    }else{
        valorFinal = seguro + ipva + licenciamento
    }

    let veiculo = {
        modelo,
        marca,
        placa,
        idade,
        seguro,
        ipva,
        valorFinal
    }

    listaVeiculos.push(veiculo)

    listarVeiculos()

    formulario.reset()
}

function listarVeiculos(){

    divDados.innerHTML = "<h2>Veículos Cadastrados</h2>"

    for(let i = 0; i < listaVeiculos.length; i++){

        let card = document.createElement("div")

        card.className = "card"

        card.innerHTML =
        "<p><b>Modelo:</b> " + listaVeiculos[i].modelo + "</p>" +
        "<p><b>Marca:</b> " + listaVeiculos[i].marca + "</p>" +
        "<p><b>Placa:</b> " + listaVeiculos[i].placa + "</p>" +
        "<p><b>Idade:</b> " + listaVeiculos[i].idade + " anos</p>" +
        "<p><b>Seguro:</b> R$ " + listaVeiculos[i].seguro.toFixed(2) + "</p>" +
        "<p><b>IPVA:</b> " +
        (listaVeiculos[i].ipva == "Isento"
        ? "Isento"
        : "R$ " + listaVeiculos[i].ipva.toFixed(2)) +
        "</p>" +
        "<p><b>Licenciamento:</b> R$ 200,00</p>" +
        "<p><b>Valor Final:</b> R$ " +
        listaVeiculos[i].valorFinal.toFixed(2) +
        "</p>"

        divDados.appendChild(card)
    }
}