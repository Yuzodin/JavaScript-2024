console.log('Eu voltei mas to por cima')

let cpu = 0
let player = 0

function sortear() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    cpu = min + Math.trunc(dif * aleatorio)
}

function tentar(){
    player = Number(document.getElementById('barra').value)

    if(player < cpu){
        document.getElementById('resp').innerHTML += `Você falou ${player}. Meu número é <strong>MAIOR</strong>! <br><br>`
    }
    else if(player > cpu){
        document.getElementById('resp').innerHTML +=  `Você falou ${player}. Meu número é <strong>MENOR</strong>! <br><br>`
    }
    else{
        document.getElementById('resp').innerHTML += `PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${cpu}! <br><br>` 
    }
}