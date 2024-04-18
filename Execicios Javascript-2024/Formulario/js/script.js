console.log('Tem coca aí na geladeira')

function meuEscopo(){
    const form = document.querySelector('.form');
    const resu = document.querySelector('.resultado');

    const pessoa = [];

    /*form.onsubmit = function(evento){
        evento.preventDefault();
        alert('tem coca aí na geladeira')
        console.log('Então tem coca aí na geladeira?')
    };*/ // Uma das formas de se fazer esse envio de formulario

    function recebe_evento_form(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoa.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoa)
        resu.innerHTML += `<p>Nome: ${nome.value}, Sobrenome: ${sobrenome.value},
         Peso: ${peso.value}, Altura: ${altura.value}.</p><p>Para cadastrar uma nova pessoa reinicie a pagina</p>`
         alert('Enviado com sucesso')
        ;
    }

    form.addEventListener('submit', recebe_evento_form);
}
meuEscopo();