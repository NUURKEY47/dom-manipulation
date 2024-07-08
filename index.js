//  const elements= document.querySelectorAll('ul');

//  const firstElement= element.firstElementChild;
//  console.log(firstElement);

// console.log(element);

// elements.forEach( element=>{
// console.log(element);
// // });
// const body=document.body;

// const h1= body.append('h1');
// h1.textcontent="masternuuurkey";
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const showAllBtn = document.getElementById('showAll');
    const showCompletedBtn = document.getElementById('showCompleted');
    const showIncompleteBtn = document.getElementById('showIncomplete');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleTaskCompletion);

        const span = document.createElement('span');
        span.textContent = taskText;
        span.contentEditable = true;
        span.addEventListener('blur', editTask);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteTask);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
        taskInput.value = '';
    }

    function toggleTaskCompletion(e) {
        const li = e.target.parentElement;
        if (e.target.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    }

    function deleteTask(e) {
        const li = e.target.parentElement;
        taskList.removeChild(li);
    }

    function editTask(e) {
        const span = e.target;
        // The text content is automatically updated due to contentEditable
    }

    function filterTasks(filter) {
        const tasks = taskList.children;
        for (let task of tasks) {
            switch (filter) {
                case 'all':
                    task.style.display = 'flex';
                    break;
                case 'completed':
                    task.style.display = task.querySelector('input').checked ? 'flex' : 'none';
                    break;
                case 'incomplete':
                    task.style.display = !task.querySelector('input').checked ? 'flex' : 'none';
                    break;
            }
        }
    }
// conclution
    showAllBtn.addEventListener('click', () => filterTasks('all'));
    showCompletedBtn.addEventListener('click', () => filterTasks('completed'));
    showIncompleteBtn.addEventListener('click', () => filterTasks('incomplete'));
});
