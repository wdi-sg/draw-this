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

    //If input is just "clear"
    if (currentInput === `clear`) {
        return output.textContent = ``;

    //If input is not "clear" but longer than one character
    } else if (currentInput.length > 1) {
      var instructions = currentInput.split(" ");

      //If the first word is clear, assume second word is number and clear that row.
      if (instructions[0]===`clear`) {
        var rowToClear = parseInt(instructions[1]);
        clearRow(rowToClear);

      //If the first word is not clear, assume it's all numbers.
      } else {
        for (var i=0; i < instructions.length; i++) {
          display(addRow(parseInt(instructions[i])));
        }
      }
    //If input is just one character, assume it's a number and add row.
    } else {
          var newRow = addRow(parseInt(currentInput));
          return display(newRow);
    }
}

var display = function(stuffToDisplay) {
    output.appendChild(stuffToDisplay)
};
