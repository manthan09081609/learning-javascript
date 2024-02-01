const var1 = 100;
let var2 = 200;
var var3 = 300;

if (true) {
  const var1 = 1000;
  let var2 = 2000;
  var var3 = 3000;
  console.log("Block Scope : ", var1, var2, var3);
}
console.log("Global Scope : ", var1, var2, var3);

if (true) {
  const val1 = 1000;
  let val2 = 2000;
  var val3 = 3000;
}
// console.log(val1);
// console.log(val2);
console.log(val3);

// Nested Scope
function one() {
  const username = "manthan";

  function two() {
    const website = "manthan.com";
    console.log(username);
  }
  // console.log(website);
  two();
}
one();

if (true) {
  const username = "manthan";
  if (username === "manthan") {
    const website = "manthan.com";
    console.log(`Username : ${username} Website : ${website}`);
  }
  // console.log(website);
}
// console.log(username);

// Hoisting

console.log(addOne(5)); // avaible due to hoisting
// function declaration
function addOne(value) {
  return value + 1;
}

// console.log(addTwo(5)); // -> Not availble because variable is not hoisted
// function expression
const addTwo = function (value) {
  return value + 2;
};
console.log(addTwo(5));
