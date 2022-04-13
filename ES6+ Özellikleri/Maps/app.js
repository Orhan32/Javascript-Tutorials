// Mapler - Key - Value

// let myMap = new Map();

// console.log(myMap);

// const key1 = "Orhan";
// const key2 = { a: 10, b: 20 };
// const key3 = () => 2;


// // Set
// myMap.set(key1, "String Değer");
// myMap.set(key2, "Object Değer");
// myMap.set(key3, "Function Değer");


// // Get

// console.log(myMap.get(key1));

// // Map Boyutu

// console.log(myMap.size);

// const cities = new Map();

// cities.set("Ankara", 5);
// cities.set("İstanbul", 15);
// cities.set("İzmir", 4);

// Foreach

// cities.forEach(function (value, key) {
//     console.log(key, value);
// })

// For Of

// for (let [key, value] of cities) {
//     console.log(value, key);
// }

// Map Keys

// for (let key of cities.keys()) {
//     console.log(key);
// }

// Map Values

// for (let value of cities.values()) {
//     console.log(value);
// }

// const array = [["key1", "value1"], ["key2", "value2"]];

// const lastMap = new Map(array);
// console.log(lastMap);

// Maplerden Array Oluşturma

const cities = new Map();

cities.set("Ankara", 5);
cities.set("İstanbul", 15);
cities.set("İzmir", 4);

const array = Array.from(cities);

console.log(array);