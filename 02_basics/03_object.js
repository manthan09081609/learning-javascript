// Sigelton
const user1 = Object();
const user2 = Object.create({});
console.log(user1);
console.log(user2);

// Literal
const user3 = {};
console.log(user3);

// to use symbol as key wrap it around []
const id = Symbol("121");
const chatId = Symbol("ChatId");
const user = {
  id: "121",
  [chatId]: ["ch1", "ch2", "ch3"],
  name: "Manthan",
  "full name": "Manthan Sharma",
  age: 21,
  location: "Dehradun",
  email: "manthan@gmail.com",
  isLoggedIn: false,
  friends: ["Saloni", "Raman"],
  greeting: function () {
    return `Hello ${this.name}`;
  },
};

console.log(user);

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);

// id is not treated as symbol it is treated as string
console.log(user.id);
console.log(user["id"]);

// wrong way -> chatId key doesn't exist so undefined is returned
console.log(user.chatId);
console.log(user[chatId]);

// Function are first class Citizens
console.log(user.greeting);
console.log(user.greeting());

user.hello = function () {
  return `hello ${this["full name"]}`;
};
console.log(user.hello);
console.log(user.hello());

// Object.freeze(obj) -> freeze object to changes
user.email = "mayank@gmail.com";
Object.freeze(user);
user.email = "user@gmail.com";
console.log(user);
