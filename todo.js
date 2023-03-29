
// JavaScript code for handling todo list functionality
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');
let todos = [];

// console.log(form)
// console.log( document.body.firstChild)

let a = document.getElementById('todo-list')
console.log(a.firstElementChild)
// const red = () =>{
//   let a = document.getElementsByClassName("submit")​

// }  

// Function to render the todo list
function renderTodos() {
  // Clear the list
  list.innerHTML = '';
  
  // Loop through each todo and add it to the list
  todos.forEach(todo => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    console.log(todoItem)
    console.log(todos)
    
    const label = document.createElement('label'); //lable
    label.textContent = todo;

    // console.log(newTask)
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    
    todoItem.appendChild(label);
    todoItem.appendChild(editBtn);
    todoItem.appendChild(deleteBtn);
    list.appendChild(todoItem);
    
    // Add event listener for delete button
    deleteBtn.addEventListener('click', () => {
      todos = todos.filter(item => item !== todo);
      renderTodos();
    });
  
    // Add event listener for edit button
    editBtn.addEventListener('click', () => {
      const newTodo = prompt('Enter new todo:', todo);
      
      if (newTodo !== null) {
        todos = todos.map(item => item === todo ? newTodo : item);
        renderTodos();
      }
    });
  });
}

// Add event listener for form submission
form.addEventListener('submit', event => {
  event.preventDefault();
  const todo = input.value.trim();
  
  if (todo !== '') {
    todos.push(todo);
    input.value = '';
    renderTodos();
  }
});


let b = setTimeout(()=>{
    if(editBtn == editBtn){
        alert("edit sucessfully")
    }
}, 1000)
console.log(b)
