console.log("hello script js");

var outputDisplay = document.querySelector('#output');

var emojiUsed = "🍍";

var inputHappened = function(currentInput){
  document.querySelector('#input').value = ""
  currentInput = currentInput.trim().toLowerCase();
  currentInput = parseInt(currentInput);
  if (currentInput) {
    display(emojiRow(currentInput));
  }
};

var emojiRow = function(inputInteger) {
  return emojiUsed.repeat(inputInteger);
}


var display = function(stuffToDisplay){
  // your DOM manipulation code here
  var rowOutPut = document.createElement('p');
  rowOutPut.innerText = stuffToDisplay;
  outputDisplay.appendChild(rowOutPut);
};

