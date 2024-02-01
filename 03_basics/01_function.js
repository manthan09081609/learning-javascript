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
