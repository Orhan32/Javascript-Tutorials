// console.log(this); // Global Scope

// const emp1 = { // Object Literal
//     name: "Orhan",
//     age: 22,
//     showInfos: function () { console.log("bilgiler"); }
// }
// const emp2 = {
//     name: "Ahmet",
//     age: 22
// }

// emp1.salary = 10000;
// emp1.showInfos();

// console.log(emp1);

function Employees(name, age, salary) { // Yapıcı Fonksiyon
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.showInfos = function () {
        console.log(this.name, this.age, this.salary);
    };
}


const emp1 = new Employees("Orhan", 21, 10000);
const emp2 = new Employees("Adam", 20, 1000);

emp1.showInfos();
emp2.showInfos();