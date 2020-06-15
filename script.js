// UI elements for areas on the page
const submitBtn = document.getElementById('submit-btn');
const userInput = document.getElementById('user-input');
const firstResult = document.getElementById('first-row');
const secondResult = document.getElementById('second-row');

var drawing = [];
var inputCount = 0;

const char = prompt(`Type the character or emoji you'd like to draw with.`);

// submit function
function submit() {
  var input = userInput.value;
  var splitInput = input.split(" ");
  var firstInput = splitInput[0];
  var secondInput = splitInput[1];

  // one input only
  if (splitInput.length < 2) {
    if (inputCount === 0) {
      while (firstInput > 0) {
        drawing.push(`${char}`);
        firstInput--;
      }
      firstResult.innerText = drawing.join('');
      inputCount++;
      userInput.value = ""
    } 
    else if (inputCount === 1) {
      while (firstInput > 0) {
        drawing.push(`${char}`);
        firstInput--;
      }
      inputCount++;
      secondResult.innerText = drawing.join('');
      userInput.value = "";
    }
  }

  // two inputs
  if (inputCount === 0) {
    while (firstInput > 0) {
      drawing.push(`${char}`);
      firstInput--;
    }
    firstResult.innerText = drawing.join('');
    drawing = [];
    while (secondInput > 0) {
      drawing.push(`${char}`);
      secondInput--;
    }
    secondResult.innerText = drawing.join('');
    userInput.value = ""
    inputCount++;
  } 
  // clear 
    if (userInput.value === "clear") {
      inputCount = 0;
      firstResult.innerText = '';
      secondResult.innerText = '';
      userInput.value = "";
    } else if (userInput.value === "clear 2") {
      inputCount = 0;
      secondResult.innerText = '';
      userInput.value = ""
  }
}

