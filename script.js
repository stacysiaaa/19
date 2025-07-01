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

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        let itemDiv = document.createElement('div');
        itemDiv.className = 'product-item';

        let li = document.createElement('li');
        li.innerHTML = `${taskText}`;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Видалити';
        deleteBtn.className = 'btn-delete';
        itemDiv.appendChild(li);
        itemDiv.appendChild(deleteBtn);
        todoList.appendChild(itemDiv);
        taskInput.value = '';
    }
}

addBtn.addEventListener('click', () => {
    addTask();
});

taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }

    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-delete')) {
            e.target.closest('.product-item').remove();
        }
    })
});


let list = document.querySelector('.list');

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'H3') {
        let section = e.target.closest('.section');
        let content = section.querySelector('.content');
        content.classList.toggle('show');
    }
});

