let value;

const now = new Date(); // Şu anki zamanı alır.

const date = new Date("09-18-2000 06:11:31");
const date2 = new Date("Septenber 18 2000");
const date3 = new Date("09/18/2000");
const date4 = new Date("09.18.2000");

value = date4.getMonth();
value = date4.getDate();
value = date4.getDay();

value = date.getHours();
value = date.getMinutes();
value = date.getSeconds();
value = date.getMilliseconds();


value = date2.setMonth(8);
value = date2.setDate(15);
value = date2.setFullYear(1999);


value = date2.setHours(0);
value = date2.setMinutes(12);
value = date2.setSeconds(31);
value = date2.setMilliseconds(10);

value = date2;

console.log(value);