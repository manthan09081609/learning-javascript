const marvel = ["thor", "ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

const heroes1 = [];
heroes1.push(marvel);
heroes1.push(dc);
console.log(heroes1);

const heroes2 = marvel.concat(dc);
console.log(heroes2);

const heroes3 = [...marvel, ...dc];
console.log(heroes3);

const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const flatArr = arr.flat(Infinity);
console.log(arr);
console.log(flatArr);

console.log(Array.isArray("manthan"));

console.log(Array.from("manthan"));

// Not able to make return []
console.log(Array.from({ name: "Manthan" }));

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3));
