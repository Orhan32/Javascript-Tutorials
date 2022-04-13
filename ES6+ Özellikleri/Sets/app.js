// Setler - Kümeler

const mySet = new Set();

mySet.add(100);
mySet.add(100);
mySet.add(3.14);
mySet.add("Orhan");
mySet.add(true);
mySet.add([1, 2, 3]);
mySet.add({ a: 1, b: 2 });

const mySet2 = new Set([100, 100, 3.14, "Orhan", true]);
// console.log(mySet, mySet2);

// Size

// console.log(mySet.size);

// Delete

// mySet.delete("Orhan");

// console.log(mySet);


// Has Metodu

// console.log(mySet.has("Orhan"));

// Foreach

// mySet.forEach(function (value) {
//     console.log(value);
// });

// for (let value of mySet) {
//     console.log(value);
// }

const array = Array.from(mySet);
console.log(array);