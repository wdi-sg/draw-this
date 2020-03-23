console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display( currentInput);
};


var display = function(stuffToDisplay){
  // your DOM manipulation code here

  var list = document.getElementById("output")
  var myNewList = document.createElement('p');

  var i = parseInt(stuffToDisplay);

  myNewList.textContent = "🍍".repeat(i);
  list.appendChild(myNewList);

};
