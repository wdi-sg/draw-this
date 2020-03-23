console.log("hello script js");
var threePineapple = "🍍🍍🍍";
var twoPineapple = "🍍🍍";

var inputHappened = function(currentInput){
  console.log( currentInput );
  if (parseInt(currentInput) === 3) {
    display("🍍🍍🍍");
  } else if (parseInt(currentInput) === 2) {
    return display(pineappleTwoRow);
  }
};


// var display = function(stuffToDisplay){
//   // your DOM manipulation code here
//   var output = document.querySelector('#output')
//     output.innerHTML = stuffToDisplay;
//     var document.querySelector()
// };