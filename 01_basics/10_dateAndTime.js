const myDate = new Date();
console.log(myDate);

console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());

const date1 = new Date(2002, 0, 23);
const date2 = new Date(2002, 0, 23, 5, 3, 33);
const date3 = new Date("2023-01-12");
const date4 = new Date("01-12-2033");
console.log(date1.toDateString());
console.log(date2.toLocaleString());
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());

const myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(date1.getTime());

console.log(Math.floor(Date.now() / 1000));

const date = new Date();
console.log(date);
console.log(
  date.toLocaleString("default", {
    weekday: "long",
    day: "2-digit",
    year: "numeric",
  })
);
