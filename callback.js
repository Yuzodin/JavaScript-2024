//Função que gera um numero aleatorio
function time(min = 800, max = 3000){
    const num = Math.random() * (min - max ) + min;
    return Math.floor(num);
}

function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if(callback) callback;
    }, time())
}
function f2(){
    setTimeout(function(callback){
        console.log('f2')
        if(callback) callback;
    },  time()) 
}
 function f3(){
    setTimeout(function(callback){
        console.log('f3') 
        if(callback) callback;
    }, time())
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log('Hello Word')         
        })
    })
});



//Gerando Numeros aleatorios atraves do setTimeout na mão
/*
function f1(){
    setTimeout(function(){
        console.log('f1')
    }, 2000)
}
function f2(){
    setTimeout(function(){
        console.log('f2')
    },  600) 
}
 function f3(){
    setTimeout(function(){
        console.log('f3') 
    }, 800)
}

f1();
f2();
f3();
console.log('Hello Word')
*/ 