console.log("hello script js");
var inputHappened = function(currentInput){
    console.log( currentInput );
    if(currentInput == "triangle") {
    //get Id for output
        var pineapple =[];
    //add as many as given by user input
    for (i=0; i<3; i++) {
        var newOutput = document.getElementById("output");
    // create element p
        var createP = document.createElement("p");
        //how to add 2 and 3 times?
        pineapple.push('🍍 ');
        var newPineapple = pineapple.join("");
        createP.textContent = newPineapple;
        //append new <p> into the display
        newOutput.appendChild(createP);
    }
}
};