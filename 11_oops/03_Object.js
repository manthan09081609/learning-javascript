// Everything in Javascript is Object

function addition(num1, num2) {
  return num1 + num2;
}

addition.val = 100;

console.log(addition(23, 34));
console.log(addition.val);
console.log(addition.prototype);

function createUser(username, age) {
  this.username = username;
  this.age = age;
}

createUser.prototype.increaseAge = function () {
  this.age += 1;
};

createUser.prototype.printUser = function () {
  console.log(`Username : ${this.username} Age: ${this.age}`);
};

const user1 = new createUser("manthan", 21);

console.log(createUser.prototype);
user1.printUser();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

/*
Javascript gives constructor function through new keyword not by classes
*/
