console.log("hello script js");

// var px = "🍍";

var px = "";
outputElement = document.getElementById("output")
outputElement.innerHTML = "What emoji would you like to use?"

var inputHappened = function(currentInput){
  console.log( currentInput );
  display(currentInput);
};

var display="";


var display = function(stuffToDisplay){
  // your DOM manipulation code her

    //user hasn't input an emoji
    if (px===""){
        //set emoji
        px = stuffToDisplay;
        outputElement.innerHTML = "";
    } else {
        //handling clear command
        if(stuffToDisplay.toUpperCase().startsWith("CLEAR")==true){
        clearP(stuffToDisplay.split(" ")[1]);
        //handling multiple commands
        } else {
        //parse input
        let inputArr = stuffToDisplay.split(" ");
        //triangle
        if (inputArr[0].toUpperCase() === "TRIANGLE") {
            let triNum = inputArr[1];
            let triArr = drawTriangle(triNum);
            triArr.forEach(i => {
                document.getElementById("output").appendChild(i);
            });
        //rtriangle
        } else if (inputArr[0].toUpperCase() === "RTRIANGLE"){
            let triNum = inputArr[1];
            let triArr = drawRtriangle(triNum);
            triArr.forEach(i => {
                document.getElementById("output").appendChild(i);
            });
        } else {
            inputArr.forEach(i=>{
            document.getElementById("output").appendChild(drawRow(i));
        });
        }
        }
    }
};

var drawTriangle = function(num){
    var displayArr = [];
    for(let i = 1; i <= num; i++){
        displayArr.push(drawRow(i));
    }
    return displayArr;
}

var drawRtriangle = function(num){
    var displayArr = [];
    for(let i = 1; i <= num; i++){
        let row = drawRow(i);
        let tmp = row.innerHTML;
        let space = "";
        for(let j = i; j<= num-1; j++){
            space+="&nbsp;&nbsp;&nbsp;&nbsp;"
        }
        row.innerHTML = space + tmp;
        displayArr.push(row);
    }
    return displayArr;
}

var clearP = function(row){
    //if no input, clear all
    console.log(row)
    if(row===undefined){
        //clear all
        document.getElementById("output").innerHTML=""
    } else {
        //clear child n
        let output = document.getElementById("output")
        output.removeChild(output.childNodes[row-1]);
    }
};

//return element with rows drawn.
var drawRow = function(num){
    let p = document.createElement("p");
    for(let i = 0; i < num; i++){
        p.innerHTML+=px;
    }
    return p
}

// 😽