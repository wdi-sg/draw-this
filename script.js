/*console.log("hello script js");
var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
};*/

//variables
var inputNumArray = [];
var emoji = "🍍";
var emojiArray = [];
debugger;
//DOM manipulation for display
var display = function() {
  // your DOM manipulation code here
  clearAllDOM();
  for (let i = 0; i < emojiArray.length; i++) {
    var p = document.createElement("p");
    p.textContent = emojiArray[i];
    var output = document.getElementById("output");
    output.appendChild(p);
  }
};

//creates emoji array for printing
var emojiArrayPrint = function() {
  emojiArray = inputNumArray.map(element => {
    var toPrint = "";
    for (var i = 0; i < element; i++) {
      toPrint = toPrint + emoji;
    }
    return toPrint;
  });
};

//clear all DOM
var clearAllDOM = function() {
  var parent = document.getElementById("output");
  parent.innerHTML = "";
};