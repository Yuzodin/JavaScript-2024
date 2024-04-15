console.log('É o Corintia')

function tabuada(){
    let num = Number(document.getElementById('mostra').value)
    document.getElementById('saida').innerHTML = `<h3>Tabuada do ${num}</h3>`

    for(let c = 1; c <= 10; c++){
        document.getElementById('saida').innerHTML += `<br> ${num} X ${c} = ${num * c}`
    }
}