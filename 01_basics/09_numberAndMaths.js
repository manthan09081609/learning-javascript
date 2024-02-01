// Numbers

const score = 100;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8445;
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));

const hundreds = 100000000;
console.log(hundreds.toLocaleString("en-In"));

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.NEGATIVE_INFINITY);

// Maths

console.log(Math);

console.log(Math.PI);
console.log(Math.E);

console.log(Math.abs(-4));
console.log(Math.round(4.55));
console.log(Math.ceil(2.2));
console.log(Math.floor(2.9));
console.log(Math.min(1, 2, 34, 1, 0));
console.log(Math.max(1, 2, 34, 1, 0));

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const a = 10;
const b = 30;
const randomNumber = Math.floor(Math.random() * (b - a + 1)) + a;
console.log(randomNumber);
