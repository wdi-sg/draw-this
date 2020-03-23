console.log("hello script js");
var step = "0";
var character;
var inputHappened = function(currentInput){
  switch(step){
    case "0":
      character = currentInput;
      step = "1";
      document.getElementById("input").value = "";
      output.innerHTML = "Enter amount you want to enter."
    break;

    case "1":
    display(currentInput, character);
    break;
  }
};

var display = function(stuffToDisplay, emoji){
  // your DOM manipulation code here
  var pineappleRow = document.createElement("p");
  var pineappleAmount = "";
  var wordArray = stuffToDisplay.split(" ");
  pineappleRow.className = "pineapple";
  if(wordArray[0] === "clear"){
    var i = 0
    var clearPineapple = document.getElementsByClassName("pineapple");
    if(wordArray.length === 2){
      var clearValue = parseInt(wordArray[1]);
      if(!isNaN(clearValue)){
          clearPineapple[clearValue - 1].parentNode.removeChild(clearPineapple[clearValue - 1]);
      }
    }else {
      while(i < clearPineapple.length){
      clearPineapple[i].parentNode.removeChild(clearPineapple[i]);
      }
    }
  }

  var value = parseInt(wordArray[0]);
  for (var i = 0; i < value; i++){
    pineappleAmount = pineappleAmount + emoji;
  }
  pineappleRow.innerHTML = pineappleAmount;
  output.innerHTML = pineappleAmount;
  if(!isNaN(wordArray[1])){
    document.body.appendChild(pineappleRow);
    for(var i = 0; i < wordArray[1] - 1; i++){
      var cln = pineappleRow.cloneNode(true);
      document.body.appendChild(cln);
    }
  }else {
  document.body.appendChild(pineappleRow);
  }
  document.getElementById("input").value = "";

};