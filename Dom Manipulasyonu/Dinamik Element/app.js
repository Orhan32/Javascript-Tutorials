// Yeni Element Oluşturma

// <a id="clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newLink = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1];
newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://google.com";
newLink.target = "blank";
newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));
cardBody.appendChild(newLink);

// Text Content

// cardBody.textContent = "asdfasdf";

// Text Node

// const text = document.createTextNode("Selams")
// cardBody.appendChild(text);

console.log(newLink);