console.log("hello script js");

var inputHappened = function(currentInput){
  // console.log( currentInput );
  // display( "WOW SOMETHING HAPPENED" );
  drawVegetable(currentInput);
  // clearInput(currentInput);
  // clearInput2(currentInput);
};

// var display = function(stuffToDisplay){
//   // your DOM manipulation code here
//   var output = document.querySelector('#output');
//   output.innerText = data;

// };

var emoji = "🥬";
var totalEmoji = "";
var drawVegetable = function(currentInput) {
    var output = document.getElementById('output');
    var vegetable = document.createElement("p");
    for (var i = 0; i < currentInput; i++) {
        totalEmoji = totalEmoji + emoji
    }
        vegetable.textContent = totalEmoji;
        totalEmoji = "";
        output.appendChild(vegetable);
};

// var clearInput2 = function(clearInput) {
//     if (currentInput) {

//         "Greetings friend"

//     }
// };

// var listVegetable = output.childNodes;
// listVegetable.removeChild(listVegetable.childNodes[0]);

// output.appendChild(vegetable);
    // var clearInput = function(currentInput) {
    // if (currentInput === "clear") {
    //     location.reload();
    // }