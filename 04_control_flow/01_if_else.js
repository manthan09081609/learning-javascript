/* 
Comparison Operators : <,<=,>,>=
Equality Operators : ==, != , ===, !==
*/

let age = 18;
if (age > 18) {
  console.log("You can go");
}
console.log("Welcome to Amusement Park");

if (age > 18) {
  const permission = true;
  console.log(`You have persmission : ${permission}`);
}
// console.log(`You have persmission : ${permission}`); // permission variable Not available here

if (age > 18) console.log("you can go");

if (age > 18) {
  console.log("You can Vote");
} else {
  console.log("You can't Vote");
}

/*
Logical Operators : &&(and), ||(or) , !(not)
*/

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
  console.log("You can buy courses");
} else {
  console.log("You can't buy courses");
}

const loggedInUsingGoogle = false;
const loggedInUsingEmail = true;

if (loggedInUsingEmail || loggedInUsingGoogle) {
  console.log("user logged in");
} else {
  console.log("user not logged in");
}
