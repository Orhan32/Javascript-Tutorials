let value;

// Stringe Çevirme

value = String(123);
value = String(123.12);
value = String(true);
value = String(false);
value = String(function () { console.log("sa") });
value = String([1, 2, 3, 4]);

value = (10).toString();
value = (3.14).toString();

// Sayıya Çevirme

value = Number("13"); // Sayıya Çevirir
value = Number("13.125"); // Sayıya Çevirir
value = Number("asd"); // Sayıya Çevirmez "NaN"
value = Number(null);
value = parseFloat("3.14");
value = parseInt("3");


const a = Number("55") + 34;
console.log(a);
console.log(typeof a);


console.log(value);
console.log(typeof value);