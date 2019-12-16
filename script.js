console.log("emoji assignment");

//global variables
document.getElementById("output").innerHTML = "Enter desired emoji!"
var stuff = document.getElementById("output");
var totalEmoji = "";
var emoji = ""
var emojiTri = "";
var enteredEmoji = false;



//splits the input into an array
var splitWord = function(input){
    var words = input
    var array = words.split(" ");
    return array;
};

// clears the output box and text box
var clear = function(){ //
    stuff.innerHTML = " ";
    document.getElementById("input").value = "";
};

// create normal triangle function
var triangle = function(){
        var p = document.createElement("p");
        emojiTri += emoji;
        p.innerHTML = emojiTri;
        stuff.appendChild(p);
};

// input box
var inputHappened = function(currentInput){
    if (enteredEmoji === false){
        emoji = currentInput;
        clear();
        enteredEmoji = true;
    }
    var array = splitWord(currentInput);
    var arrayNum = parseInt(array[1]);
    console.log(typeof arrayNum)
    if (array.length === 1 && array[0] === "clear"){
        clear();
    } else if (array[0] === "clear" && array.length > 1 ){
        stuff.removeChild(stuff.childNodes[arrayNum - 1]);
    } else if (!isNaN(array[0]) && !isNaN(array[1])){
        for(var i = 0; i < arrayNum; i++){ // display the number of rows
            display(array[0]);
        };
    } else if (array[0] === "triangle"){
        for(i = 0; i < arrayNum; i++){
            triangle();
        }
    }else {
        display(currentInput);
    }
};

// output box
var display = function(stuffToDisplay){
  // your DOM manipulation code here
  var p = document.createElement("p");
  for (var i = 0; i < stuffToDisplay; i++){
    totalEmoji = totalEmoji + emoji;
  }
  p.innerHTML = totalEmoji;
  totalEmoji = "";
  stuff.appendChild(p)
};