// general utilities
class Command {
  constructor(subject){
    this._subject = subject;
    this.commandsExecuted = [];
  }

  execute(command) {
    this.commandsExecuted.push(command);
    return this._subject[command]();
  }

}

// Receiver:
// knows how to carry out the operations associated with the command
class UI {
  constructor(userInput) {
    this._userInput = userInput;
    this._emoji = "🍍";
  }

  set userInput (userInput) {
    this._userInput = userInput;
  }

  set emoji(newEmoji) {
    this._emoji = newEmoji || "🍍";
  }

  // draw pineapples
  // input: number of pineapples to draw
  // out  : html element
  draw() {
    const numElemToDraw  = this._userInput;
    return this._draw(numElemToDraw, 'p');
  }


  drawMultiple() {
    // in: column row
    // out htmlDocFragElement
    const instructions = this._userInput.split(' ');
    const columns = instructions[0];
    const rows = instructions[1];
    const docFragment = document.createDocumentFragment();
    for (let i = 0; i < rows; i++ ) {
      docFragment.appendChild(this._draw(columns,'p'))
    }
    return docFragment;
  }

  drawTriangle() {
    const baseNumber = this._userInput.split(' ')[1];
    const docFrag = document.createDocumentFragment();
    for (let i = 1; i <= baseNumber; i++) {
      docFrag.appendChild(this._draw(i, 'p'));
    }
    return docFrag;
  }

  drawRTriangle() {
    const baseNumber = this._userInput.split(' ')[1];
    const docFrag = document.createDocumentFragment();
    for (let i = 1; i <= baseNumber; i++ ) {
      const spacesToInsertBefore = baseNumber - i;
      let trianglePartialElem = this._draw(i, 'p');
      let temp = trianglePartialElem.textContent;
      temp = this._insertSpace(spacesToInsertBefore) + temp;
      trianglePartialElem.innerHTML = temp;
      docFrag.appendChild(trianglePartialElem);
    }
    return docFrag;
  }

  drawETriangle() {
    console.log("draw e triangle");
    const baseNumber = parseInt(this._userInput.split(' ')[1]);
    const docFrag = document.createDocumentFragment();
    for (let i = baseNumber; i > 0; i-- ) {
      const spacesToInsertBefore = i + (i-1);
      let trianglePartialElem = this._draw( baseNumber - i + 1, 'p');
      let temp = trianglePartialElem.textContent;
      temp = this._insertSpace(spacesToInsertBefore) + temp;
      trianglePartialElem.innerHTML = temp;
      docFrag.appendChild(trianglePartialElem);
    }
    return docFrag;
  }

  drawEuTriangle() {
    console.log("draw eu triangle");
    const baseNumber = parseInt(this._userInput.split(' ')[1]);
    const docFrag = document.createDocumentFragment();
    for (let i = 0; i < baseNumber; i++ ) {
      const spacesToInsertBefore = i + (i);
      let trianglePartialElem = this._draw( baseNumber - i , 'p');
      let temp = trianglePartialElem.textContent;
      temp = this._insertSpace(spacesToInsertBefore) + temp;
      trianglePartialElem.innerHTML = temp;
      docFrag.appendChild(trianglePartialElem);
    }
    return docFrag;
  }

  _draw (colsToDraw, elementToReturn, symbol = this._emoji){
    let newElem = document.createElement(elementToReturn);
    for (let i = 0; i < colsToDraw; i++)  {
      newElem .textContent += symbol;
    }
    return newElem;
  }

  _insertSpace(numSpace) {
    return "&nbsp;".repeat(numSpace);
  }

  drawSquare() {
    const size = this._userInput.split(' ')[2];
    const docFrag = document.createDocumentFragment();
    for (let i = 1 ; i <= size; i++ ) {
      docFrag.appendChild(this._draw(size, 'p', "⬜"))
    }
    return docFrag;
  }

  // takes in direction, distance, current x, current y, size
  // returns new square
  moveCursor() {
  }

}

class Helpers {
  static isInputANumber (input) {
    return !isNaN(parseInt(input));
  }

  static isDrawSingleRowCommand(input) {
    return Helpers.isInputANumber(input) && input.split(' ').length === 1;
  }

  static isDrawMultipleColumnCommand(input) {
    return Helpers.isInputANumber(input) && input.split(' ').length === 2;
  }

  static isClearCommand(input) {
    return input === "clear" ;
  }

  static isDrawTriangleCommand(input) {
    let re = new RegExp('^\\btriangle\\b \\d+$');
    return re.test(input);
  }

  static isDrawSquareCommand(input) {
    return input.includes("draw square");
  }

  static isDrawReverseTriangleCommand(input) {
    let re = new RegExp('^\\brtriangle\\b \\d+$');
    return re.test(input);
  }

  static isMoveCommand(input) {
    let re = new RegExp('^\\bmove(up|down|left|right)\\b \\d+$');
    return re.test(input);
  }

  static isEtriangleCommand(input) {
    let re = new RegExp('^\\betriangle\\b \\d+$');
    return re.test(input);
  }

  static isEuTriangleCommand(input) {
    let re = new RegExp('^\\beutriangle\\b \\d+$');
    return re.test(input);
  }
}
String.prototype.replaceAt=function(index, replacement) {
  return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
};

