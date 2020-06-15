console.log("hello script js");

// var px = "🍍";

var px = "";
outputElement = document.getElementById("output")
outputElement.innerHTML = "What emoji would you like to use?"

var inputHappened = function(currentInput){
  console.log( currentInput );
  display(currentInput);
};

var display="";


var display = function(stuffToDisplay){
  // your DOM manipulation code her

    //user hasn't input an emoji
    if (px===""){
        //set emoji
        px = stuffToDisplay;
        outputElement.innerHTML = "";
    } else {
        //handling clear command
        if(stuffToDisplay.toUpperCase().startsWith("CLEAR")==true){
        clearP(stuffToDisplay.split(" ")[1]);
        //handling multiple commands
        } else if (stuffToDisplay.split(" ").length>1){
        let inputArr = stuffToDisplay.split(" ");
        inputArr.forEach(i=>{
            document.getElementById("output").appendChild(drawRow(i));
        });
        } else {
        //append new p element
        document.getElementById("output").appendChild(drawRow(stuffToDisplay));
        }
    }


};

var clearP = function(row){
    //if no input, clear all
    console.log(row)
    if(row===undefined){
        //clear all
        document.getElementById("output").innerHTML=""
    } else {
        //clear child n
        let output = document.getElementById("output")
        output.removeChild(output.childNodes[row-1]);
    }
};

//return element with rows drawn.
var drawRow = function(num){
    let p = document.createElement("p");
    for(let i = 0; i < num; i++){
        p.innerHTML+=px;
    }
    return p
};