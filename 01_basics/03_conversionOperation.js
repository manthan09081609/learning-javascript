let val1 = "33abc";
let val2 = null;
let val3 = undefined;
let val4 = true;

console.log(typeof val1);
console.log(typeof val2);
console.log(typeof val3);
console.log(typeof val4);

let cVal1 = Number(val1);
let cVal2 = Number(val2);
let cVal3 = Number(val3);
let cVal4 = Number(val4);

console.log(typeof cVal1, cVal1);
console.log(typeof cVal2, cVal2);
console.log(typeof cVal3, cVal3);
console.log(typeof cVal4, cVal4);

// "33" => 33
// "33ab" => NaN
// true => 1,false => 0
// null => 0
// undefined => NaN

let val5 = "";
let val6 = "hello";
let val7 = 56;
let val8 = -4;
let val9 = 0;
let val10 = 1;
let val11 = NaN;
let val12 = null;
let val13 = undefined;

let cVal5 = Boolean(val5);
let cVal6 = Boolean(val6);
let cVal7 = Boolean(val7);
let cVal8 = Boolean(val8);
let cVal9 = Boolean(val9);
let cVal10 = Boolean(val10);
let cVal11 = Boolean(val11);
let cVal12 = Boolean(val12);
let cVal13 = Boolean(val13);

console.log(cVal5);
console.log(cVal6);
console.log(cVal7);
console.log(cVal8);
console.log(cVal9);
console.log(cVal10);
console.log(cVal11);
console.log(cVal12);
console.log(cVal13);

// "" => 0
// "value" => 1
// 0,NaN => false, anyNumber => true
// null => false
// undefined => false

let val14 = 33;
let val15 = NaN;
let val16 = false;
let val17 = null;
let val18 = undefined;

let cVal14 = String(val14);
let cVal15 = String(val15);
let cVal16 = String(val16);
let cVal17 = String(val17);
let cVal18 = String(val18);

console.log(cVal14);
console.log(cVal15);
console.log(cVal16);
console.log(cVal17);
console.log(cVal18);

// 33 => "33"
// NaN => "NaN"
// false => "false"
// null => "null"
// undefined => "undefined"
