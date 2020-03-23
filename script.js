console.log("hello script js");
var threePineapple = "🍍🍍🍍";
var twoPineapple = "🍍🍍";

var resetInput = function() {
    input.value = "";
}

var resetOutput = function() {
    var output = document.querySelector('#output')
    output.innerHTML = "";
}

var inputHappened = function(currentInput){
  console.log(currentInput);
  resetInput();
  if (parseInt(currentInput) === 3) {
    display("🍍🍍🍍");
  };

  resetInput();

  if (parseInt(currentInput) === 2) {
    display("<br>") + display("🍍🍍");
  };

  if (currentInput.toLowerCase() === 'clear') {
    resetOutput();
  };
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
    var output = document.querySelector('#output')
    output.innerHTML += stuffToDisplay;
};