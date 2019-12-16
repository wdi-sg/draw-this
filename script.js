console.log("hello script js");
var stuff = document.getElementById("output");

var totalEmoji = "";
var emoji = "🍣"

var splitWord = function(input){
    var words = input
    var array = words.split(" ");
    return array;
}

var clear = function(input){
    stuff.innerHTML = " ";
}

var inputHappened = function(currentInput){
    var array = splitWord(currentInput);
    var arrayNum = parseInt(array[1]);
    console.log(typeof arrayNum)
    if (array.length === 1 && array[0] === "clear"){
        console.log("clear runs")
        clear(currentInput);
    } else if (array.length > 1){
        stuff.removeChild(stuff.childNodes[arrayNum - 1]);
    } else {
        display(currentInput);
    }
};

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