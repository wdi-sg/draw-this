console.log("hello script js");
var pineapple = "" ;
var total=0;
var split = [];

var inputHappened = function(currentInput){
  console.log( currentInput );
  data = currentInput;
  pineapple = "";
  display( "WOW SOMETHING HAPPENED" );
  document.getElementById("input").value = "";
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here

  //splitter
  if (data.includes(" ") == true) {
    console.log("empty space")
    split = data.split(" ");
  }

  //createpineapple
  if (isNaN(parseInt(data))==false & data.includes(" ")==false) {
    var pcreate = document.createElement("p");
    console.log("pineapple")
    for (var i=0; i<data; i++) {
        pineapple += "🍍";
    }
    total++;
    pcreate.innerText = pineapple;
    var input = document.getElementById("output");
    input.appendChild(pcreate);
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

  //clear selected rows
  if (split[0] == "clear") {
    console.log("splitclear");
    console.log("split[1]");
    var out = document.getElementById("output");
    var out2 = out.children[split[1]-1];
    out.removeChild(out2);
  }

  //insert multiple row
  if (isNaN(parseInt(split[0]))==false) {
    console.log("multi-input")
    console.log("split")
    for (var i=0; i<split[0]; i++) {
        var pcreate = document.createElement("p");
        for (var j=0; j<split[1]; j++) {
            pineapple += "🍍";
        }
        pcreate.innerText = pineapple;
        pineapple = "";
        var input = document.getElementById("output");
        input.appendChild(pcreate);
    }
    total = total + parseInt(split[0]);
    split = [];
  }

};