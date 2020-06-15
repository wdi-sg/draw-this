var flagHolder = [];
var inputArray = [];
//var emojiList = ["🏁","🎲","♟","🎯","🎖"]

//validation
while (
  ((choice = prompt("What will be the emoji you would like to draw with?")),
  choice.length !== 2 && choice.length !== 1)
) {
  alert("Type within 2 charcter or 1 emoji.");
}

var inputHappened = function (currentInput) {
  inputArray = currentInput.split(" ");

  //1 number only
  if (inputArray.length === 1) {
    var flagLength = parseInt(inputArray[0]);

    //clear
    if (inputArray[0].toLowerCase() === "clear") {
      document.querySelector("#output").innerHTML = "";
    } 
    else if (inputArray[0] > 0) {
      for (let i = 0; i < flagLength; i++) {
        flagHolder.push(choice);
      }
      display();
      flagHolder = [];
    } 
  }

  if (inputArray.length === 2) {
    var firstNum = parseInt(inputArray[0]);
    var paragraph = parseInt(inputArray[1]);

    //remove one paragraph
    if (inputArray[0].toLowerCase() === "clear" && inputArray[1] > 0) {
      document.querySelectorAll("p")[paragraph].remove();
    }

    //check no. of input and paragraph
    else if (firstNum > 0 && inputArray[1] > 0) {
      for (let i = 0; i < firstNum; i++) {
        flagHolder.push(choice);
      }
      for (let j = 0; j < paragraph; j++) {
        display();
      }
      flagHolder = [];
    }
    
    else if (inputArray[0].toLowerCase() === "triangle" && inputArray[1] > 0) {
      for (let j = 0; j < paragraph; j++) {
        flagHolder.push(choice)
        display();
      }
      flagHolder = [];
    }

    else if (inputArray[0].toLowerCase() === "rtriangle" && inputArray[1] > 0) {
      for (let j = 0; j < paragraph; j++) {
          flagHolder.push(choice)
          var output = document.querySelector("#output");
          var createP = document.createElement("p");
          let htmlSpace = "&nbsp;&nbsp;&nbsp;&nbsp;";
          let spaceRepeat = htmlSpace.repeat(inputArray[1]-(j+1));
          createP.innerHTML = spaceRepeat+flagHolder.join("");
          output.appendChild(createP);
      }
      flagHolder = [];
    }
  }
  //clear the input
  document.querySelector("#input").value = "";
};

var display = function (stuffToDisplay) {
  // your DOM manipulation code here
  var output = document.querySelector("#output");
  var createP = document.createElement("p");
  createP.innerHTML = flagHolder.join("");
  output.appendChild(createP);
};