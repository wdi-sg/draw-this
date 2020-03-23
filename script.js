console.log("hello script js");

var outputDisplay = document.querySelector('#output');

var emojiUsed;

var inputHappened = function(currentInput){
  document.querySelector('#input').value = ""
  splitInput = currentInput.trim().split(' ');

  if (!emojiUsed) {
    outputDisplay.innerText = "";
    emojiUsed = splitInput[0];
    return;
 }

for (let i = 0; i < splitInput.length; i++) {
  splitInput[i] = sanitizeInput(splitInput[i]);
  }

  if (splitInput[0] === 'clear') {
    splitInput.shift();
    splitInput.sort();
    for (let i = splitInput.length - 1; i >= 0; i-- ) {
    integerInput = parseInt(splitInput[i]);
    console.log(integerInput);
    if (integerInput) {
      deleteRow(integerInput); 
      }
    }
    return;
  }

  for (let i = 0; i < splitInput.length; i++) {
    integerInput = parseInt(splitInput[i]);
    if (integerInput) {
      display(emojiRow(integerInput));
    }
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

var sanitizeInput = function(currentInput) {
  return currentInput.trim().toLowerCase();
}

var firstTimeRun = function() {
  outputDisplay.innerText = "Please input a single character or emoji to begin."
}

firstTimeRun();