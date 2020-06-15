console.log("hello script js");

var px = "🍍";

var inputHappened = function(currentInput){
  console.log( currentInput );
  display(currentInput);
};

var display="";

var display = function(stuffToDisplay){
  // your DOM manipulation code here
    document.getElementById("output").appendChild(drawRow(stuffToDisplay));
};


//add to output child

//return element with rows drawn.
var drawRow = function(num){
    let p = document.createElement("p")
    for(let i = 0; i < num; i++){
        p.innerHTML+=px;
    }
    return p
}