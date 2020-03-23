var rowCount = 0;
var output = document.getElementById(`output`);

function clearInput() {
    document.getElementById(`input`).value = ``;
}

function clearRow(rowNo) {
    //get the array of all elements with class "row"
    var arrayOfRows = document.querySelectorAll(".row")
    //target the row number (-1 to account for element at index 0)
    var targetRow = arrayOfRows[rowNo-1];
    //remove target row
    return output.removeChild(targetRow);
}

function addRow(length) {
    var arrayContent = [];
    for (var i = 0; i < length; i++) {
        arrayContent.push("🍍");
    };
    var newRow = document.createElement(`p`);
    newRow.textContent = arrayContent.join(``);
    newRow.setAttribute("class", "row");
    return newRow;
}

var inputHappened = function(currentInput) {
    rowCount++;
    clearInput();
    if (currentInput === `clear`) {
        return output.textContent = ``;
    } else if (currentInput.length > 1) {
      var instructions = currentInput.split(" ");
      var rowToClear = instructions[1];
      clearRow(rowToClear);
    } else {
          var newRow = addRow(currentInput);
          return display(newRow);
    }
}

var display = function(stuffToDisplay) {
    output.appendChild(stuffToDisplay)
};
