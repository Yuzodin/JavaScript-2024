const iop = (n) => {
    if (n % 2 == 0)
        return 'Par'
    else{
        return 'Impar'
    }
}

const resu = iop(60) 
console.log(resu)


const media = (n1, n2,div) => (n1 + n2) / div;

const Resultadomedia = media(7,3,2)
console.log(Resultadomedia)

//è possivel passar parametros até com nomes
const Nome = (no1, sobr) => no1 + sobr;

const nomecompleto = Nome('Yuri', ' Camini');
console.log(nomecompleto)