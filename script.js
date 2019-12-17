console.log("hello script js");

//store number of columns input by user
var iconColumn = 0;

//store icon to print
var drawing = "🍍";

//to append new output to previous output
var iconDisplay = document.querySelector("#output");


var inputHappened = function(currentInput){
    console.log(iconColumn);
    iconColumn = parseInt(currentInput);
    display(iconColumn);
};
debugger;

//DOM manipulation code here.
//Display output each time in a new row
var display = function(stuffToDisplay){
    // repeat icons to display
    for (var i = 0; i < iconColumn; i++) {
    iconDisplay.textContent = drawing;
    console.log(iconDisplay);
    }
    var outputIcons = document.createElement("p");
    outputIcons.innerHTML = stuffToDisplay;
    iconDisplay.appendChild(outputIcons);
};
