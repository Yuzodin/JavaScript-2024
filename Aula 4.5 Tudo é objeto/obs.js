const nome = 'ANDRE'

const testeLowerCase = nome.toLowerCase()
// Testa no console para ver se e metodo ou função sempre para ver se tá retornando certo

//Exercicios

// nomeie 3 propriedades ou métodos de strings
const exemplo = 'exemplo'

const metodo1 = exemplo.indexOf('hoo')
const metodo2 = exemplo.length
const metodo3 = exemplo.includes('rá', 're')

// nomeie 5 propriedades ou métodos de elementos do DOM

const claseDoElemento = document.querySelector('.classeGrande')

const exemploClasse1 = claseDoElemento.children
const exemploClasse2 = claseDoElemento.previousSibling
const exemploClasse3 = claseDoElemento.ATTRIBUTE_NODE
const exemploClasse4 = claseDoElemento.DOCUMENT_TYPE_NODE
const exemploClasse5 = claseDoElemento.id

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

const inputCopia = document.querySelector('#Copia')
const copiaButton = document.querySelector('#btn-copia')

const inputCola = document.querySelector('#Cola')
const colaButton = document.querySelector('#btn-cola')
// console.log(copiaButton)

copiaButton.addEventListener('click', () => {
    window.navigator.clipboard.writeText(inputCopia.value)
    alert ('Copiado')
})

colaButton.addEventListener('click', async () => {
    const text = await window.navigator.clipboard.readText()
    inputCola.value = text
    alert ('Colado')
})