// Fonksiyon Tanımlama
// function merhaba(name = "Guest", age = "?") {
//     // if (typeof name === "undefined" && typeof age === "undefined")
//     //     console.log("Merhaba" + " Guest" + " Yaşınız: ?");
//     // else
//     // console.log("Merhaba" + " " + name + " Yaşınız: " + age);

//     console.log(`Merhaba ${name} Yaşınız: ${age}`)
// }

// merhaba("Orhan", 21); // Function Call
// merhaba("Orhan"); // Function Call

// function topla(a, b) {
//     return a + b;
// }

// console.log(topla(10, 18));


// function square(x) {
//     console.log(x * x);
//     return x;
// }

// function cube(x) {
//     console.log(x * x * x)
// }

// // let a = square(12);
// // a = cube(a);

// let a = cube(square(12));

// function merhaba() {
//     return "Merhaba";
// }

// console.log(merhaba());

// Function Expression

// const merhaba = function () {
//     console.log("Merhaba");
// };

// merhaba();

// Immediately Invoked Function Express (IIFE)

// (function (name) {
//     console.log("Merhaba " + name)
// })("Orhan");

const database = {
    host: "127.0.0.1",
    add: function () {
        console.log("Eklendi");
    },
    get: function () {
        console.log("Elde Edildi");
    },
    update: function (id) {
        console.log(`Id: ${id} Güncellendi`);
    },
    delete: function (id) {
        console.log(`Id: ${id} Silindi`);
    }
};

console.log(database.host);
database.add();
database.delete(10);
database.update(10);