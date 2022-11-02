const descricaoTarefa = document.querySelector('#tarefa');
const dataTarefa = document.querySelector('#data');
const form = document.querySelector('#form');
const listaTarefas = [];

function limparFormulario() {
    dataTarefa.value = '';
    descricaoTarefa.value = '';
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const tarefa = {
        descricao: descricaoTarefa.value,
        data: dataTarefa.value,
        realizado: false,
    }

    listaTarefas.push(tarefa);
    limparFormulario();
});