console.log("Hello, World!");

let todos = [];

function addTodo(event) {
    event.preventDefault(); // Prevent form submission
    // ambil value dari input
    const todoInput = document.getElementById("todo-input");
    const dateInput = document.getElementById("date-input");
    if (validateInput(todoInput.value, dateInput.value)) {         
        // masukkan ke array
        let todo = { task: todoInput.value, date: dateInput.value }
        todos.push(todo);
        renderTodo();
    }
    
}

function renderTodo() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = ''; // Clear existing list
    todos.forEach((todo, index) => {
        todoList.innerHTML += `
            <li id="todo-item">
                <div>
                    <p id="task-list">${todo.task}</p>
                    <p id="task-date">${todo.date}</p>
                </div>
                <button id="delete-task" onclick="deleteTodo(${index})">Delete</button>
            </li>
        `;
    });
}
                

function deleteAllTodo() {}

function filterTodo() {}

function validateInput(todo, date) {
    if (todo === '' || date === '') {
        alert("Please fill in both the task and date fields.");
        return false;
    }
    return true;

}