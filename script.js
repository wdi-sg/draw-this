console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  //display( "WOW SOMETHING HAPPENED" );
  if(currentInput == "clear"){
      clearDisplay();
  }
  else{
    display(currentInput);
  }
};

var display = function(stuffToDisplay) {
  // your DOM manipulation code here
  var outputString = "";
  for (var i = 0; i < Number(stuffToDisplay); i++) {
    outputString += "\🍍";
  }

  var p = document.createElement("p");
  p.textContent = outputString;
  console.log(outputString);
  document.getElementById("output").appendChild(p);
};
var clearDisplay = function(){
    document.getElementById("output").innerHTML = "";
};