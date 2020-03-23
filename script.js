// Helper functions

var outputDOM = document.querySelector("#output");

function createListItem(stuffToDisplay) {
  output = document.createElement("li");
  output.textContent = stuffToDisplay;
  return output;
}

function display(stuffToDisplay) {
  outputDOM.appendChild(createListItem(stuffToDisplay));
};

function clearRow(rowNum) {
  var target = outputDOM.children[rowNum-1];
  target.style.visibility = "hidden";
}

function addEmoji() {
  return "🍆";
}

function addRow(numCols) {
  outputString = "";
  for (let i = 0; i < numCols; i++) {
    outputString += addEmoji();
  }

  return outputString;
}

function multipleRows(numArray) {
  outputString = "";

  for (let i = 0; i < numArray.length; i++) {
    display(addRow(numArray[i]));
  }
}

function makeTriangle(height) {
  height = parseInt(height)+1;
  multipleRows([...Array(height).keys()].slice(1));
}



// Function

var inputHappened = function(currentInput){
  document.querySelector("#input").value = "";
  inputArray = currentInput.split(" ");

  if (inputArray[0] === "clear") {
    if (inputArray.length === 1) {
      outputDOM.innerText = "";
    } else {
      clearRow(inputArray[1]);
    }
  } else if(inputArray[0] === "triangle") {
    makeTriangle(inputArray[1]);
  } else {
    multipleRows(inputArray);
  }

};