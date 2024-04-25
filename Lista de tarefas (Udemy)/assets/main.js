console.log('O pequeno mestre o lobo retornou!');

const tarefa = document.querySelector('.inputnew');
const butao = document.querySelector('.add');
const ultarefa = document.querySelector('.tarefas');

function criali() {
    return document.createElement('li');
}

tarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if (!tarefa.value) return;
        criaTarefa(tarefa.value);
    }
});

function limpainput(){
    tarefa.value = '';
    tarefa.focus();
}

function botaoapagar(li){
    const botaoapagar = document.createElement('button');
    botaoapagar.innerHTML = 'Apagar'
    botaoapagar.setAttribute('class', 'apagar');
    li.appendChild(botaoapagar);
}

function criaTarefa(texto) {
    const li = criali();
    li.innerHTML = texto;
    ultarefa.appendChild(li);
    limpainput();
    botaoapagar(li);
    salvartarefa();
}

function acao() {
    if (!tarefa.value) return;
    criaTarefa(tarefa.value);
}

butao.addEventListener('click', acao);

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar'))
        el.parentElement.remove();
    salvartarefa();
});

function salvartarefa(){
    const litarefa = ultarefa.querySelectorAll('li');
    const listadetarefas = [];

    for(let tarefa of litarefa){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listadetarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listadetarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function ler(){
    const tarefasJSON = localStorage.getItem('tarefas');
    if(tarefasJSON) {
        const listadetarefas = JSON.parse(tarefasJSON);
        for(const tarefa of listadetarefas){
            criaTarefa(tarefa);
            
        }
    }
}

ler();
