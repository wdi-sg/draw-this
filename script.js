console.log("hello script js");

var delayTimer;

var charDraw = prompt("Which Emoji or Character would you like to use?") + " ";
if (charDraw == " "){
    charDraw = "🍍";
};

var inputHappened = function(currentInput) {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function() {
      console.log(currentInput);
  var arrCurrentInput = currentInput.split(" ");
  if (arrCurrentInput[0] == "clear" && typeof Number(arrCurrentInput[1]) == "number") {
    clearRow(Number(arrCurrentInput[1]) - 1);
  } else if (arrCurrentInput.length == 1) {
    display(currentInput);
  } else if (arrCurrentInput[0] == "triangle") {
    displayTriangle(arrCurrentInput[1]);
         } else {
           displayTwoDim(arrCurrentInput[0], arrCurrentInput[1] - 1);
         }
  //console.log(arrCurrentInput[1]); //For Debugging
    }, 1000);

};

var outputElement = document.getElementById("output");

var display = function(stuffToDisplay) {
  // DOM manipulation code here
  var outputString = "";
  for (var i = 0; i < Number(stuffToDisplay); i++) {
    outputString += charDraw;
  }
  var p = document.createElement("p");
  p.textContent = outputString;
  console.log(outputString);
  outputElement.appendChild(p);
};
var displayTwoDim = function(x, y) {
  for (var i = 0; i < y; i++) {
    display(x);
  }
};
var displayTriangle = function(size){ //Doesn't Work
    for(var i = 1; i <= size ; i ++){
        display(size);
    }
};
var clearDisplay = function() {
  document.getElementById("output").innerHTML = "";
};
var clearRow = function(rowNum) {
  outputElement.removeChild(outputElement.children[rowNum]);
};
