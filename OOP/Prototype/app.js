// const object = new Object(); // Object Literal

// object.name = "Orhan";

// console.log(object);

function Employees(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employees.prototype.showInfos = function () {
    console.log("isim:", this.name, "Yaş:", this.age, "Maaş:", this.salary);
}

const emp1 = new Employees("Orhan", 21, 10000);
const emp2 = new Employees("Oğuz", 22, 10000);

// console.log(emp1.toString());
console.log(emp1.showInfos());
console.log(emp2);