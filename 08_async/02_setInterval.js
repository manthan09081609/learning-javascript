let interval;

function tellDate(name) {
  console.log(`${name} : ${Date.now()}`);
}

function startInterval() {
  if (interval) {
    console.log("clearing previous interval");
    removeInterval(interval);
  }
  interval = setInterval(
    tellDate,
    1000,
    `Start ${parseInt(Math.random() * 10)}`
  );
}

function removeInterval(inter) {
  clearTimeout(inter);
}

document.getElementById("start").addEventListener("click", () => {
  startInterval();
});

document.getElementById("stop").addEventListener("click", () => {
  removeInterval(interval);
});
