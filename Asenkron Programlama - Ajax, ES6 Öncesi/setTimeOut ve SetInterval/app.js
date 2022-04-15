// Set Timeout

// setTimeout(function () {
//     console.log("Naber");
// }, 2000);

let i = 0;
let interval = setInterval(function () {
    i++;
    console.log(i);
}, 500);

// Clear Interval

document.getElementById("btn").addEventListener("click", function () {
    clearInterval(interval);
});