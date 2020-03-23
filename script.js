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
    status = "input stage";
    clearOutput();
  } else {
  //Using input
    inputArray = currentInput.split(" ");
    mainFunction();
  }
  clearInput();
};

//Clear or Generate Emojis
var mainFunction = function(){
    if (inputArray.includes('clear')){
      clearEmojis();
    } else {
      for (let num of inputArray){
        generateEmojis(num);
      }
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