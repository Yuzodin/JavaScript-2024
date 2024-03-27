console.log('O empresario é o Pepe Guardiola')

let c = 0

function Cont(){
    c ++
    document.getElementById('texto').innerHTML = `Contador está em <mark>${c}</mark>`
}
function reset(){
    c = 0
    document.getElementById('texto').innerHTML = 'Contador está <mark>zerado</mark>'
}