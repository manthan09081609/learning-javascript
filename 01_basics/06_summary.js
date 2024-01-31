// Primitive datatypes (Call By Value)

// 1. String
const userEmail = "manthan@gmail.com";

// 2. Number
const marks = 56.5;
const score = 34;

// 3. Boolean
let isLoggedIn = true;

// 4. null
let temp = null;

// 5. undefined;
let user;

// 6. Symbol
let id1 = Symbol("123");
let id2 = Symbol("123");
console.log(id1);
console.log(id2);
console.log(id1 === id2);

// 7. BigInt
let bigNumber = 26367737368739389839383839389383893893n;
console.log(bigNumber);

// Non Primitive data type (Call by reference)

// 1. Array
const heroes = ["shaktiman", "naagraj", "doga"];

// 2. Object
let newUser = {
  name: "Manthan",
  age: 21,
};

// 3. Function
const hello = function () {
  console.log("Hello");
};
hello();

// typeOf Operator
console.log(typeof userEmail);
console.log(typeof marks);
console.log(typeof score);
console.log(typeof isLoggedIn);
console.log(typeof temp);
console.log(typeof user);
console.log(typeof id1);
console.log(typeof bigNumber);

console.log(typeof heroes);
console.log(typeof newUser);
console.log(typeof hello);
