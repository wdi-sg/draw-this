var rowCount = 0;
var output = document.getElementById(`output`);
var addedEmoji = false;
var emoji;

output.textContent = "To get started, choose an emoji to display."

function clearInput() {
    document.getElementById(`input`).value = ``;
}

function clearRow(rowNo) {
    //get the array of all elements with class "row"
    var arrayOfRows = document.querySelectorAll(".row")
    //target the row number (-1 to account for element at index 0)
    var targetRow = arrayOfRows[rowNo - 1];
    //remove target row
    return output.removeChild(targetRow);
}

function addRow(length) {
    var rowContent = [];
    for (var i = 0; i < length; i++) {
        rowContent.push(emoji);
    };
    var newRow = document.createElement(`p`);
    newRow.textContent = rowContent.join(``);
    newRow.setAttribute("class", "row");
    return display(newRow);
}

function createTriangle(height) {
    for (var rowLength = 1; rowLength <= height; rowLength++) {
        addRow(rowLength);
    }
}

function createReverseTriangle(height) {
    //While the no. of rows < height, create new rows.
    for (var rowNo = 1; rowNo <= height; rowNo++) {

        //new paragraph + array for row content.
        var newRow = document.createElement(`p`);
        var rowContent = []

        //Formula for creating contents of the reverse triangle row:
        //No. of spaces per row = height-rowNo
        for (var spaces = 0; spaces < (height - rowNo); spaces++) {
            rowContent.push('&nbsp;&nbsp;&nbsp;')
        };
        //No. of emojis per row = rowNo
        for (var emojis = 0; emojis < rowNo; emojis++) {
            rowContent.push(emoji);
        }
        //Set contents of paragraph to the combined rowContent array
        newRow.innerHTML = rowContent.join(``);
        //Set class of paragraph to "row"
        newRow.setAttribute("class", "row");
        //Output the new row.
        display(newRow);
    }

}

var inputHappened = function(currentInput) {
    clearInput();

    if (!addedEmoji) {
        addedEmoji = true;
        emoji = currentInput
        output.textContent = "";
    } else {

        rowCount++;

        //If input is just "clear"
        if (currentInput === `clear`) {
            return output.textContent = ``;

            //If input is not "clear" but longer than one character
        } else if (currentInput.length > 1) {
            var instructions = currentInput.split(" ");

            //If the first word is clear, assume second word is number and clear that row.
            if (instructions[0] === `clear`) {
                var rowToClear = parseInt(instructions[1]);
                clearRow(rowToClear);

                //If the first word is triangle, assume second word is number and create triangle.
            } else if (instructions[0] === `triangle`) {
                var triangleHeight = parseInt(instructions[1]);
                createTriangle(triangleHeight);
            } else if (instructions[0] === `rtriangle`) {
                var triangleHeight = parseInt(instructions[1]);
                createReverseTriangle(triangleHeight);
                //If the first word is not clear/triangle/rtriangle, assume it's all numbers.
            } else {
                for (var i = 0; i < instructions.length; i++) {
                    addRow(parseInt(instructions[i]));
                }
            }
            //If input is just one character, assume it's a number and add row.
        } else {
            var newRow = addRow(parseInt(currentInput));
        }
    }
}

var display = function(stuffToDisplay) {
    output.appendChild(stuffToDisplay)
};
