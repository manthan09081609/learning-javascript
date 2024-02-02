const user = {
  username: "manthan",
  age: 21,
  welcomeMessage: function () {
    console.log(`${this.username},welcome to website.`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "mayank";
user.welcomeMessage();

/*
In Browser : this -> Window Object
In Node : this -> {}
*/
console.log(this);

// Context -> Work Inside Objects only, not inside function
// Inside Arrow function : this -> {}
// Other fucnction : this -> {has_many_properties}
function one() {
  console.log(this);
}
function two() {
  const username = "manthan";
  console.log(this);
  console.log(this.username);
}
one();
console.log("-------------------------------------------");
two();

const three = function () {
  const username = "manthan";
  console.log(this);
  console.log(this.username);
};
three();

// Arrow Function
const four = () => {
  const username = "manthan";
  console.log(this);
  console.log(this.username);
};
four();

const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(3, 4));

// Implicit Return
const subtractTwo = (num1, num2) => num1 - num2;
console.log(subtractTwo(3, 4));

// const multiplyTwo = (num1, num2) => (num1 * num2);
// console.log(multiplyTwo(3, 2));

const returnUser = (username, age) => ({ username, age });
console.log(returnUser("Manthan", 21));
