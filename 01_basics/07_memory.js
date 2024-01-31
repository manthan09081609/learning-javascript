// Memory

// 1. Stack (Primitive Values)

let name = "Manthan Sharma";
let myName = name;
console.log(name, myName);
myName = "Mayank Sharma";
console.log(name, myName);

// 2. Heap (Non-Primitive Values)

let userOne = {
  name: "Manthan",
};
let userTwo = userOne;
console.log(userOne, userTwo);
userTwo.name = "Mayank";
console.log(userOne, userTwo);
