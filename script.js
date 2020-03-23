console.log("hello script js");
var output = document.querySelector('#output');
var input = document.querySelector('#input')
var inputArray;
output.innerHTML = "<p>What emoji would you like to use?</p>";
var emoji;
var status = "beginning";

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
    } else {
      for (let num of inputArray){
        generateEmojis(num);
      }
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