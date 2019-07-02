console.log("hello script js");
//initialize global variables
var pineappleList;
var emojiSetState = prompt("What emoji would you like to use?");

//prompt user for what emoji to use
if (emojiSetState === ""){
  emojiSetState = "🍍"
}

//function when user enters the number to print
function input (){
  var entry = document.getElementById("input").value;
  display(entry);
}

//function to display pineapple or emojis to output
function display(entry){
  var strSplit = entry.split(" ");
  var numToClear = strSplit[1];
  if ((strSplit[0] === "clear")&&(strSplit[1]===undefined)){
    var clearNode = document.getElementById("output");
    for (var i = 0; i < pineappleList.length; true){
        clearNode.removeChild(clearNode.childNodes[0]);
        pineappleList = document.querySelectorAll(".pineappleList");
        console.log(pineappleList);
    }
  }else if((strSplit[0] === "clear")&&(strSplit[1]!=undefined)){
    var targetLine = parseInt(strSplit[1]);
    var outputField = document.getElementById("output");
    outputField.removeChild(outputField.childNodes[targetLine - 1]);
    pineappleList = document.querySelectorAll(".pineappleList");
    console.log(pineappleList);
  }else if((strSplit[0] === "triangle")&&(strSplit[1]!=undefined)){
    var counter = parseInt(strSplit[1]);
    for (var i = 1; i <= counter; i++){
      var paragraph = document.createElement("p");
      paragraph.classList.add("pineappleList");
      for (var j = 0; j < i; j++){
        paragraph.textContent += emojiSetState;
      };
      document.getElementById("output").appendChild(paragraph);
      pineappleList = document.querySelectorAll(".pineappleList");
    };
  }else if ((strSplit[0] === "rtriangle")&&(strSplit[1]!=undefined)){
    var counter = parseInt(strSplit[1]);
    var countBackwards = parseInt(strSplit[1]);
    for (var i = 0; i < counter; i++){
      var paragraph = document.createElement("p");
      paragraph.classList.add("pineappleList");
      for (var j = 0; j < counter; j++){
        if ((i+j) > (countBackwards-i)){
          paragraph.textContent += emojiSetState;
        }else {
          paragraph.textContent += String.fromCharCode(160);//set this for reverse triangle
          paragraph.textContent += String.fromCharCode(160);//set this for reverse triangle
          paragraph.textContent += String.fromCharCode(160);//set this for reverse triangle
          paragraph.textContent += String.fromCharCode(160);
          paragraph.textContent += String.fromCharCode(160);
        }
        countBackwards--;
      };
      countBackwards = parseInt(strSplit[1]);
      document.getElementById("output").appendChild(paragraph);
      pineappleList = document.querySelectorAll(".pineappleList");
    };
  }else if ((strSplit[0] === "etriangle")&&(strSplit[1]!=undefined)){
    var counter = parseInt(strSplit[1]);
    for (var i = 0; i < counter; i++){
      var paragraph = document.createElement("p");
      paragraph.classList.add("pineappleList");
      for (var j = 0; j < counter; j++){
        if ((j+i+1)>(counter-1)){
          paragraph.textContent += emojiSetState;
        }else{
          paragraph.textContent += String.fromCharCode(160);
          paragraph.textContent += String.fromCharCode(160);
        }
      };
      document.getElementById("output").appendChild(paragraph);
      pineappleList = document.querySelectorAll(".pineappleList");
    };

  }else if ((strSplit[0] === "eutriangle")&&(strSplit[1]!=undefined)){
    var counter = parseInt(strSplit[1]);
    // var countBackwards = parseInt(strSplit[1]);
    var countUp = 0;
    for (var i = 0; i < counter; i++){
      var paragraph = document.createElement("p");
      paragraph.classList.add("pineappleList");
      for (var j = counter; j > 0; j--){
        if ((counter-1-countUp)<(counter-i)){
          paragraph.textContent += emojiSetState;
        }else{
          paragraph.textContent += String.fromCharCode(160);
          paragraph.textContent += String.fromCharCode(160);
        }
        countUp++;
      };
      countUp = 0;
      document.getElementById("output").appendChild(paragraph);
      pineappleList = document.querySelectorAll(".pineappleList");
    };
  }
  else if ((!isNaN(parseInt(strSplit[0])))&&(!isNaN(parseInt(strSplit[1])))){
    var rows = parseInt(strSplit[0]);
    var quantity = parseInt(strSplit[1]);
    for (var i = 0; i < rows; i++){
      var paragraph = document.createElement("p");
      paragraph.classList.add("pineappleList");
      for (var j = 0; j < quantity; j++){
       paragraph.textContent += emojiSetState;
      };
      document.getElementById("output").appendChild(paragraph);
      pineappleList = document.querySelectorAll(".pineappleList");
    };
  }else if(!isNaN(parseInt(strSplit[0]))){
    var paragraph = document.createElement("p");
    paragraph.classList.add("pineappleList");
      for (var i = 0; i < parseInt(strSplit[0]); i ++){
         paragraph.textContent += emojiSetState;
      };
      document.getElementById("output").appendChild(paragraph);
      pineappleList = document.querySelectorAll(".pineappleList");
  }
}
