function carro(modelo, marca, ano, tamanho){
this.modelo = modelo
this.marca = marca
this. anos = ano
this. tamanho = tamanho
this.liga = () => {
    return 'Estou ligando..'
}
};

const carro1 = new carro('Uno', 'Fiat', '2013', 'Pequeno');
console.log(carro1)
console.log(carro1.liga())

const carro2 = new carro ('Palio', 'Fiat', '2015', 'Médio');
console.log(carro2)
console.log(carro2.liga())

const carro3 = new carro ('Toro', 'Fiat', '2018', 'Grande');
console.log(carro3)
console.log(carro3.liga())
