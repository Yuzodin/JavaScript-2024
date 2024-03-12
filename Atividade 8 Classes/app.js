//Classes seriam como uma fabrica de construção de carros ex: abaixo

class /* Chamada da classe */ Car /*O parametro da classe sempre em Maiusculo*/{
    constructor /*(O Construtor de carros EX)*/(v1, v2, v3, v4, v5){
        this.marca = v1
        this.modelo = v2
        this.ano = v3
        this.preço = v4
        this.velocidade_maxima = v5
        //Tambem a como colocar funções dentro da classe
    }
    buzina(){
        return this.modelo + " bizinou: BIIII" //Com this.modelo caso haja outro modelo de carro ele especifica qual o modelo
    }
}

//Apos a fabrica construida podesse chamar o carro

const monza = new Car ("Chevrolet", "Tubarão", 96, 13.943, "172 km/h")  // Novas informações são passadas aqui
console.log(monza.buzina())

