"use strict"

import jsonPersonagens from "./personagens.json" with {type: 'json'}

function carregarImagens() {

    jsonPersonagens.forEach(criarPersonagens)

}

function criarPersonagens(jsonPersonagens) {

    const containerSlider = document.getElementById("container-items")

    const divPersonagem = document.createElement("div")
    const imagemPersonagem = document.createElement("img")

    divPersonagem.classList.add("item")

    imagemPersonagem.src = jsonPersonagens.imagem

    containerSlider.appendChild(divPersonagem)
    divPersonagem.appendChild(imagemPersonagem)

}

carregarImagens()





