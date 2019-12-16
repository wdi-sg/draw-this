console.log("hello script js");

var outputDisplay = document.querySelector('#output');

var emojiUsed = "🍍";

var inputHappened = function(currentInput){
  document.querySelector('#input').value = ""
  currentInput = currentInput.trim().toLowerCase();
  splitInput = currentInput.split(' ');
  console.log(splitInput);

  if (splitInput[0] === 'clear'){
    integerInput = parseInt(splitInput[1]);
    if (integerInput) {
      deleteRow(splitInput[1]);
      return; 
    }
  }

  integerInput = parseInt(splitInput[0]);
  if (integerInput) {
    display(emojiRow(integerInput));
    return;
  }

  return "error";

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

var deleteRow = function(rowNumber) {
  var childrenOfOutput = outputDisplay.children;
  if (rowNumber <= childrenOfOutput.length ) {
    var selectedRow = childrenOfOutput[rowNumber - 1];
    outputDisplay.removeChild(selectedRow);
  }
};

