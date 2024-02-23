function verificar(){
    let num = document.getElementById('tabu')
    let tab = document.getElementById('seção')
    let p = document.getElementById('resp')
    if (num.value.length == 0){
        p.innerHTML = 'Erro Digite um número'
        p.style.color = 'red'
    }else{
        let n = Number(num.value) 
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            tab.appendChild(item)
            c++
        }
    }
}