const myArray = [1, 2, 3, 4, 5, 6];
const myArray2 = new Array(1, 2, 3, 4, 5, 6);

console.log(myArray);
console.log(myArray2);

console.log(myArray[0]);

console.log(myArray.length);

myArray.push(11);
myArray.push(12);
console.log(myArray);
myArray.pop();
console.log(myArray);

// Not recommended (Not Optimized)
myArray.unshift(100);
console.log(myArray);
myArray.shift();
console.log(myArray);

console.log(myArray.includes(122));
console.log(myArray.indexOf(222));

const joinedArray1 = myArray.join();
const joinedArray2 = myArray.join("-");
console.log(joinedArray1);
console.log(joinedArray2);

// slice vs splice
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log("A", arr);

const slice_arr = arr.slice(1, 3);
console.log(slice_arr);
console.log("A", arr);

const splice_arr = arr.splice(1, 3);
console.log(splice_arr);
console.log("C", arr);
