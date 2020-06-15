// UI elements for areas on the page
const submitBtn = document.getElementById('submit-btn');
const userInput = document.getElementById('user-input');
const firstResult = document.getElementById('first-row');
const secondResult = document.getElementById('second-row');

const drawing = [];
var inputCount = 0;

// FIRST VERSION

// submit function
function submit() {
  var input = userInput.value;
  // first input
  if (inputCount === 0) {
    while (input > 0) {
      drawing.push('🐨');
      input--;
      userInput.value = ""
    }
    inputCount++;
    firstResult.innerText = drawing.join('');
  } else if (inputCount === 1) {
    while (input > 0) {
      drawing.push('🐨');
      input--;
      userInput.value = ""
    }
    inputCount++;
    secondResult.innerText = drawing.join('');
  } else if (userInput.value === "clear") {
      inputCount = 0;
      firstResult.innerText = '';
      secondResult.innerText = '';
      userInput.value = ""
    // SECOND VERSION: clear second row 
  } else if (userInput.value === "clear 2") {
    inputCount = 0;
    secondResult.innerText = '';
    userInput.value = ""
  }
}

