console.log("hello script js");

var deleteRow = function(num){
    var output = document.querySelectorAll("#output p");
    if(output.length >= num){
     output[num-1].remove("#output p");
    }
}
var display = function(stuffToDisplay){
  // your DOM manipulation code here
    var pTag = document.createElement('p');
    var emoji = "";

    for(var i = 0; i< stuffToDisplay;i++){
        emoji += "😃";
    }
    pTag.className = "emoji";
    pTag.innerText = emoji;
   var output = document.querySelector("#output");
    output.appendChild(pTag);
   return emoji;
};
var inputHappened = function(currentInput){
  console.log( currentInput);
  //if it can be split
  var wordArray = currentInput.split(" ");
  var num = parseInt(wordArray[1]);
  if(wordArray[0] === 'clear' && !isNaN(num)){
    deleteRow(num);
  }
  currentInput = parseInt(currentInput);
  if(!isNaN(currentInput)){
  display(currentInput);
    }
}