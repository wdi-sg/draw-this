console.log("hello script js");

//store icon to print
var drawing = "🍍";

//to append new output to previous output
var iconDisplay = document.querySelector("#output");
console.log(iconDisplay);

var inputHappened = function(currentInput){
    console.log(currentInput);
    currentInput = parseInt(currentInput);
    display(currentInput);
};
debugger;

//DOM manipulation code here.
//Display output each time in a new row
var display = function(stuffToDisplay){
    var outputIcons = document.createElement("p");
    for (var i = 0; i < stuffToDisplay; i++) {
    outputIcons.textContent = outputIcons.textContent + drawing;
    console.log(iconDisplay);
    iconDisplay.appendChild(outputIcons);
    }
};
