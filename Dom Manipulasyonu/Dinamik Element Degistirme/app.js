const todoInput = document.getElementById("todo");
let element;

element = todoInput;
element = todoInput.classList;

// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");

element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");

todoInput.setAttribute("placeholder", "Merhaba");
// element = todoInput.placeholder = "Selam";
todoInput.setAttribute("title", "Input");
todoInput.removeAttribute("name");
element = todoInput;
// element = todoInput.hasAttribute("required");

console.log(element);