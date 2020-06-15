var flagHolder = [];
var inputArray = [];
//var emojiList = ["🏁","🎲","♟","🎯","🎖"]
//var emojiChoice1;

// var choice = prompt("What will be the character/emoji you would like to draw with?");
// console.log(choice);
// if(choice.length>1){
//   choice = prompt("What will be the character/emoji you would like to draw with?");
// }

//validation
while (choice = prompt('What will be the emoji you would like to draw with?'), choice.length !== 2 && choice.length !== 1) {
  alert("Type within 2 charcter or 1 emoji.")
  //console.log(choice);
}

var inputHappened = function(currentInput){
  inputArray = currentInput.split(" ");
  console.log( currentInput );
  console.log(inputArray);
  

  if (inputArray.length === 1){
    var flagLength = parseInt(inputArray[0]);
    if(inputArray[0].toLowerCase() === "clear"){
      document.querySelector("#output").innerHTML="";
    }else if(inputArray[0] > 0){
      for(let i=0;i<flagLength;i++){
        flagHolder.push(choice);
      }
      display();
      flagHolder = [];
    }
  }

  if (inputArray.length===2){
    var firstNum = parseInt(inputArray[0]);
    var paragraph = parseInt(inputArray[1]);
    console.log(paragraph);
    
    if(inputArray[0].toLowerCase() === "clear" && inputArray[1]>0){
      document.querySelectorAll("p")[paragraph].remove();
    }else if(firstNum>0&&inputArray[1]>0){
      for(let i=0;i<firstNum;i++){
        flagHolder.push(choice);
      }
      for(let j=0;j<paragraph;j++){
        display();
      }
      flagHolder = [];
    }
  }

  //clear the input
  document.querySelector("#input").value = "";
};


var display = function(stuffToDisplay){
  // your DOM manipulation code here
  var output = document.querySelector("#output");
  var createP = document.createElement("p");
  createP.innerHTML = (flagHolder.join(""));
  output.appendChild(createP);
};
