/*Trabalhando com Datas em JavaScript*/

//Para pegar a data atual
let data = new Date();
console.log(data)

//Para pegar o ano atual com 4 digitos

let ano = data.getFullYear();
console.log(ano)

//Para pegar o mês atual 

let mes = data.getMonth();
// Os meses no JavaScript funcionam com um array são contados de 0 a 11
console.log(mes)

//Para mostrar o mês escrito:
const mesEscrito = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", 
"Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]   

let superMes = mesEscrito[data.getMonth()]
console.log(superMes)


//Dia do mês 

let dia = data.getDate();
console.log(dia)

//Para pegar o dia da semana também de 0 até 6

let diasemana = data.getDay();
console.log(diasemana)

//Dia da semana em forma escrita

const diaweek = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"]

let week = diaweek[data.getDay()]
console.log(week)
