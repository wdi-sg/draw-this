console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display(currentInput);
};

var display = function(stuffToDisplay){
  var content ="";
  var repeat = parseInt(stuffToDisplay);
  for (i=0;i<repeat;i++){
    content += "🍍";
    }
var output = document.getElementById("output");
output.innerHTML = content;
  // your DOM manipulation code here

};