console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display(currentInput);
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
    var pTag = document.createElement('p');
    var emoji = "";
    for(var i = 0; i< stuffToDisplay;i++){
        emoji += "😃";
    }
    pTag.innerText = emoji;
   var output = document.querySelector("#output");
    output.appendChild(pTag);
   return emoji;
};