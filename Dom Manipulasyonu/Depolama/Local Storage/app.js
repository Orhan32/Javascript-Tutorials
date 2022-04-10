// Local Storage

// Get Item

// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);

// console.log(localStorage.getItem("sport"));

// Local Storage - Array Yazma

// const todos = ["Todo 1", "Todo 2", "Todo 3"];

// localStorage.setItem("todos", JSON.stringify(todos));

// console.log(localStorage.getItem("todos"));

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e) {
    const value = todoInput.value;

    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));

    e.preventDefault();
}