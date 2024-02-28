const algo = ['fist', 'once', 'twice', 'finish'];

algo.unshift('Em_Primeiro')
algo.push('Algo_em_Ultimo')

//console.log(algo[5])

//Percurso em vetores

const valores = [8, 12, 77, 45, 96, 33, 88];

console.log(valores)

//forma feita com for
/*for(let c = 0; c <= 5; c++){
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}*/

//forma feita com while
/*let c =0
while(c < valores.length){
    console.log(`A posição ${c} tem os valores de ${valores[c]}`)
    c++
}*/

//Forma simplificada // Melhor forma //
for (let c in valores){
    console.log(`A posoção ${c} tem os valores ${valores[c]}`)
}

//Buscando valores dentro do array
let mostre = valores.indexOf(88)
//valores.indexOf(88)
console.log(`O valor 88 está na posição ${mostre}`)