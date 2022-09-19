//objeto
let pessoa = {
    nome: 'Rafael',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'de Souza',
    cidade: 'Natal'
}

//array
let amigo = [
    'Vinícius', 25, 'Florianópolis'
]

let resposta = window.document.getElementById("txtCor")
let result = window.document.getElementById("resultado")

let corSite = 'azul'

function resetaCor(){
    corSite = resposta.value
    result.innerHTML += `A nova cor é ${corSite}`
    console.log(corSite)

}



