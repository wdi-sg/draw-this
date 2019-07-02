var inputArray = [];
var showArray;

var i = 0;

var inputHappened = function(currentInput){
    document.getElementById("input").value = "";
    console.log( currentInput );
    console.log("inputArray: " + inputArray);

    for (i = 0; i < currentInput; i++) {
            console.log('i: ' + i)
            inputArray.push("🍍");
            console.log('inputArray: ' + inputArray)

        if (inputArray.length === currentInput) {
            console.log("currentInput: " + currentInput);
            inputArray.push(" ");
        }

    }
    display();

};

var display = function(){
  document.getElementById("output").innerHTML = inputArray;
};

// console.log("hello script js");

// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   display( "WOW SOMETHING HAPPENED" );
// };

// var display = function(stuffToDisplay){
//   // your DOM manipulation code here

// };