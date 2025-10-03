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
        todoInput.value = ''; // clear input field
        dateInput.value = ''; // clear input field
    }    
}

function renderTodo() {
    // ambil elemen list
    const todoList = document.getElementById("todo-list"); 
    todoList.innerHTML = ''; // hapus isi list sebelumnya

    todos.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
    }); // sortir berdasarkan tanggal

    // render ulang list
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

function validateInput(todo, date) {
    if (todo === '' || date === '') {
        alert("Please fill in both the task and date fields.");
        return false;
    }
    return true;

}

function deleteAllTodo() {
    todos = [];
    renderTodo();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodo();
}

function filterTodo(month) {
    const todoList = document.getElementById("todo-list"); 
    todoList.innerHTML = ''; // hapus isi list sebelumnya

    const filteredTodos = todos.filter(todo => {
        const todoMonth = new Date(todo.date).getMonth() + 1; // ambil bulan dari tanggal
        return todoMonth === month;
    });
    filteredTodos.forEach((todo, index) => {
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

function filterOnClick() {
    const selectedMonth = document.getElementById("month-filter").value;
    const month = parseInt(selectedMonth);
    if (isNaN(month)) {
        renderTodo(); // jika tidak ada bulan yang dipilih, tampilkan semua todo
    } else {
        filterTodo(month);
    }
}
