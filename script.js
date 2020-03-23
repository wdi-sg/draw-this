console.log("hello script js");
var inputArr = [];
var pineappleString = '';
var pineapple = ' 🍍';

var inputHappened = function(currentInput){
  //console.log( currentInput );
var number = parseInt(currentInput);
//check if its a number
  if(isNaN(number)){
    var errorMsg = "Input value"
} else {
    inputArr.push(number);
}
// storing userinput to check the number of layers
var pineapplePara = document.createElement('p');

    for (var i = 0; i < number; i++){
    pineappleString += pineapple;
    }
// Print text into P creating an element id row with 'p'
console.log(pineappleString);
pineapplePara.innerText = pineappleString;
//console.log(pineapplePara);
document.getElementById("output").appendChild(pineapplePara);
pineappleString = '';
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
  let displayElement = document.querySelector('#output')
  if (stuffToDisplay[0] !== "clear" ) {

    displayElement.appendChild(stuffToDisplay);

  }
  if (stuffToDisplay[0] === "clear") {

    displayElement.removeChild(displayElement.childNodes[stuffToDisplay[1]]);

  }
  document.querySelector("#input").value = "";
};



// document.querySelector("#input").value = "";