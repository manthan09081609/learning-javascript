for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("five is best");
  }
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  console.log(`Outer Loop : ${i}`);
  for (let j = 1; j <= 5; j++) {
    console.log(`Inner Loop : ${i}=>${j}`);
  }
}

const heroes = ["ironman", "thor", "spiderman"];
for (let index = 0; index < heroes.length; index++) {
  const element = heroes[index];
  console.log(element);
}

for (let index = 0; index < 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    break;
  }
  console.log(index);
}

for (let index = 0; index < 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(index);
}
