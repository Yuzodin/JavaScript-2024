console.log('Cólera dos 100 dragões')

function numsoma(){
    let num1 = Number(document.getElementById('inserir').value)
    let num2 = Number(document.getElementById('inserirtwo').value)
    let soma = num1 + num2
    document.getElementById('soma').innerHTML= `A soma entre <mark style="background-color: aqua;"> ${num1}</mark> e <mark style="background-color: aqua;">${num2}</mark> = <mark style="background-color: aqua;"> ${soma}</mark>`

}