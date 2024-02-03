const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = document.getElementById("height");
  const weight = document.getElementById("weight");
  const result = document.getElementById("results");
  const heightVal = parseFloat(height.value);
  const weightVal = parseFloat(weight.value);

  if (heightVal < 0 || isNaN(heightVal)) {
    result.innerHTML = `please provide a valid height '${heightVal}'`;
    return;
  }

  if (weightVal < 0 || isNaN(weightVal)) {
    result.innerHTML = `please provide a valid weight '${weightVal}'`;
    return;
  }

  const bmi = (weightVal / ((heightVal * heightVal) / 10000)).toFixed(2);
  let category = "";

  if (bmi < 18.6) {
    category = "Under Weight";
  } else if (bmi < 24.9) {
    category = "Normal Range";
  } else {
    category = "Overweight";
  }

  result.innerHTML = `<span>BMI : ${bmi}</span><br><span>Category : ${category}</span>`;
  height.value = "";
  weight.value = "";
});
