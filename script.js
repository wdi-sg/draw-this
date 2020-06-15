// UI elements for areas on the page
const submitBtn = document.getElementById('submit-btn');
const userInput = document.getElementById('user-input');
const firstResult = document.getElementById('first-row');
const secondResult = document.getElementById('second-row');
const thirdResult = document.getElementById('third-row');


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
  if (inputCount === 0 && splitInput.length > 1 && userInput.value !== "triangle 3" && userInput.value !== "rtriangle 3") {
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

  // triangle 3
  if (userInput.value === "triangle 3" && userInput.value !== "rtriangle 3") {
    firstResult.innerText = `${char}`;
    secondResult.innerText = `${char}${char}`;
    thirdResult.innerText = `${char}${char}${char}`;
    userInput.value = "";
  } 

// reverse triangle 3
if (userInput.value === "rtriangle 3") {
  firstResult.innerHTML = `&nbsp&nbsp&nbsp&nbsp${char}`;
  secondResult.innerHTML = `&nbsp&nbsp${char}${char}`;
  thirdResult.innerHTML = `${char}${char}${char}`;
  userInput.value = "";
  console.log('rtriangle')
  } 
}

