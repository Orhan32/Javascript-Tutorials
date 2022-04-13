// let number1, number2;

// arr = [100, 200, 300, 400];

// number1 = arr[0];
// number2 = arr[1];

// Destructing

// [number1, number2] = arr;

// let [number1, number2] = arr;

// console.log(number1, number2);

// Object Destructing

// const number = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50
// }

// const { d: number4, b, c } = number;

// console.log(number4, b, b);

// Function Destructing

// const getLangs = () => ["Python", "Java", "C++"];

// const [lang1, lang2, lang3] = getLangs();

// console.log(lang1, lang2, lang3);

// Obje

const person = {
    name: "Orhan Kalkan",
    year: 2000,
    salary: 10000,
    showInfos: () => console.log("Bilgiler Gösteriliyor")
}

const { name: isim, year: yil, salary: maas, showInfos: bilgileriGoster } = person;

console.log(isim, yil, maas, bilgileriGoster);