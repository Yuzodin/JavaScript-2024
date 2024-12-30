const Produtos =[
    { id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
    { id: 2, nome: 'amaciante', valor: 6.50, categoria: 'limpeza' },
    { id: 3, nome: 'pão', valor: 2.00, categoria: 'alimento' },
    { id: 4, nome: 'leite', valor: 2.20, categoria: 'alimento'},
    { id: 5, nome: 'queijo', valor: 7.00, categoria: 'alimento'}
]

const Insercao = 'alimento'


const idsProduto = Produtos.map(produto => produto.id)
const nomeProduto = Produtos.map(produto => Insercao)

console.log(nomeProduto)
console.log(Produtos)

//Basicamente isso aqui é o map pegando os numeros de numeros e multiplicando por 2
const numeros = [1, 2, 3, 4, 5]
const duplicaNumeros = numeros.map( x => x *2)

console.log(duplicaNumeros)
console.log(numeros)


//Map com Filter 

const alimentos = Produtos.filter(produto => produto.categoria === "alimento");
console.log(alimentos.map (alimento => alimento.nome))




//Exercios

// Dado o array de números abaixo, crie um novo array onde cada número seja o dobro do valor original.
const numerosEx = [2,4,6,8,10]
const dobraNumeros = numerosEx.map(num => num * 2)

console.log("Resultado Map")
console.log(dobraNumeros)

console.log("Resultado Filter")

// Dado o array de números abaixo, crie um novo array contendo apenas os números pares.
const NumerosPares = [1,2,3,4,5,6,7,8,9,10]
const FiltraPares = NumerosPares.filter( num => num % 2 == 0 )

console.log(FiltraPares)

// Dado um array de objetos representando usuários, filtre apenas os usuários ativos e crie um novo array contendo apenas seus nomes.
const Usuarios = [
    { nome: 'João', ativo: true},
    { nome: 'Maria', ativo: false },
    { nome: 'Pedro', ativo: true },
    { nome: 'Ana', ativo: false }
]

let novosUsuarios = Usuarios.push({ nome: 'Aloiso', ativo: true}, { nome: 'Andreia' , ativo: true}, { nome: 'Rogério', ativo: false})

let UsuariosAtivos = Usuarios.filter(ativo => ativo.ativo === true).map(nomeAtivo => nomeAtivo.nome)

console.log(`Os usuarios que se usuarios que se encontram ativos são ${UsuariosAtivos}`)


const carrosRodando = [
    { marca: "Volkswagen", modelo: "Gol", ano: 2023, cor: "prata", status: 'Na estrada' },
    { marca: "Toyota", modelo: "Corolla", ano: 2022, cor: "branco", status: 'Na estrada' },
    { marca: "Honda", modelo: "Civic", ano: 2021, cor: "preto", status: 'Na garagem' },
    { marca: "Chevrolet", modelo: "Onix", ano: 2020, cor: "cinza", status: 'Na garagem' },
    { marca: "Tesla", modelo: "Model S Plaid", ano: 2021, cor: "prata", status: 'Na garagem' }, 
    { marca: "Porsche", modelo: "911 Turbo S", ano: 2022, cor: "vermelho", status: 'Na estrada' }, 
    { marca: "Jeep", modelo: "Wrangler Rubicon", ano: 2021, cor: "preto", status: 'Na estrada' },
    { marca: "Fiat", modelo: "500 Abarth", ano: 2019, cor: "amarelo", status: 'Na garagem'} 
];

let verificaVeiculo = carrosRodando.filter(carro => carro.status === 'Na estrada' && carro.ano === 2021).map(mostracarro => mostracarro.modelo)

console.log(verificaVeiculo)

console.log('preço do Dolar Abaixo')

// Dado um array de preços em dólares, converta-os para reais considerando uma taxa de conversão de 1 dólar = 5 reais.
let precoDolares = [10, 20, 30, 40 , 50]

let ConversorDolares = precoDolares.map(precoDolar => precoDolar * 5)

console.log(ConversorDolares)

// Dado um array de palavras, crie um novo array contendo apenas as palavras com mais de 5 letras.
const palavras = ['casa', 'apartamento', 'carro', 'bicicleta', 'computador'];
const FiltraPalavras = palavras.filter(palavra => palavra.length > 5)

console.log(FiltraPalavras)


// Dado um array de números, filtre os números maiores que 50 e crie um novo array com esses números dobrados.
const numerosDobra = [10, 20, 55, 70, 100, 40];

const NumeroMaiorParaDobra = numerosDobra.filter(numerodobra => numerodobra > 50).map(numerodobra => numerodobra * 2)

console.log(NumeroMaiorParaDobra)