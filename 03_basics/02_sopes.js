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
