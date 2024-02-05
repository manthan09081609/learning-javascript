// Object literal
// this -> current context
const user = {
  username: "manthan",
  age: 21,

  increaseAge: function () {
    this.age += 1;
  },

  getUserDetails: function () {
    console.log(`Username : ${this.username}`);
    console.log(this);
  },
};
console.log(user);
console.log(user.getUserDetails());
