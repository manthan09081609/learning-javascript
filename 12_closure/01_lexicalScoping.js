function Outer() {
  let username = "manthan";

  function inner() {
    const secret = "123445";
    console.log(username);
  }

  function innerTwo() {
    console.log(username);
    console.log(secret);
  }

  inner();
  innerTwo();
  console.log(secret);
}

console.log(username);
