console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display(currentInput);

};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
  var pineappleRow = document.createElement("p");
  var pineappleAmount = "";
  pineappleRow.className = "pineapple";
  if(stuffToDisplay === "clear"){
    var i = 0
    var clearPineapple = document.getElementsByClassName("pineapple");
    while(i < clearPineapple.length){
      clearPineapple[i].parentNode.removeChild(clearPineapple[i]);
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