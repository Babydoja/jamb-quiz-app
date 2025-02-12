
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleCalc");
  const calculator = document.getElementById("calculator");

  if (toggleButton && calculator) {
      toggleButton.addEventListener("click", function () {
          calculator.style.display = (calculator.style.display === "none" || calculator.style.display === "") ? "block" : "none";
      });
  } else {
      console.error("Calculator or toggle button not found in the DOM.");
  }
});

function appendToDisplay(value) {
  document.getElementById("calc-display").value += value;
}

function clearDisplay() {
  document.getElementById("calc-display").value = "";
}
function deleteDisplay() {
  let display = document.getElementById("calc-display");
  display.value = display.value.slice(0, -1);
}


function calculateResult() {
  try {
      document.getElementById("calc-display").value = eval(document.getElementById("calc-display").value);
  } catch {
      document.getElementById("calc-display").value = "Error";
  }
}

console.log(document.getElementById("toggleCalc"));  
console.log(document.getElementById("calculator"));
