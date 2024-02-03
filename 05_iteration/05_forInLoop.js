const languages = {
  js: "Javascript",
  py: "Python",
  cpp: "C++",
  c: "C",
};

for (const extension in languages) {
  console.log(`${extension} -> ${languages[extension]}`);
}

const programming = ["Python", "Javascript", "CPP", "JAVA"];
for (const index in programming) {
  console.log(programming[index]);
}

const countries = new Map();
countries.set("IN", "India");
countries.set("USA", "United States of America");
countries.set("Fr", "France");
for (const key in countries) {
  console.log(key);
}
