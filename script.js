console.log("emoji assignment");

//global variables
var stuff = document.getElementById("output");
var totalEmoji = "";
var emoji = ""
var enteredEmoji = false;


//splits the input into an array
var splitWord = function(input){
    var words = input
    var array = words.split(" ");
    return array;
}

// clears the output box
var clear = function(input){ //
    stuff.innerHTML = " ";
}

// input box
var inputHappened = function(currentInput){
    if (enteredEmoji === false){
        emoji = currentInput;
        enteredEmoji = true;
    }
    var array = splitWord(currentInput);
    var arrayNum = parseInt(array[1]);
    console.log(typeof arrayNum)
    if (array.length === 1 && array[0] === "clear"){
        clear(currentInput);
    } else if (array[0] === "clear" && array.length > 1 ){
        stuff.removeChild(stuff.childNodes[arrayNum - 1]);
    } else if (!isNaN(array[1])){
        for(var i = 0; i < arrayNum; i++){
            display(array[0]);
        };
    } else {
        display(currentInput);
    }
};
// output box
var display = function(stuffToDisplay){
  // your DOM manipulation code here
  var p = document.createElement("p")
  for (var i = 0; i < stuffToDisplay; i++){
    totalEmoji = totalEmoji + emoji;
  }
  p.innerHTML = totalEmoji;
  totalEmoji = "";
  stuff.appendChild(p)
};