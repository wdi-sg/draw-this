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
    pineappleArray = pineappleText.split('</p><p>');
    pineappleArray.splice(1,1);
    output.innerHTML = pineappleArray[0];
}



var inputHappened = function(currentInput){
  console.log(currentInput);
  resetInput();
  if (currentInput === "3") {
    display("<p>🍍🍍🍍</p>");
  };

  resetInput();

  if (currentInput === "2") {
    display("<p>🍍🍍</p>");
  };

  if (currentInput.toLowerCase() === 'clear') {
    resetOutput();
  };

  if (currentInput.toLowerCase() === 'clear 2') {
    makePineappleArray();
  }

  if (currentInput === "2 2") {
    display("<p>🍍🍍</p>") + display("<p>🍍🍍</p>");
  }
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
    output.innerHTML += stuffToDisplay;

};