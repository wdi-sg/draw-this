console.log("hello script js");

//create array
var array = [];

//get num from user
var userInput = null;
console.log (userInput);


var inputHappened = function(currentInput){
    if (isNaN(currentInput) === false || currentInput === 'clear'){
    array.push(currentInput);
    console.log( array );
    display( currentInput );
        if(currentInput === 'clear'){
            clearDOM(currentInput);
            // array.pop();
        }
    } else {
        alert('Please enter a valid number.')

    }
};



// currentNum = array[i];
var fruitArray = [];
var fruit = "🍍";
var display = function(num){
  // your DOM manipulation code here
  var pElement = document.createElement("p");
  pElement.setAttribute("class","display")
  pElement.textContent = fruit.repeat(num);
  var temp = document.getElementById("output");
  temp.appendChild(pElement);
};

var clearDOM = function(num){
    var parent = document.getElementById('output');
    var arr = document.querySelectorAll(".display");
    for(i=0;i<arr.length;i++){
        if(num === (i+1))
            parent.removeChild(arr[i]);
    }
}
