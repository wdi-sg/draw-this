//var declaration
const myEmoji = [];
let count = 0;

//input from the user

const textInputHandler = event => {
  const currentInput = event.target.value;
  inputHappened(currentInput);
};
document.querySelector("#input").addEventListener("change", textInputHandler);

//creating the paragraphs

var inputHappened = function(currentInput) {
  //clear the emoji file to be able to input smaller numbers
  const myEmoji = [];
  document.getElementById("input").value = "";

  //creating the paragraphs
  for (let i = 0; i < currentInput; i++) {
    myEmoji[i] = "🦠";
  }
  stuffToDisplay = myEmoji;
  if (currentInput !== 0) {
    count = count + 1;
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = stuffToDisplay;
    newParagraph.setAttribute("class", "emoji");
    document.body.appendChild(newParagraph);
  }
};

const clear = function(event) {
  let myPToClean = document.querySelectorAll(".emoji");
  console.log("after", myPToClean);
  for (j = 0; j < count; j++) {
    console.log(j, count);
    console.log(myPToClean, myPToClean[j]);
    myPToClean[j].textContent = "";
  }
};
// Select the button with # clear and add an event listener to it
document.querySelector("#clear").addEventListener("click", clear);

var display = function(stuffToDisplay) {};

// your DOM manipulation code here
