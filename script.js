console.log("hello script js");
var output = document.querySelector('#output');
var input = document.querySelector('#input')
var inputArray;
output.innerHTML = "<p>What emoji would you like to use?</p>";
var emoji;
var status = "beginning";
var square;
var cursorRow = 0;
var cursorColumn = 0;
var size;

//Initial Flow
var inputHappened = function(currentInput){
  //Getting emoji
  if (status === "beginning"){
    emoji = currentInput;
    status = "first input";
    output.innerHTML = "Get cracking!";
  } else {
  //Using input
    if (status === "first input"){
        clearOutput();
        status = "subsequent inputs";
    }
    inputArray = currentInput.split(" ");
    mainFunction();
  }


  clearInput();
};

//Clear or Generate Triangles or Generate Emojis
var mainFunction = function(){
    if (inputArray.includes('clear')){
      clearEmojis();
    } else if (inputArray.includes('triangle')){
        generateTriangle(inputArray[1]);
    } else if (inputArray.includes('rtriangle')){
        generateRTriangle(inputArray[1]);
    } else if (inputArray.includes('square')){
        generateSquare(inputArray[1]);
    } else if (inputArray.includes('cursor')){
        cursorShow();
    } else if (inputArray.includes('move')){
        moveAndDraw(inputArray[1], parseInt(inputArray[2]));
    } else if (inputArray.includes('etriangle')){
        generateETriangle(inputArray[1]);
    } else if (inputArray.includes('eutriangle')){
        generateEUTriangle(inputArray[1]);
    } else {
      for (let num of inputArray){
        generateEmojis(num);
      }
    }
}

var moveAndDraw = function(direction, distance){
    var outOfBounds = document.createElement("p");
    outOfBounds.innerHTML = "<p>That's out of bounds! Choose another move</p>";
    if (direction === "up"){
        if ((cursorRow - (distance - 1)) < 0){
            displaySquare();
            display(outOfBounds);
            return
        } else {
            for (let i = 0; i < distance; i++){
                square[cursorRow - i][cursorColumn] = emoji;
            }
            cursorRow -= (distance - 1);
        }

    } else if (direction === "down"){
        if ((cursorRow + (distance - 1)) > (size - 1)){
            displaySquare();
            display(outOfBounds);
            return
        } else {
            for (let i = 0; i < distance; i++){
                square[cursorRow + i][cursorColumn] = emoji;
            }
            cursorRow += (distance - 1);
        }

    } else if (direction === "right"){
        if ((cursorColumn + (distance - 1)) > (size - 1)){
            displaySquare();
            display(outOfBounds);
            return
        } else {
            for (let i = 0; i < distance; i++){
                square[cursorRow][cursorColumn + i] = emoji;
            }
            cursorColumn += (distance - 1);
        }

    } else if (direction === "left") {
        if ((cursorColumn - (distance - 1)) < 0){
            displaySquare();
            display(outOfBounds);
            return
        } else {
            for (let i = 0; i < distance; i++){
                square[cursorRow][cursorColumn - i] = emoji;
            }
            cursorColumn += (distance - 1);
        }

    } else {
        console.log("move and draw error");
    }
    displaySquare();
}


var cursorShow = function(){
    square[cursorRow][cursorColumn] = "⬛";
    displaySquare();
}

var displaySquare = function(){
    clearOutput();
    for (let i = 0; i < size; i++){
        var displayLine = document.createElement("div");
        displayLine.innerHTML = square[i].join(" ");
        display(displayLine);
    }
}

var generateSquare = function(inputSize = 4){
    size = inputSize;
    var space = "🟦";
    square = [];
    for (let i = 0; i < size; i++){
        var subArr = [];
        for (let j = 0; j < size; j++){
            subArr.push(space);
        }
        square.push(subArr);
    }
    displaySquare();
}

var generateETriangle = function(inputSize){
    inputSize = parseInt(inputSize);
    //loop for each line
    for (let i = 0; i < inputSize; i++){
        var singleLine = document.createElement("div");
        //loop for initial spaces
        for (let j = 0; j < inputSize - i; j++){
            singleLine.innerHTML += "&nbsp"
        }

        //loop for on off emojis
        for (let k = 0; k < ((i + 1) * 2) - 1; k++){
            if (k % 2 === 0|| k === 0){
                singleLine.innerHTML += emoji;
            } else {
                singleLine.innerHTML += "&nbsp";
            }
        }
        console.log(singleLine);
        display(singleLine)
    }
}

var generateEUTriangle = function(inputSize){
    console.log("hello")
    inputSize = parseInt(inputSize);
    //loop for each line
    for (let i = inputSize; i > 0; i--){
        var singleLine = document.createElement("div");
        //loop for initial spaces
        for (let j = inputSize - i; j > 0; j--){
            singleLine.innerHTML += "&nbsp"
        }

        //loop for on off emojis
        for (let k = i; (i * 2) - 1 > 0; i --){
            if (k % 2 === 0|| k === i){
                singleLine.innerHTML += emoji;
            } else {
                singleLine.innerHTML += "&nbsp";
            }
        }
        console.log(singleLine);
        display(singleLine)
    }
}



var generateTriangle = function(heightAndBase){
    var singleLine = document.createElement("p");
    heightAndBase = parseInt(heightAndBase);
    console.log(heightAndBase);
    //Printing Per Line
    for (let i = 0; i < heightAndBase; i++){
        //Printing per character
        var singleLine = document.createElement("p");
        for (let j = 0; j < i + 1; j++){
            singleLine.innerHTML += emoji
        }
        display(singleLine);
    }
}

var generateRTriangle = function(heightAndBase){
    heightAndBase = parseInt(heightAndBase);
    //For Each Line
    for (let i = 0; i < heightAndBase; i++){
        var singleLine = document.createElement("p");
        //Add the Spaces
        for (let k = 0; k < (heightAndBase - 1 - i); k++){
            singleLine.innerHTML += "&nbsp"
        }
        //Print the Emojis
        for (let j = 0; j < i + 1; j++){
            singleLine.innerHTML += emoji
        }
        display(singleLine);
    }
}


var clearEmojis = function(){
    //Clearing Specific Row
    if (inputArray.length > 1){
        var rowNumber = parseInt(inputArray[1]) - 1;
        var childToRemove = output.childNodes[rowNumber];
        output.removeChild(childToRemove);
    }
    //Clearing entire output
    else {
        clearOutput();
    }
}

var generateEmojis = function(input){
    var emojiLine = document.createElement("p");
    emojiLine.innerHTML = emoji.repeat(parseInt(input));
    display( emojiLine );
}


//Simple piecemeal functions

var clearInput = function(){
    input.value = "";
}

var clearOutput = function(){
    output.innerHTML = "";
}

//displaying emojis
var display = function(display){
  // your DOM manipulation code here
  output.appendChild(display);
};