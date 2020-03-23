console.log("hello script js");

let currentInput;
const myEmoji = [];

var inputHappened = function(currentInput) {
  document.getElementById('input').value = "";
  for (let i = 0; i < currentInput; i++) {
    myEmoji[i] = "🦠";
    myEmoji.push();
  }
  stuffToDisplay = myEmoji;
  console.log(currentInput !== 0);
  if (currentInput !== 0) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = stuffToDisplay;
    document.body.appendChild(newParagraph);
  }
};

var display = function(stuffToDisplay) {
// your DOM manipulation code here

};
