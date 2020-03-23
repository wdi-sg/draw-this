console.log("hello script js");
var pineapple = "" ;
var total=0;
var inputHappened = function(currentInput){
  console.log( currentInput );
  data = currentInput;
  pineapple = "";
  display( "WOW SOMETHING HAPPENED" );
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here

  //createpineapple
  var pcreate = document.createElement("p");
  if (isNaN(parseInt(data))==false) {
    console.log("pineapple")
    for (var i=0; i<data; i++) {
        pineapple += "🍍";
    }
    total++;
    pcreate.innerText = pineapple;
  }

  //clear
  if (data == "clear") {
    console.log("clear")
    console.log(total);
    for (var i=0; i<total; i++) {
        var input = document.getElementById("output");
        var pquery = input.querySelector("p");
        input.removeChild(pquery);
    }
    total=0;
  }
    var input = document.getElementById("output");
    input.appendChild(pcreate);
};