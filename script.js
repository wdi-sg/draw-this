
let isFirstRun = false;
const ui = new UI();
const command = new Command(ui);
const outputElement = document.getElementById("output");
const cursorLocation = [0,0]; // cursor coordinates x, y
// given x, y coordinates, find square location and replace with by cursor
const placeCursor = (coordinates, cursorSymbol) => {
  const x = coordinates[0];
  const y = coordinates[1];
  const rowElement = outputElement.children[y];
  const rowInnerterText = rowElement.innerText;
  rowElement.innerText = rowInnerterText.replaceAt(x, cursorSymbol);
  // y indicates row
};
const setEmoji = userInput => {
  document.getElementById("input").setAttribute('placeholder', "Please enter an emoji you want.")
};
let testInput = null;
var inputHappened = function(currentInput){
  ui.userInput = currentInput;
  testInput = currentInput;
  console.log(testInput);
  if (Helpers.isDrawSingleRowCommand(currentInput)) {
    const newElement = command.execute('draw');
    console.log("drawSingle");
    display( newElement );
  }
  if (Helpers.isClearCommand(currentInput)) {
    console.log("clear");
    document.getElementById("output").innerHTML ="";
  }

  if (Helpers.isDrawMultipleColumnCommand(currentInput)) {
    console.log("drawMultiple");
    display(command.execute('drawMultiple'));
  }

  if (Helpers.isDrawTriangleCommand(currentInput)) {
    console.log("draw triangle");
    display(command.execute('drawTriangle'))
  }

  if (Helpers.isDrawReverseTriangleCommand(currentInput)) {
    console.log("draw reverse triangle");
    display(command.execute('drawRTriangle'))
  }

  // requires special handling
  if (Helpers.isDrawSquareCommand(currentInput)) {
    // place a cursor at top right corner first
    const cursor = "C";
    display(command.execute('draw4Square'));
    console.log("draw square");
    placeCursor(cursorLocation, "C");
  }

  if (Helpers.isEtriangleCommand(currentInput)) {
    console.log("draw e triangle");
    display(command.execute('drawETriangle'));
  }

  if (Helpers.isEuTriangleCommand(currentInput)) {
    console.log("drawuing eu triangle");
    display(command.execute("drawEuTriangle"));
  }

  // special handling
  if (Helpers.isMoveCommand(currentInput)) {
    console.log("moving cursor");
    const instruction = currentInput.split(' ');
    const distanceToMove = instruction[1];
    const directionToMove = instruction[0];
  }
};

var display = function(stuffToDisplay){
  const outputContainer = document.getElementById("output");
  outputContainer.appendChild(stuffToDisplay);
};
