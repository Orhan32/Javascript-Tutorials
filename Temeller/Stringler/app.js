let value;

const firstName = "Orhan";
const lastName = "Kalkan";

const langs = "Java, Python, C#";

value = firstName + lastName;
value = firstName + " " + lastName;

value = "Adnan Kara";
value += " " + "Selam";

value = firstName.length;

value = firstName.concat(" ", lastName)

value = lastName.toLowerCase();
value = lastName.toUpperCase();

value = firstName[0];
value = firstName[firstName.length - 1];


// Index Of

value = firstName.indexOf("n");

// Char At

value = firstName.charAt(4);
value = firstName.charAt(firstName.length - 1);

// Split

value = langs.split(",");

// Replace

value = langs.replace("Python", "JavaScript");

// Includes

value = langs.includes("Java");

console.log(value);