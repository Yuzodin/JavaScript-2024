console.log('Muito pra aprender')

function starting(){
    document.getElementById('time').innerHTML = 'Iniciou a contagem.. '
    tempo = setTimeout (function (){
        document.getElementById('time').innerHTML = 'Executou o timeout'
    }, 5000)
}
//Ativa a função apenas uma vez após o tempo especifico 

function stoping(){
    clearTimeout(tempo)
    //Para o setTimeout mas precisa de uma variavel global para isso acontecer
    document.getElementById('time').innerHTML = 'Parou de contar'
}

//SetInterval

function começar(){
    time = setInterval(function (){    
        var chrono =  document.getElementById('cronometro').innerHTML;
        var soma = Number(chrono) + 1
        document.getElementById('cronometro').innerHTML = soma;
    }, 1000)
}

function parar(){
    clearInterval(time);
}