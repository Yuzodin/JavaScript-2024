console.log('Eu vou viver pra a 30 dominar o mundo')

function calcular(){
    let name = document.getElementById('nome').value;
    let not1 = Number(document.getElementById('n1').value);
    let not2 = Number(document.getElementById('n2').value);
    let med = (not1 + not2) / 2.

    let msg 
    if (med >= 7){
        msg = `Bom trabalho`
    }
    else{
        msg = `Insuficiente estude um pouco mais`
    }

    document.getElementById('resu').innerHTML = `Calculando a nota do Aluno ${name}`
    document.getElementById('notas').innerHTML = `As notas obtidas foram ${not1} e ${not2} <br> sua nota final foi de ${med.toFixed(1)}`
    document.getElementById('msg').innerHTML = msg
};


