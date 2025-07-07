let menu = document.querySelector(".menu");
let tooltip = document.querySelector(".tooltip");

menu.addEventListener('mouseover', (e) => {
    let link = e.target.closest('a[data-tooltip]');
    if (!link) return;

    tooltip.textContent = link.getAttribute('data-tooltip');

    let rect = link.getBoundingClientRect();
    tooltip.style.left = rect.left + window.scrollX + 'px';
    tooltip.style.top = rect.top + window.scrollY - 35 + 'px';

    tooltip.classList.add('show');
});

menu.addEventListener('mouseleave', () => {
    tooltip.classList.remove('show');
});

let addBtn = document.querySelector('.addBtn');
let taskInput = document.querySelector('.taskInput');
let todoList = document.querySelector('.todoList');

let tasks = [];

function renderTasks() {
    todoList.innerHTML = '';

    tasks.forEach((task, index) => {
        let itemDiv = document.createElement('div');
        itemDiv.className = 'product-item';

        let li = document.createElement('li');
        li.textContent = task;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Видалити';
        deleteBtn.className = 'btn-delete';
        deleteBtn.setAttribute('data-index', index);

        itemDiv.appendChild(li);
        itemDiv.appendChild(deleteBtn);
        todoList.appendChild(itemDiv);
    });
}

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push(taskText);
        taskInput.value = '';
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}


addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});


todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete')) {
        let index = e.target.getAttribute('data-index');
        deleteTask(index);
    }
});


let list = document.querySelector('.list');

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'H3') {
        let section = e.target.closest('.section');
        let content = section.querySelector('.content');
        content.classList.toggle('show');
    }
});

