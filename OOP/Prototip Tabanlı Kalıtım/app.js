// Kalıtım - Inheritance

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function () {
    console.log("İsim:", this.name, "Yaş:", this.age);
}

// const person = new Person("Orhan", 32);
// console.log(person);

function Employee(name, age, salary) {
    // this.name = name;
    // this.age = age;
    Person.call(this, name, age);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function () {
    console.log("Employee");
}

Employee.prototype.showInfos = function () {
    console.log("İsim:", this.name, "Yaş:", this.age, "Maaş:", this.salary);
}

const emp = new Employee("Orhan", 32, 10000);
// console.log(emp);

emp.showInfos();
emp.toString();