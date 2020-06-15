// UI elements for areas on the page
const submitBtn = document.getElementById('submit-btn');
const userInput = document.getElementById('user-input');
const resultBox = document.getElementById('result');
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
  // if (splitInput.length < 2) {
  //   if (inputCount === 0) {
  //     while (firstInput > 0) {
  //       drawing.push(`${char}`);
  //       firstInput--;
  //     }
  //     firstResult.innerText = drawing.join('');
  //     inputCount++;
  //     userInput.value = "";
  //     drawing = [];
  //   } 
  //   else if (inputCount === 1) {
  //     while (firstInput > 0) {
  //       drawing.push(`${char}`);
  //       firstInput--;
  //     }
  //     inputCount++;
  //     secondResult.innerText = drawing.join('');
  //     userInput.value = "";
  //   }
  // }

  // two inputs
  if (userInput.value !== "clear" && userInput.value !== "clear 2" && userInput.value !== "triangle 3" && userInput.value !== "rtriangle 3" && userInput.value !== "etriangle 3" && userInput.value !== "eutriangle 3") {
    drawing = [];
    if (splitInput.length < 2) {
      while (firstInput > 0) {
        drawing.push(`${char}`);
        firstInput--;
      }
      firstResult.innerText = drawing.join('');
    } else {
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
    } 

  // equilateral triangle 3
  if (userInput.value === "etriangle 3") {
    firstResult.innerHTML = `&nbsp&nbsp${char}`;
    secondResult.innerHTML = `&nbsp${char}${char}`;
    thirdResult.innerHTML = `${char}${char}${char}`;
    userInput.value = "";
    } 

  // upside-down equilateral triangle 3
  if (userInput.value === "eutriangle 3") {
    firstResult.innerHTML = `${char}${char}${char}`;
    secondResult.innerHTML = `&nbsp${char}${char}`;
    thirdResult.innerHTML = `&nbsp&nbsp${char}`;
    userInput.value = "";
    } 

  // clear 
  if (userInput.value === "clear" && userInput.value !== "clear 2") {
    inputCount = 0;
    userInput.value = "";
    firstResult.innerText = "";
    secondResult.innerText = "";
    thirdResult.innerText = "";
  } 

  if (userInput.value === "clear 2" && userInput.value !== "clear") {
    secondResult.innerText = "";
    userInput.value = "";
    inputCount = 0;
  }
}

function clear2() {
  document.getElementById('second-row').innerText = '';
}

