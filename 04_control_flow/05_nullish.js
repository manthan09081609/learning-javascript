// Nullish Coalescing Operator(??) -> Work on null & undefined
//                                 -> Safety Check

const value1 = 10 ?? 20;
const value2 = null ?? 10;
const value3 = undefined ?? 10;
const value4 = null ?? undefined ?? 10 ?? 20;
console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);
