// Math.PI overwrriting possible ?

console.log(Math.PI);
Math.PI = 4;
console.log(Math.PI);

// Answer -> No

// Reason
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
