// Formdaki Elementleri Seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondtCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { // Tüm Event Listener'lar
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUı);
    secondtCardBody.addEventListener("mouseup", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos)
}

function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(listItem => {
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            // Bulamadı
            listItem.setAttribute("style", "display: none !important");
        }
        else {
            listItem.setAttribute("style", "display: block");
        }
    });
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();

    if (newTodo === "") {
        showAlert("danger", "Lütfen Bir Todo Giriniz..", 1000);
    }
    else {
        addTodoToUı(newTodo);
        showAlert("success", "Todo Başarıyla Eklendi.", 1500);
        addTodoToStorage(newTodo);
    }
    e.preventDefault();
}

function deleteTodo(e) {
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteTodoStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Todo Başarıyla Silindi.", 1500);
    }
}

function clearAllTodos(e) {
    if (confirm("Tümünü Silmek İstediğinize Emin Misiniz?")) {
        // Arayüzden Todoları Temizleme
        //todoList.innerHTML = ""; // Yavaş
        while (todoList.firstElementChild !== null) {
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
        showAlert("success", "Tüm Todo'lar Başarıyla Silindi.", 1500);
    }
}

function deleteTodoStorage(deleteTodo) {
    let todos = getTodosStorage();

    todos.forEach(function (todo, index) {
        if (todo === deleteTodo) {
            todos.splice(index, 1);
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodosToUı() {
    let todos = getTodosStorage();
    todos.forEach(e => {
        addTodoToUı(e);
    });
}

function getTodosStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}

function addTodoToStorage(newTodo) {
    let todos = getTodosStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type, message, timeOut) {
    const alert = document.createElement("div");
    alert.className = "alert alert-" + type;
    alert.role = "alert";
    alert.textContent = message;

    firstCardBody.appendChild(alert);

    // setTimeOut
    if (timeOut > 0) {
        setTimeout(() => {
            alert.remove();
        }, timeOut);
    }
    else {
        setTimeout(() => {
            alert.remove();
        }, 1000);
    }
}


function addTodoToUı(newTodo) {
    // List item oluşturma

    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";

    // Texk Node ekleme

    listItem.appendChild(document.createTextNode(newTodo));

    // Link oluşturma

    const listLink = document.createElement("a");
    listLink.href = "#";
    listLink.className = "delete-item";
    listLink.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.appendChild(listLink);

    // Todo List'e List itemi ekleme

    todoList.appendChild(listItem);

    todoInput.value = "";
}
