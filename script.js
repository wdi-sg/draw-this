var flagHolder = [];

var inputHappened = function(currentInput){
  console.log( currentInput );

  var flagLength = parseInt(currentInput);

  if(currentInput.toLowerCase() === "clear"){
    document.querySelector("#output").innerHTML="";
  }

  for(i=0;i<flagLength;i++){
    flagHolder.push("🏁");
  }

  display();

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
