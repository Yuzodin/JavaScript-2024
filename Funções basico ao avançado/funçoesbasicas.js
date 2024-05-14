//Parametros
function nome (Nomedapessoa){
    console.log(Nomedapessoa)
}

nome('Mauro')
nome('Bebeto')

function soma (num1, num2){
    const Numeros = num1 - num2
    console.log(Numeros)
}

soma(40,20)
soma(-30,60)

//Return

function multi(num1 , num2){
    let multinum = num1 * num2
    return multinum
}

let mynumbers = multi(30,2)
console.log(mynumbers)


function div(numero1, numero2){
    var divnum = numero1 / numero2
    return divnum
}

const numbermy = div(2,5)
console.log(numbermy)


//Arrow funtion

const somador = (Number1, Number2) => {
    const soma = Number1 + Number2 
    return soma
}

let resusoma = somador(77,22)
console.log(resusoma)

//Forma mais rapida ainda de se fazer

let subtrator = (n1, n2) => n1 - n2;

const subforma = subtrator(40,20)
console.log(subforma)


var nomeDoindividuo = (Nomedealguem) => {
    console.log(Nomedealguem)
}

nomeDoindividuo('Fim do espediente')