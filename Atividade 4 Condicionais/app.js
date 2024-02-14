let hora = new Date().getHours();

if (hora < 12){
    document.getElementById('horario').innerHTML= `Bom dia! Yuri Está um dia lindo lá fora são ${hora} horas da manhã.`
} else if(hora <= 18){
    document.getElementById('horario').innerHTML= `Boa tarde Yuri!! Está um tarde bem quente lá fora são ${hora} horas da tarde.`
}
else{
    document.getElementById('horario').innerHTML= `Boa noite Yuri! Está uma noite agradavel lá fora  são ${hora} horas da noite.`
}
// Validação de formulario
function verificar(){
    let nome = document.getElementById('nome').value;
    
    if (nome == "" || nome == null){
        let p = document.getElementById('teste');
        p.innerHTML = 'A caixa de texto não pode ficar em branco!'
        p.style.color = "red"
    }else{
        let p = document.getElementById('teste');
        p.innerHTML = 'Sua resposta foi enviada com sucesso aguarde nossa equipe entrar em contato ;)'
        p.style.color = "green"
    }
}

//Segunda Parte

/*let idade = 4

if (idade < 16){
    alert('Não vota')
}else if(idade < 18 || idade > 70){
    alert('Voto facultativo')
}else{
    alert('Vota')
}*/



//W3shools
/*let time = 22;

if (time <= 10){
    alert('Good morning')
}else if (time <= 20){
    alert('Good Day')
}else{
    alert('Good Evening')
}*/
