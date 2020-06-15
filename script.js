var flagHolder = [];
var inputArray = [];

var inputHappened = function(currentInput){
  inputArray = currentInput.split(" ");
  console.log( currentInput );
  console.log(inputArray);
  

  if (inputArray.length === 1){
    var flagLength = parseInt(inputArray[0]);
    if(inputArray[0].toLowerCase() === "clear"){
      document.querySelector("#output").innerHTML="";
    }else if(inputArray[0] > 0){
      for(i=0;i<flagLength;i++){
        flagHolder.push("🏁");
      }
      display();
    }
  }
  if (inputArray.length===2){
    var paragraph = parseInt(inputArray[1]);
    console.log(paragraph);
    
    if(inputArray[0].toLowerCase() === "clear" && inputArray[1]>0){
      document.querySelectorAll("p")[paragraph].remove();
    }
  }

  // if (inputArray.length === 2){
  //   if(currentInput.toLowerCase() === "clear")
  // }





  //clear the input
  document.querySelector("#input").value = "";
};


var display = function(stuffToDisplay){
  // your DOM manipulation code here
  var output = document.querySelector("#output");
  var createP = document.createElement("p");
  createP.innerHTML = (flagHolder.join(""));
  output.appendChild(createP);
  flagHolder = [];
};
