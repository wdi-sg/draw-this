console.log("hello script js");

var numInput = 0;
var parsedInput = null;

var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
};

document.getElementById('javascriptButton').onclick = function interpretAnswer() {
  var inputResults = document.getElementById('input').value;
  console.log("input value: " + inputResults);
      parsedInput = inputResults.toLowerCase();
      numInput = parseInt(inputResults);
    console.log("Parsed input value: " + parsedInput + " or " + numInput);
    if (parsedInput === "clear"){
        location.reload();
    } else {
        checkAnswer();
    }

};



var display = function(stuffToDisplay){
  // your DOM manipulation code here
    var output = document.querySelector('#output');
    output.innerText = data;
};

var drawFruits = function() {
    console.log('drawing fruits');
    var drawRow = document.createElement('p');
    for (let i = 0; i < numInput; i++) {
    drawRow.textContent += "🍍";
    }
    console.log(drawRow);
    output.appendChild(drawRow);

};

function checkAnswer() {
    drawFruits();
};