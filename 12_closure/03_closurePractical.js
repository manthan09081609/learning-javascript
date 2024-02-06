// document.getElementById("orange").addEventListener("click", function () {
//   document.body.style.background = "orange";
// });

// document.getElementById("green").addEventListener("click", function () {
//   document.body.style.background = "green";
// });

function clickHandler(color) {
  return function () {
    document.body.style.background = color;
  };
}

document.getElementById("orange").onclick = clickHandler("orange");
document.getElementById("green").onclick = clickHandler("green");
