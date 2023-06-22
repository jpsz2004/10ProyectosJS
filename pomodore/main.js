const tasks = [];//Guarda tareas
let time = 0;
let timer = null;
let timerBreak = null; //Descanso de 5 minutos
let current = null; //Tarea actual

const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");

form.addEventListener('submit', e => {
    e.preventDefault();//Anula el funcionamiento nativo del formulario
    if(itTask.value !== ''){
        createTask(itTask.value);
        itTask.value = '';
        renderTask();
    }
});

function createTask(value){
    const newTask = {
        id: (Math.random() * 100).toString(36).slice(3),
        title: value,
        completed: false
    };

    tasks.unshift(newTask);
}

function renderTask(){
    const html = tasks.map(tasks => {
        return `
            <div class="task">
                <div class ="completed">${task.completed ? `<span class ="done">Done</span>` : `<button class ="startButton" data-id="${task.id}">Start</button>`}</div>
                <div class ="title">${task.tile}</div>
            </div>
        `;
    });//iterar sobre cada uno de los elementos del arreglo

    const tasksContainer = document.querySelector('#tasks');
    tasksContainer.innerHTML = html.join("");
}