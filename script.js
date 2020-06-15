console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  var inputString = currentInput.split(" ");
  if(inputString[0] == "clear"){
    //run clear function
    clearPineapple(parseInt(inputString[1]));
  } else {
    display(parseInt(inputString[0]), parseInt(inputString[1]));
  }  
};

var pee;
var display = function(stuffToDisplay, num){
  // your DOM manipulation code here
  //🍍
  if(num > 1){
    for(var i = 0; i < num; i++){ //create multiple rows
      pee = document.createElement('p'); //create a <p> tag
      pee.textContent = pineapplePen(stuffToDisplay);
      document.querySelector('#output').appendChild(pee);
    }
  } else {
    pee = document.createElement('p'); //create a single row <p> tag
    pee.textContent = pineapplePen(stuffToDisplay);
    document.querySelector('#output').appendChild(pee);
  }
};

var clearPineapple = function(number){
  var pineappleArray = document.querySelectorAll('#output p');
  pineappleArray[number-1].remove();
}

var pineapplePen = function(num){
  var pineApples = "🍍";
  return pineApples.repeat(num);
}