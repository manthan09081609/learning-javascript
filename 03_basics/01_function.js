function sayHello() {
  console.log("Hello");
}
sayHello();

// num1,num2 -> Parameters
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
// 2,3 -> Arguments
addTwoNumbers(2, 3);

function additionTwoNumbers(num1, num2) {
  // result -> function local scope
  let result = num1 + num2;
  return result;
}
// result -> global scope
const result = additionTwoNumbers(3, 5);
console.log(result);

// !username -> username === undefined
function loginUserMessage(username) {
  if (!username) {
    return "please enter a username";
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage("Manthan"));
console.log(loginUserMessage());

function registerUserMessage(username = "user") {
  return `${username} just logged in`;
}
console.log(registerUserMessage("Manthan"));
console.log(registerUserMessage());

// ...prices -> ...  => rest operator -> to pass multiple values to function
function calculateCartPrice(currency, ...prices) {
  if (currency === "Rs") {
    return prices;
  }
  return 0;
}
console.log(calculateCartPrice("Rs", 200, 300, 400, 500));

// Passing Object to Function
const user = {
  username: "manthan",
  age: 21,
};
function handleObject(obj) {
  console.log(`Username : ${obj.username} Age:${obj.age}`);
}
handleObject(user);

// Passing Array to Function
const myArray = [1, 2, 3, 4, 5];
function secondValue(arr) {
  console.log(`Second Value : ${arr[1]}`);
}
secondValue(myArray);
