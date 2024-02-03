// Approaches for Adding Events

// Not Recommended
/*
<img
    width="200px"
    id="owl"
    src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    alt=""
    onclick="alert('owl clicked')"
/> 

attachEvent() -> used in Old days -> Internet Explorer
on() -> JQuery
*/

document.getElementById("owl").onclick = function () {
  alert("owl clicked");
};

// Recommended
document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    alert("Owl Clicked");
  },
  false
);

// Event Object
document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log(e);
  },
  false
);

// Event Propogation

// Bubbling : Inside -> Outside
document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("Clicked inside the ul");
  },
  false
);
document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log("Owl Clicked");
  },
  false
);

// Capturing : Outside -> Inside
document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("Clicked inside the ul");
  },
  true
);
document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log("Owl Clicked");
  },
  true
);

// Stoppig Propogation
document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("Clicked inside the ul");
  },
  false
);
document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    console.log("Owl Clicked");
  },
  false
);

// Stopping url routing
document.getElementById("google").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    console.log("Google Clicked");
  },
  false
);
