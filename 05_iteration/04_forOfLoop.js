// For Of Loop

const arr = [1, 2, 3, 4, 5];
for (const val of arr) {
  console.log(val);
}

const greeting = "Hello, World!";
for (const chr of greeting) {
  console.log(chr);
}

// Maps
const countries = new Map();
countries.set("IN", "India");
countries.set("USA", "United States of America");
countries.set("Fr", "France");
console.log(countries);

for (const [key, value] of countries) {
  console.log(`${key} -> ${value}`);
}

const user = {
  username: "manthan",
  age: 21,
};
// for (const [key, value] of user) {
//   console.log(key, value);
// }
