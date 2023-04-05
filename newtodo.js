//Dom Element select

const todoForm = document.getElementById('todo-form')
const todoList = document.querySelector('ul.todos')
const totalTask = document.querySelector('#total-task')
const completedTask = document.querySelector('#completed-task')
const remainingTask = document.querySelector('#remaining-task')
const mainInput = document.querySelector('#todo-form input')


//get from id key local storage 

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//get data from local storage Shows in Ui
if (localStorage.getItem('tasks')) {
    tasks.map((task) => {
        createTask(task)

    })

}


todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = mainInput.value
    if (inputValue == '') {
        return
    }
    const task = {
        id: new Date().getTime(),
        name: inputValue,
        isCompleted: false
    }
    console.log(task)
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    createTask(task)
    todoForm.reset()
    mainInput.focus()
})

// when click on close button it op will remove from the task in parent li 

todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-task') || e.target.
        parentElement.classList.contains('remove-task') || e.target.
            parentElement.parentElement.classList.contains('remove-task')) {
        const taskId = e.target.closest('li').id

        removeTask(taskId)
        // todoList.removeChild(taskId)

    }
})

//update

todoList.addEventListener('input', (e) => {
    const taskId = e.target.closest('li').id

    updatedTask(taskId, e.target)
    console.log(updatedTask)
})
// task id access assign & access 
function createTask(task) {
    const taskE1 = document.createElement('li')

    taskE1.setAttribute('id', task.id)

    if (task.isCompleted) {
        taskE1.classList.add('complete')
    }
    const taskE1Markup = `
                     <div>
                        <input type="checkbox" name="task" id="${task.id}" ${task.isCompleted ? 'checked' : ''}>
                        <span ${!task.isCompleted ? 'contenteditable' : ''}>${task.name} </span>
                    </div>
                    <button title="remove the" ${task.name} "task"  class="remove-task">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
                                fill="currentColor" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                                fill="currentColor" />
                        </svg>
                    </button>
                  `
    taskE1.innerHTML = taskE1Markup;
    todoList.appendChild(taskE1)
    countTasks()
}

//count-task function 
function countTasks() {
    const completedTasksArray = tasks.filter((task) =>
        task.isCompleted === true)

    completedTask.textContent = completedTasksArray.length
    totalTask.textContent = tasks.length
    remainingTask.textContent = tasks.length - completedTasksArray.length

}

// removeTask task function
function removeTask(tasksId) {
    tasks = tasks.filter((task) => task.id !== parseInt(tasksId))
    localStorage.setItem('tasks', JSON.stringify(tasks))
    document.getElementById(tasksId).remove()
    countTasks()
}

function updatedTask(taskId, el) {
    const task = tasks.find((task) => task.id === parseInt(taskId))

    if(el.hasAttribute('contenteditable')){
        task.name = el.textContent
    }else{
        const span = el.nextElementSibling
        const parent = el.closest('li')

        task.isCompleted = !task.isCompleted
        
        if(task.isCompleted){
            span.removeAttribute('contenteditable')
            parent.classList.add('complete')
        }else{
            span.setAttribute('contenteditable', 'true')
            parent.classList.remove('complete')

        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks))

    countTasks()//update
}

// console.log()