
// JavaScript code for handling todo list functionality
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');
const errorMessage = document.getElementById('error-message');

let todos = [];

// Function to render the todo list
function renderTodos() {
    // Clear the list
    list.innerHTML = '';

    // Loop through each todo and add it to the list
    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const label = document.createElement('label'); //lable
        label.textContent = todo;

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
            showEditSuccessMessage("Todo Deleted", "#00ffff")
            renderTodos();
        });

        // Add event listener for edit button
        editBtn.addEventListener('click', () => {
            const newTodo = prompt('Enter new todo:', todo);

            if (newTodo !== null) {
                todos = todos.map(item => item === todo ? newTodo : item);
                renderTodos();
                showEditSuccessMessage("Todo edited", "white")
            }
        });
    });
}

// Add event listener for form submission
form.addEventListener('submit', event => {
    event.preventDefault();
    const todo = input.value.trim();

    if (todo !== '') {
        if (todos.includes(todo)) {   // same name don't allow 
            errorMessage.style.display = 'block';
            input.focus();
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 2000);
            input.focus();
            return;
        }
        todos.push(todo);
        input.value = '';
        renderTodos();
        showEditSuccessMessage("Todo Added", "white")
        errorMessage.style.display = 'none';
    }
});
//popup message
function showEditSuccessMessage(message, color) {
    const popup = document.getElementById("edit-popup");
    popup.textContent = message;
    popup.style.color = color;
    popup.classList.add("show");
    setTimeout(() => {
        popup.classList.remove("show");
    }, 2000);
}
// function showAlert(message) {
//     alert(message);
//     setTimeout(() => {
//       alert.close();
//     }, 3000);
//   }

