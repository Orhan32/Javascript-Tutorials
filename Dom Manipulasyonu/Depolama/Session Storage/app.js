// Session Storage - Key, Value

// Butonları Seçmek

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Inputlar

const addKey = document.querySelector("#addkey");
const addValue = document.querySelector("#addvalue");
const deleteKey = document.querySelector("#deletekey");


add.addEventListener("click", function (e) {
    sessionStorage.setItem(addKey.value, addValue.value);
});

del.addEventListener("click", function (e) {
    sessionStorage.removeItem(deleteKey.value);
});

clear.addEventListener("click", function (e) {
    sessionStorage.clear();
});