const programming = ["Python", "Javascript", "CPP", "JAVA"];

programming.forEach(function (value) {
  console.log(value);
});

programming.forEach((value) => {
  console.log(value);
});

function printMe(item) {
  console.log(item);
}
programming.forEach(printMe);

programming.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

const languages = [
  {
    name: "Java",
    extension: "java",
  },
  {
    name: "Python",
    extension: "py",
  },
  {
    name: "C++",
    extension: "cpp",
  },
];
languages.forEach((language) => {
  console.log(language.name);
});

const values = programming.forEach((value) => {
  console.log(value);
  return value;
});
console.log(values);
