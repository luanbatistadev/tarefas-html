const descricaoTarefa = document.querySelector('#tarefa');
const dataTarefa = document.querySelector('#data');
const form = document.querySelector('#form');
let listaTarefas = [];

function limparFormulario() {
    dataTarefa.value = '';
    descricaoTarefa.value = '';
}

const tarefasToLocalStorage = () => {
    localStorage .setItem("tarefas", JSON.stringify(listaTarefas));     
}

const result = document.querySelector('#result');

const resultToTable = () => {
    result.innerHTML = "";
    listaTarefas.forEach(tarefa => {
        const linha =  document.createElement('tr');
        const colunaDescricao =  document.createElement('td');
        colunaDescricao.innerHTML = tarefa.descricao;
        const colunaData = document.createElement('td');
        colunaData.innerHTML = tarefa.data;
        linha.appendChild(colunaDescricao);
        linha.appendChild(colunaData);
        result.appendChild(linha);
    })
}

const tarefasFromLocalStorage = () => {
     listaTarefas = JSON.parse(localStorage.getItem("tarefas"));
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const tarefa = {
        descricao: descricaoTarefa.value,
        data: new Date(dataTarefa.value),
        realizado: false,
    }

    listaTarefas.push(tarefa)
    limparFormulario()
    tarefasToLocalStorage()
    tarefasFromLocalStorage()
    resultToTable()
});