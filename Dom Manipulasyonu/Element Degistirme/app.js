// Replace
const cardBody = document.querySelectorAll(".card-body")[1];

//<h5 class="card-title" id="tasks-title">Todolar</h5>

const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "task-title";
newElement.textContent = "Yeni Todolar";

// Eski Element

const oldElement = document.querySelector("#tasks-title");

cardBody.replaceChild(newElement, oldElement);

console.log(newElement);