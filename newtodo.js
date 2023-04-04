//Dom Element select

const todoForm = document.getElementById('todo-form')
const todoList = document.querySelector('ul.todos')
const totalTask = document.querySelector('#total-task')
const completedTask = document.querySelector('#completed-task')
const remainingTask = document.querySelector('#remaining-task')
const mainInput = document.querySelector('#todo-form input')


//get from id key local storage 

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = mainInput.value
    if (inputValue == '') {
        return
    }
    const task = {
        id : new Date().getTime(),
        name: inputValue,
        isCompleted: false
    }
    console.log(task)

})