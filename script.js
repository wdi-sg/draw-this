console.log("hello script js");

// Part 1 - First version
var inputHappened = function(currentInput){
  console.log( currentInput );
  if (currentInput == "clear"){
    var output = document.getElementById("output");
    output.innerHTML="";
  }
  display(currentInput);
};

var display = function(stuffToDisplay){
  var output = document.getElementById("output");
  var content = "";
  var repeat = parseInt(stuffToDisplay);
  for (i=0;i<repeat;i++){
    content += "🍍";
    }
    content += "<br/>"
output.innerHTML += content;
  // your DOM manipulation code here

};