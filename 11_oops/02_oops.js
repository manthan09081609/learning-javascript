// Constrcutor Function

// Problem Code
function User(username, age, email) {
  this.username = username;
  this.age = age;
  this.email = email;

  return this;
}
const userOne = User("manthan", 21, "manthan@gmail.com");
console.log(userOne);
const userTwo = User("mayank", 22, "mayank@gmail.com");
//Value override by userTwo of userOne
console.log(userOne);

function CreateUser(username, age, email) {
  this.username = username;
  this.age = age;
  this.email = email;

  this.greeting = function () {
    console.log(`Welcome, ${this.username}`);
  };

  return this;
  // by default returned when instances created using constructor function (new keyword)
}
const user1 = new CreateUser("manthan", 21, "manthan@gmail.com");
console.log(user1);
const user2 = new CreateUser("mayank", 22, "mayank@gmail.com");
console.log(user1);
console.log(user2);
user1.greeting();

console.log(user1.constructor);
console.log(user1 instanceof CreateUser);
console.log(user1 instanceof User);
console.log(user1 instanceof Object);
