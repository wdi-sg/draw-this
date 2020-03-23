console.log("hello script js");
var output = document.querySelector('#output');
var input = document.querySelector('#input')
var inputArray;

//Main Function
var inputHappened = function(currentInput){
  inputArray = currentInput.split(" ");
  if (inputArray.includes('clear')){
    clearPineapples();
  } else {
        for (let num of inputArray){
            generatePineapples(num);
        }
  }
  clearInput();
};


var clearPineapples = function(){
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

var generatePineapples = function(input){
    var pineapple = document.createElement("p");
    pineapple.innerHTML = "🍍".repeat(parseInt(input));
    display( pineapple );
}

var clearInput = function(){
    input.value = "";
}

var clearOutput = function(){
    output.innerHTML = "";
}

//displaying pineapples
var display = function(display){
  // your DOM manipulation code here
  output.appendChild(display);
};