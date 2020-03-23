console.log("hello script js");
var output = document.querySelector('#output');
var input = document.querySelector('#input')

var inputHappened = function(currentInput){
  var inputArray = currentInput.split(" ");
  if (inputArray.length > 1){
    clearMultipleRows(inputArray);
  } else {
    singleInput(currentInput);
  }
  clearInput();
};

//Clearing Multiple Rows
var clearMultipleRows = function(inputArray){
    var rowNumber = parseInt(inputArray[1]) - 1;
    var childToRemove = output.childNodes[rowNumber];
    output.removeChild(childToRemove);
}


var singleInput = function(input){
  if (input.includes('clear')){
    clearOutput();
  } else {
    display( parseInt(input) );
  }
}

var clearInput = function(){
    input.value = "";
}


var clearOutput = function(){
    output.innerHTML = "";
}

//displaying pineapples
var display = function(numberOfPineapples){
  // your DOM manipulation code here
  var pineapple = document.createElement("p");

  pineapple.innerHTML = "🍍".repeat(numberOfPineapples);
  output.appendChild(pineapple);

};