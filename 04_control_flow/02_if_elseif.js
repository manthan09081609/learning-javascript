const balance = 30000000;
let tax = 0;
if (balance < 100000) {
  tax = 3;
} else if (balance < 1000000) {
  tax = 10;
} else if (balance < 10000000) {
  tax = 15;
} else {
  tax = 20;
}
const accountBalance = balance - balance * (tax / 100);
console.log(`Account Balance : ${accountBalance}`);
