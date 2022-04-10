// Klavye Eventleri
const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", function (e) {
    header.textContent = e.target.value;
});

// Keypress

// document.addEventListener("keypress", run);

// function run(e) {
//     // console.log(e.which);
//     console.log(e.key);
// }

// Keydown

// document.addEventListener("keydown", run);

// function run(e) {
//     // console.log(e.which);
//     console.log(e.key);
// }

// Keyup


// document.addEventListener("keyup", run);

// function run(e) {
//     // console.log(e.which);
//     console.log(e.key);
// }