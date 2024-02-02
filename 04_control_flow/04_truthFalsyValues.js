const userEmail = "manthan@g.com";
if (userEmail) {
  console.log("Got User Email");
} else {
  console.log("Does not got any user email");
}

/*
falsy values:
false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values(All other):
"0", 'false', " ", [], {}, function(){}
*/

const users = [];
if (users.length) {
  console.log("Got Users");
} else {
  console.log("No Users");
}

const user = {};
if (Object.keys(user).length) {
  console.log("Got User");
} else {
  console.log("No User");
}

// General Knowledge
console.log(false == 0);
console.log(false == "");
console.log("" == 0);
console.log(false == -0);
console.log(false == "0");
console.log(false == "-0");
console.log(false == 0n);
console.log(false == []);

console.log(true == 1);
console.log(true == "1");
