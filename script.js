console.log("hello script js");

var resetInput = function() {
    input.value = "";
};

var output = document.querySelector('#output');

var resetOutput = function() {
    // var output = document.querySelector('#output');
    output.innerHTML = "";
};

var makePineappleArray = function() {
    var pineappleText = output.innerHTML;
    pineappleArray = pineappleText.split('<br>');
    pineappleArray.splice(1,1);
    output.innerHTML = pineappleArray[0];
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

  if (currentInput.toLowerCase() === 'clear 2') {
    makePineappleArray();
  }
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
    output.innerHTML += stuffToDisplay;
};