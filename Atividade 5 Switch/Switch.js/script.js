let weekday = new Date().getDay();

switch (weekday){
    case 0:
        alert('Domingo')
        break
    case 1:
        alert('Segunda-Feira')
        break
    case 2:
        alert('Terça-Feira')
        break
    case 3:
        alert('Quarta-Feira')
        break
    case 4:
        alert('Quinta-Feira')
        break
    case 5:
        alert('Sexta-Feira')
        break
    case 6:
        alert('Sabado')
        break
    default:
        alert('[ERROR dia invalido]')
        break
}
//Exemplo 1

function verifica_Cor(){
    let cor = document.getElementById('cor').value.toLowerCase();;
    

    switch (cor){
        case "azul": //cor vinda do input
            //o acontece aqui dentro
            document.body.style.backgroundColor = 'blue'
            document.body.style.color = 'white'
            break
        case "vermelho":
            document.body.style.backgroundColor = 'red'
            document.body.style.color = 'white'
            break
        case "amarelo":
            document.body.style.backgroundColor = 'yellow'
            document.body.style.color = 'black'
            break
        case "verde":
            document.body.style.backgroundColor = 'green'
            document.body.style.color = 'white'
            break
        default:
            document.getElementById('teste').innerHTML = 'Cores indisponiveis tente novamente. Ex:(azul, vermelho, amarelo ou verde)'
    }
}