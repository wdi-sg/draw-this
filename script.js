console.log("hello script js");

var px = "🍍";

var inputHappened = function(currentInput){
  console.log( currentInput );
  display(currentInput);
};

var display="";

var display = function(stuffToDisplay){
  // your DOM manipulation code here
    if(stuffToDisplay.toUpperCase()=="CLEAR"){
        //if user inputs clear
        clearP();
    } else {
        //append new p element
        document.getElementById("output").appendChild(drawRow(stuffToDisplay));
    }


};

var clearP = function(){
    document.getElementById("output").innerHTML=""
};

//return element with rows drawn.
var drawRow = function(num){
    let p = document.createElement("p");
    for(let i = 0; i < num; i++){
        p.innerHTML+=px;
    }
    return p
};