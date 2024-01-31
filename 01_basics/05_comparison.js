console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

// Avoid these type of comparison
console.log(Number(null));
console.log(Number(undefined));

/*
    Working of ==, === is different than <, <= , > , >=
*/

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);

console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);

// strict check
/* 
    == -> first try to convert both side values to same datatypes then call ===
    === -> check for values to be equal (given both are of same datatype)
*/

console.log("2" == 2);
console.log("2" === 2);
