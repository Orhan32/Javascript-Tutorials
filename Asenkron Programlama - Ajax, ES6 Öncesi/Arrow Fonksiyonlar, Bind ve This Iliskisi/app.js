const person = {
    age: 21,
    // tellAge: function () {

    //     // This - Person
    //     console.log(this);
    //     console.log(this.age);
    // }.bind(this)

    tellAge: () => {
        console.log(this);
        console.log(this.age);
    }

    // This Window Object
};

person.tellAge();