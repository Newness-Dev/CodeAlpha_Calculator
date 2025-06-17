let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
  tryRealTimeResult();
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function tryRealTimeResult() {
  try {
    const result = eval(display.value);
    if (!isNaN(result)) {
      display.placeholder = "= " + result;
    }
  } catch {
    display.placeholder = "";
  }
}


document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    clearDisplay();
  }
});
