/*for (var c = 0; c < 11; c++){

}    document.getElementById('teste').innerHTML += c +", "*/

//Seleção de ano usando for

let ano = new Date().getFullYear()

for (let i = ano; i >= 1900; i--){
    document.getElementById('ano').innerHTML += "<option value='"+i+"'>"+i+"<option>"
}

//For usando Array

const carros = ["Monza", "Opala", "Celta", "Fusca", "Marea"]
//Forma convencional de se chamar array document.getElementById('teste').innerHTML = carros
totcar = carros.length

for (let i = 0; i < totcar; i++){
    document.getElementById('teste').innerHTML += carros[i] + " , "
}
//assim ele percorre todo array


//While
/*let c = 1
while (c <= 6){
    //alert('Tudo bem! na nada mal.')
    c++
    document.getElementById('txt').innerHTML += 'Tudo bom! na nada mal <br>'
}*/ //While Simples

let c = 0
/*do{
    document.getElementById('txt').innerHTML += 'Tudo bom! na nada mal <br>'
    c++ 
}while(c < 6)*/

while (c <= 7){
    document.getElementById('txt').innerHTML += 'Eu sou tudo bom <br>'
    c++
}

//While percorrendo dentro da matriz

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0
let text = "";

while (cars[i]){
    text = cars[i] + "<br>";
    i++
    document.getElementById('demo').innerHTML +=  text
}