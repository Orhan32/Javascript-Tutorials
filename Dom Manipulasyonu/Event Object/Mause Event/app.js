const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");


// Click Eventi

// title.addEventListener("click", function (e) {
//     console.log(e.type);
// });

// Double Click

// title.addEventListener("dblclick", function (e) {
//     console.log(e.type);
// });

// Mause Down / Up

// title.addEventListener("mouseup", function (e) {
//     console.log(e.type);
// });

// Mause Over

// title.addEventListener("mouseover", function (e) {
//     console.log(e.type);
// });

// Mause Out

// title.addEventListener("mouseout", function (e) {
//     console.log(e.type);
// });

// cardBody.addEventListener("mouseover", function (e) {
//     console.log(e.type);
// });

// Mouse Enter ve Mouse Leave

title.addEventListener("mouseenter", function (e) {
    console.log(e.type);
});