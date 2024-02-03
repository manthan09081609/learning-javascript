const prices = [100, 2000, 300, 499];
const totalPrice = prices.reduce(function (acc, currValue) {
  return acc + currValue;
}, 0);
console.log(totalPrice);

const items = [1, 22, 3, 2, 1];
const totalItems = cart.reduce((acc, currValue) => {
  return acc + currValue;
}, 0);
console.log(totalItems);

const shoppinCart = [
  {
    courseName: "Javascript",
    price: 9999,
  },
  {
    courseName: "Python",
    price: 7699,
  },
  {
    courseName: "Java",
    price: 9899,
  },
];
const totalCoursePrice = shoppinCart.reduce(
  (acc, current) => acc + current.price,
  0
);
console.log(totalCoursePrice);
