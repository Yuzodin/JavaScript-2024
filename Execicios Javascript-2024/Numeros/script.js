console.log('Só cowboy revoltado')

function calcular(){
    let numero = prompt('Digite um número:')
    document.getElementById('calculo').innerHTML = `O dobro de ${numero} e ${numero * 2} e a sua metade ${numero / 2}!`
}