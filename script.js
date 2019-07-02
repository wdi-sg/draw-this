console.log("hello script js");

var numInput = 0;
var parsedInput = null;
var clearStr = null;


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
    if (parsedInput.includes("clear") === true){ //includes only returns true or false
      console.log(parsedInput);
      clearInput();
    } else {
        checkAnswer();
    }
};

var clearInput = function () {
    console.log('Inside clearInput');
    var clearNum = parsedInput.split(" ");
    console.log(clearNum);
    if (clearNum.length === 1){
        location.reload();
    } else if (clearNum.length > 1) {
        var res = parsedInput.split(" ");
        console.log(res);
        var removeEle = (parseInt(res[1]) - 1);
        console.log("removeEle " + removeEle);
        output.removeChild(output.childNodes[removeEle]);
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