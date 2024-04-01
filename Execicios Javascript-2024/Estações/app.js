console.log('Dia Atípico')

function procura(){
    let nas = document.getElementById('mes').value.toUpperCase();
    switch (nas){
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            document.getElementById('comoesta').innerHTML = `Em ${nas} Estamos na estação do VERÃO`
            break
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            document.getElementById('comoesta').innerHTML = `Em ${nas} Estamos na estação do PRIMAVERA`
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            document.getElementById('comoesta').innerHTML = `Em ${nas} Estamos na estação do INVERNO`
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            document.getElementById('comoesta').innerHTML = `Em ${nas} Estamos na estação do OUTONO`
            break
        default:
            estação = 'INDEFINIDA'
            break    
    }
}