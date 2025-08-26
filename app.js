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

let personagens = document.querySelectorAll(".item")

const buttonPrevious = document.getElementById("previous")
const buttonNext = document.getElementById("next")

function previous() {

    const containerSlider = document.getElementById("container-items")

    const lastPersonagem = personagens[personagens.length - 1]
    containerSlider.insertBefore(lastPersonagem, personagens[0])
    personagens = document.querySelectorAll(".item")

}

function next() {

    const containerSlider = document.getElementById("container-items")

    containerSlider.appendChild(personagens[0])
    personagens = document.querySelectorAll(".item")

}


buttonNext.addEventListener('click', next)
buttonPrevious.addEventListener('click', previous)