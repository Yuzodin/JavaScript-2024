function intaratividade(){
    let a = document.getElementById('area')
    a.innerText = ('GO GO Zepelli')
    a.style.backgroundColor= 'black'
}
function entrar(){
    let a = document.getElementById('area')
    a.innerText = ('Entrou..')
    a.style.backgroundColor = 'blue'
}
function saiu(){
    let a = document.getElementById('area')
    a.innerText = ('Saiu..')
    a.style.backgroundColor = 'red'
}
function soma(){
    let tn1 = document.getElementById('txtn1')
    let tn2 = document.getElementById('txtn2')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let s = n1 + n2
    let res = document.getElementById('resu')
    res.innerText = `O resultado da sua soma é igual à = ${s}`
}

var texto = 'To ouvindo alguem me chamar';
document.getElementById('fatiado').innerHTML = texto.length
