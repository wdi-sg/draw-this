console.log("hello script js");

var inputHappened = function(currentInput){
  if (currentInput.includes('clear')){
    clearOutput();
  } else {
    display( parseInt(currentInput) );
  }
};

var clearOutput = function(){
    var output = document.querySelector('#output');
    output.innerHTML = "";
}

//displaying pineapples
var display = function(numberOfPineapples){
  // your DOM manipulation code here
  var output = document.querySelector('#output');
  var pineapple = document.createElement("p");
  pineapple.innerHTML = "🍍".repeat(numberOfPineapples);

  output.appendChild(pineapple);

};