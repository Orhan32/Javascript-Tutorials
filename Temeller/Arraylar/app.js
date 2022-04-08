let value;

const numbers = [45, 46, 47, 48, 79];
// const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7);

const langs = ["Python", "Java", "C++", "JavaScript"];
const a = ["Merhaba", 22, null, true, false, undefined, 3.14];

// value = numbers[numbers.length - 1];

// Herhangi bir indexdeki değeri değiştirme

numbers[2] = 55;
value = numbers;

// Index Of

value = numbers.indexOf(55);

// Array'in sonuna değer ekleme.
numbers.push(32);
value = numbers;

numbers.unshift(31); // Başına Ekler
value = numbers;

// Sonundan değer atma

numbers.pop();
value = numbers;

// Başından değer atma

numbers.shift();
value = numbers;

// Belli bir kısmını atma
numbers.splice(0, 3);
value = numbers;

// Reverse

numbers.reverse();
value = numbers;

numbers.sort();
value = numbers;

numbers.sort(function (x, y) { // Küçükten büyüğe sıralar
    return x - y;
});
value = numbers;

numbers.sort(function (x, y) { // Büyükten küçüğe sıralar
    return y - x;
});
value = numbers;


console.log(value);