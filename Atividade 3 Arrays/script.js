console.log('Lista de compras')
                //0         //1       //2       //3
const lista = ["Arroz", "Feijão", "Macarrão", "Batata"]
/*let item = lista[3]
alert(item)*/
//alrta com let da lista

/*alert(lista[2]) alert da lista*/

lista[0] = 'Café'
/*alert(lista[0]) exemplo de atribuição mudando arroz para café*/

console.log(lista)

document.getElementById('comprimento').innerHTML = (lista[2].length) // comprimento da palavra

//Diferenças entre arrays e objects

const pessoa = ["Yuri", "Camini", 19]; // Array
const pessoal = {Nome: "Yuri", Sobrenome: "Camini", Idade: 19}; //Object

//Como chamar object
console.log(pessoal.Sobrenome);

//Como chamar array
console.log(pessoa[0]);

//para ver quantos dados a no array
pessoa.length; //(3)

//Adicionar mais um dado a matriz
pessoa.push("Estudante de JavaScript")
pessoa.push("Brasileiro")
console.log(pessoa)

//para saber se matriz esta certa ou existe use o isArray
Array.isArray(pessoa) // return True

//Exemplo de não Array
const y = "Yuri"
Array.isArray(y) // return False

//removendo o ultimo nome da matriz
pessoa.pop();
//metodo pop remove a ultimo nome da matriz

//removendo o primeiro nome com o metodo shift
pessoa.shift()

//unshift adiciona uma nova informação em primeiro
pessoa.unshift("Yuzodin")

document.getElementById('teste').innerHTML= pessoa.join(" - ") // metodo join permite mudaças na exibição de html 

// para suntar um array ao outro se usa o metodo concat

const lista1 = ["Arroz", "Feijão", "Macarrão", "Batata"];
const lista2 = ["Suco", "Refrigerante", "Leite"];
//è possivel adicionar quntas listas forem necessarias
const lista3 = ["Carnes", "Queijo"]
const superlista = lista1.concat(lista2, lista3)

//ocument.getElementById('teste').innerHTML= superlista.join(" - ")

//Fatiar Matriz

const jogadores = [
    "Leo Pelé", 
    "Ribamar", 
    "Cristiano Ronaldo", 
    "Messi",
    "Neymar",
    "Haaland",
    "Paulo Vitor",
    "Gabirú"
]
const craques = jogadores.slice(2,6)// slice fatia a matriz procurando pela posição do fatiamento. tambem pode ser escolhido até quando sera fatiado
//ex: slice(2,6)

//Deixando tudo em ordem alfabetica: 
const Ordem_de_jogadoes = jogadores.sort();// para fazer a ordem de cresente use o reverse()

//document.getElementById('jogafino').innerHTML = craques.join("/")

document.getElementById('jogafino').innerHTML = Ordem_de_jogadoes.join("/")

//Agora matriz de numeros:

const numeros = [40,1212,35,7,84,90,32]
numeros.sort(function (a,b){return a - b})// sequenciaa b- a terno a ordem decresente

document.getElementById('jogafino').innerHTML = numeros.join('-')
//slice não funciona em numeros pois deixa as coisas em ordem alfabeticas deve se fazer outro de tipo de metodo
//funtion (a, b) {return a - b})  - para deixar numeros em ordem 