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
var multiply= function(num1, num2){
    for(var i = 0; i < num2;i++){
              display(num1);
    }
}
var inputHappened = function(currentInput){
  console.log( currentInput);
  //if it can be split
  var inputArray = currentInput.split(" ");
  var num = parseInt(inputArray[1]);
  if(inputArray.length === 2){
  if(inputArray[0] === 'clear' && !isNaN(num)){
    deleteRow(num);
  }else if(!isNaN(parseInt(inputArray[0])) && !isNaN(parseInt(inputArray[1]))){
    multiply(parseInt(inputArray[0]),parseInt(inputArray[1]) );
  }
  }
  else if(!isNaN(parseInt(currentInput))&&inputArray.length !== 2){
  display(currentInput);
    }
}