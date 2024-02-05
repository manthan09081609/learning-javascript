// Challenge

/*
const name = "manthan         ";
console.log(name.length); // 16
console.log(name.trueLength()); // 7
*/

// Adding Prototype Properties
const heroes = ["thor", "spiderman"];

const heroPower = {
  thor: "hammer",
  spiderman: "sing",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.sayHello = function () {
  console.log("Hello Everyone, I am from Object");
};

Array.prototype.sayHi = function () {
  console.log("Hi Everyone, I am Array");
};

heroPower.sayHello();
heroes.sayHello();

heroes.sayHi();

// -------------------------------------------------------------
// ProtoTypal Inheritance

// Old Way :

const User = {
  name: "sir",
  age: 22,
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};
Teacher.__proto__ = User;

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

// String trueLength
String.prototype.trueLength = function () {
  console.log(this);
  return this.trim().length;
};
const name = "manthan         ";
console.log(name.length); // 16
console.log(name.trueLength()); // 7
