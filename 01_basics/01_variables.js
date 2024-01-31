const accountId = 123412;
let accountEmail = "manthan@gmail.com";
var accountPassword = "123456";
accountCity = "Dehradun";
let accountState;

// accountId = 23454; // not allowed
// console.log(accountId);

accountEmail = "manthan@yahoo.com";
accountPassword = "hello1";
accountCity = "Delhi";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
