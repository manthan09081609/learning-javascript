// undefined ,null , string , number (primitive values) => No Change
let myString = "hello";
myString.toLowerCase();

// objects ,array => change
let myObj = {
  name: "Manthan",
};
myObj.name = "manthan";
myObj.lastName = "sharma";

// object are called as refernce types
// reference is assigned

let arrayRef = [1, 2];
let anotherRef = arrayRef;
anotherRef[0] = 5;
console.log(arrayRef);
console.log(arrayRef === anotherRef);
let yetAnother = Array.from(arrayRef);
console.log(yetAnother === arrayRef);

// Js gets what Js wants

console.log(10 + "objects");
console.log("7" * "4");
console.log(1 - "x");
console.log(1 - "x" + "objects");

// forceful conversion

console.log(Number("3"));
let infosysStock = 16000.23333;
console.log(infosysStock.toFixed(2));

console.log(Boolean(""));
console.log(Boolean([]));

// Objects to Primitive Values
/* 
Algorithms:
1. prefer-string -> toString() -> valueOf()
2. prefer-number -> valueOf() -> toString()
3. No-preference

Requirements -> toString()
                valueOf()
*/

let colorValue = 14;
let binaryColorValue = colorValue.toString(2);
console.log(binaryColorValue);

console.log({ 1: "one" }.toString());

let newDate = new Date(2022, 1, 1);
console.log(newDate);
console.log(newDate.valueOf());

console.log("".toString());
console.log([].toString());

// ----------------------------------------------------------------------------

console.log(Number("3"));
console.log(Number("3x"));
console.log(Number(""));
console.log(Number([]));
console.log(Number([99]));
console.log(Number([99, 33]));

let date = new Date(2022, 2, 2);
console.log(date);
console.log(date.toString());
let dateString = date.toString();
console.log(dateString.valueOf());
console.log(date.valueOf());
