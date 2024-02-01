const name = "Manthan";
const repoCount = 12;

// not recommended
console.log("Hello my name is " + name + " and my repo count is " + repoCount);

// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// -----------------------------------------------------------------------
const gameName = new String("Ryuga");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("R"));

const userName = "Manthan-Sharma";
console.log(userName.substring(0, 4));
console.log(userName.slice(-13, 4));
console.log(userName.split("-"));

const newUser = "    Manthan    \n  ";
console.log(newUser);
console.log(newUser.trim());

const url = "https://manthan.com/manthan%20sharma";
console.log(url.replace("%20", "-"));
console.log(url.includes("manthan"));
