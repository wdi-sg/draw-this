console.log("hello script js");
var pineapple = "" ;
var space = "";
var temp = "";
var total=0;
var split = [];
document.getElementById("input").placeholder = "what u want to draw?";
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

  //clear everything in output
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

  //triangle drawing
  if (split[0] == "triangle") {
    console.log("triange")    //draw 3 rows
    for (var i=0; i<split[1]; i++) {
        var pcreate = document.createElement("p");
        for (var j=0; j<(i+1); j++) {
            pineapple = pineapple + "🍍";
        }
        pcreate.innerText = pineapple;
        pineapple = "";
        var input = document.getElementById("output");
        input.appendChild(pcreate);
    }
    total = total + parseInt(split[0]);
    split = [];
  }

  //reversetriangle drawing
  if (split[0] == "rtriangle") {
    console.log("rtriange")
    for (var i=0; i<split[1]; i++) {
        var pcreate = document.createElement("p");
        //when i=0 , j run 1 times, k run 2 times, jlimit = 1, klimit = 2
        //when i=1 , j run 2 times, k run 1 times, jlimit = 2, klimit = 1
        //when i=2 , j run 3 times, k run 0 times, jlimit = 3, klimit = 0
        for (var j=0; j<(i+1); j++) {
            temp = temp + "🍍";
        }
        for (var k=0; k<(split[1]-(i+1)); k++) {
            space += " &nbsp;&nbsp;&nbsp;&nbsp;";
        }
        pineapple = space + temp;
        pcreate.innerHTML = pineapple;
        temp = "";
        pineapple = "";
        space = "";
        var input = document.getElementById("output");
        input.appendChild(pcreate);
    }
    total = total + parseInt(split[0]);
    split = [];
  }
};