const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const plus10 = numbers.map((num) => num + 10);
const double = numbers.map((num) => {
  return num * 2;
});
console.log(plus10);
console.log(double);

// Chaining
const triplePlus1Odd = numbers
  .map((num) => num * 3)
  .map((num) => num + 1)
  .filter((num) => num % 2 != 0);
console.log(triplePlus1Odd);
