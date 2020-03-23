console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display(currentInput);

};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
  var pineappleRow = document.createElement("p");
  var pineappleAmount = "";
  var clearArray = stuffToDisplay.split(" ");
  pineappleRow.className = "pineapple";
  if(clearArray[0] === "clear"){
    var i = 0
    var clearPineapple = document.getElementsByClassName("pineapple");
    if(clearArray.length === 2){
      var clearValue = parseInt(clearArray[1]);
      if(!isNaN(clearValue)){
          clearPineapple[clearValue - 1].parentNode.removeChild(clearPineapple[clearValue - 1]);
      }
    }else {
      while(i < clearPineapple.length){
      clearPineapple[i].parentNode.removeChild(clearPineapple[i]);
      }
    }
  }

  var value = parseInt(stuffToDisplay);
  for (var i = 0; i < value; i++){
    pineappleAmount = pineappleAmount + "🍍";
  }
  pineappleRow.innerHTML = pineappleAmount;
  output.innerHTML = pineappleAmount;
  document.body.appendChild(pineappleRow);
  document.getElementById("input").value = "";

};