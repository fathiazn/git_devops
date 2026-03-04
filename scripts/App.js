const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTasks() {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <script src="scripts/App.js"></script>
            <div>
                <button onclick="toggleComplete(${index})">✔</button>
                <button onclick="deleteTask(${index})">✖</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        todos.push({ task, completed: false });
        taskInput.value = '';
        saveTasks();
    }
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    saveTasks();
}

function deleteTask(index) {
    todos.splice(index, 1);
    saveTasks();
}

addBtn.addEventListener('click', addTask);
window.onload = renderTasks;