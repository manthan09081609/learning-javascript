function changeHeading() {
  document.querySelector("h1").innerHTML = "Bye World";
}

const timeOut = setTimeout(changeHeading, 2000);

document.getElementById("stop").addEventListener("click", () => {
  clearTimeout(timeOut);
  console.log("Stopped");
});
