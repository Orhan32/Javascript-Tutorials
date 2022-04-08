let value;

const programmer = {
    name: "Orhan",
    age: 22,
    email: "asd@mail.com",
    langs: ["Python", "Java", "JavaScript"],

    adress: {
        city: "Ankara",
        street: "Bahçelievler"
    },

    work: function () {
        console.log("programcı çalışıyor");
    }
}

value = programmer;

value = programmer["email"];
value = programmer.email;

value = programmer.langs;

value = programmer.adress;
value = programmer.adress.city;
value = programmer.adress.street;

value = programmer.work();

const programers = [
    { name: "Orhan Kalkan", age: 22 },
    { name: "Adnan Kaya", age: 20 }
]

value = programers[0];
value = programers[0].name;
value = programers[1].age;
value = programers[1].name;

console.log(value);