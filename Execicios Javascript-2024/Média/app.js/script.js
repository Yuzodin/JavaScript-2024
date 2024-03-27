console.log('Mais do que o tempo o experimento')

function calcular(){
    var name = document.getElementById('nome').value;
    var v1 = Number(document.getElementById('n1').value);
    var v2 =Number(document.getElementById('n2').value);
    media = ((v1 + v2)/2).toFixed(1)

    document.getElementById('resultado').innerHTML =`Calculando a média final do aluno: ${name}`
    document.getElementById('resp').innerHTML =`As notas obtidas foram ${v1.toFixed(1)} e ${v2.toFixed(1)} dando a média final de ${media}`
}