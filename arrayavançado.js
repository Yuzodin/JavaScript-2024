//Declaração de função
helo();

function helo(){
    console.log('Hello!')
}
//Dentro de um objeto 

const obj = {
    falar: function(){
        console.log('Pronto eu estou falando..')
    }
}

obj.falar();

//Outra forma 

const dado = function(){
    console.log('Pronto aqui está um dado!')
}

dado();

//Variavel especial arguments que sustenta todos os argumentos enviados
function funcao(a, b, c, d, e){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total, a, b, c, d, e)// Parametros para seus respectivos valores
}

funcao( 1, 2, 3, 4, 5);

//Objeto dentro da função
function onfu({nome,sobrenome,idade}){
    console.log(nome, sobrenome, idade)
}

onfu({nome: 'Gabiru', sobrenome: 'Perreira', idade: '25'})
onfu({nome: 'Gilcimar', sobrenome: 'Pinto', idade: '32'})

//Com array no parametro
function rifu([v1, v2, v3]){
    console.log(v1,v2,v3)
}
rifu(['Adalberto', 'Soares', 20])