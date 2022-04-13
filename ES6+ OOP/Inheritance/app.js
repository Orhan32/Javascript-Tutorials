class Person { // SuperClass, BaseClass
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfos() {
        console.log("İsim:", this.name, "Yaş:", this.age);
    }
}

class Employee extends Person { // DerivedClass, SubClass, ChildClass
    constructor(name, age, salary) {
        super(name, age);
        // this.name = name;
        // this.age = age;
        this.salary = salary;
    }
    showInfos() {
        console.log("İsim:", this.name, "Yaş:", this.age, "Maaş:", this.salary);

    }
    raiseSalary(ammount) {
        this.salary += ammount;
    }
}

const emp = new Employee("Orhan", 22, 10000);

// console.log(emp);
emp.raiseSalary(5000);
emp.showInfos();