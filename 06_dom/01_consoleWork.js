// Basic

console.log(window);

console.log(window.document);

console.log(document);

console.dir(document);

console.log(document.baseURI);
console.log(document.links);

console.log(document.getElementById("heading"));
document.getElementById("heading").innerHTML = "Manthan";

// Selectors

// 1. document.getElementById()
const heading = document.getElementById("heading");
heading.id;
heading.className;

heading.getAttribute("id");
heading.getAttribute("class");

heading.setAttribute("class", "heading test"); // overrides the class attribute with new values

heading.style.backgroundColor = "green";
heading.style.padding = "15px";
heading.style.borderRadius = "25px";

/*
innerText vs textContent vs innerHTML
innerText -> Visible Text
textContent -> All Text (including the text which is not visible)
innerHTML -> All Content including HTML inside it
*/

heading.innerText;
heading.textContent;
heading.innerHTML;

// 2. document.getElementsByClassName()
document.getElementsByClassName("heading");

const listItems = document.getElementsByClassName("list-item");
console.log(listItems); // HTMLCollection
const listItemsArray = Array.from(listItems); // Array
listItemsArray.forEach((li) => {
  li.style.backgroundColor = "#564567";
});

// 3. document.querySelector() -> Support All CSS Selectors

document.querySelector("h2"); // first ocuurence of h2
document.querySelector("#heading");
document.querySelector(".heading");
document.querySelector("input[type='password']");

const myUl = document.querySelector("ul");
const firstLi = myUl.querySelector("li");
firstLi.style.backgroundColor = "green";

// 4. document.querySelectorAll()

const liList = document.querySelectorAll("li"); // NodeList
console.log(liList);
liList[0].style.color = "red";
liList.forEach((l) => {
  l.style.backgroundColor = "blue";
});

const liListArray = Array.from(liList);
liListArray.forEach((l) => {
  l.style.color = "purple";
});
