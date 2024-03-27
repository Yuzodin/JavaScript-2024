console.log('don t you cry no more')

var ano = new Date().getFullYear()

function calcular(){
    var idade = Number(document.getElementById('nascimento').value)
    var soma = ano - idade
    document.getElementById('texto').innerHTML = `Você nasceu no ano de ${soma}`
}