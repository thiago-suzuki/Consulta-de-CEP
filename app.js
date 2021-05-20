import ConsultaCep from './consultacep.js'

let btnConsulta = document.querySelector("#btnConsulta")
let btnLimpar = document.querySelector("#btnLimpar")
let cep = document.getElementById('cep')
let rua = document.getElementById('rua')
let complemento = document.getElementById('complemento')
let bairro = document.getElementById('bairro')
let cidade = document.getElementById('cidade')
let estado = document.getElementById('estado')
let cependereco = document.getElementById('cependereco')

let resultado = document.querySelector("#resultado")
btnConsulta.addEventListener("click", buscaCep)
btnLimpar.addEventListener("click", limpaCEP)
cep.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault()
        btnConsulta.click()
    }
})
cep.addEventListener("keyup", function(event) {
    if (event.keyCode == 67) {
        event.preventDefault()
        btnLimpar.click()
    }
})
cep.focus()

function mostraResultado(flMostra) {
    resultado.style.visibility = flMostra ? "visible" : "hidden"
}

function cepOK(busca) {
    rua.innerHTML = busca.logradouro
    complemento.innerHTML = busca.complemento
    bairro.innerHTML = busca.bairro
    cidade.innerHTML = busca.localidade
    estado.innerHTML = busca.uf
    cependereco.innerHTML = busca.cep
    mostraResultado(true)
}

function cepErro(erro) {
    mostraResultado(false)
    alert('Cep não Encontrado')
}

function buscaCep() {
    let busca = new ConsultaCep()
    busca.buscaCEP(cep.value, cepOK, cepErro)
}

function limpaCEP() {
    cep.value = ''
    mostraResultado(false)
    cep.focus()
}