console.log("hello script js");
var inputHappened = function(currentInput){
    console.log( currentInput );
    //get Id for output
    var newOutput = document.getElementById("output");
    // create element p
    var createP = document.createElement("p");
    //add as many as given by user input
    for (i=0; i<parseInt(currentInput); i++) {
        createP.textContent += "emoji ";
    }
//append new <p> into the display
newOutput.appendChild(createP);
};