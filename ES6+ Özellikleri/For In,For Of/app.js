const person = {
    name: "Orhan Kalkan",
    age: 22,
    salary: 10000
};

const langs = ["C#", "LUA", "JavaScript"];

const name = "Orhan";

// For In
// Object

// for (let prop in person) {
//     console.log(prop, person[prop]);
// }

// Array

// for (let index in langs) {
//     console.log(langs[index]);
// }

// String

// for (let index in name) {
//     console.log(index, name[index]);
// }


// For Of

// Object ' de kullanılmaz !!!!!!!!!
// for (let value of person) {
//     console.log(value);
// }


// Array

// for (let value of langs) {
//     console.log(value);
// }

// String

for (let character of name) {
    console.log(character);
}