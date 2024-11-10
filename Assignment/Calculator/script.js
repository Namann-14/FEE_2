const display = document.querySelector("#display");

function showOnDisplay(input) {
  display.value += input;
}
function calcVal() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function clearValue() {
  display.value = "";
}
