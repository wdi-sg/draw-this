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

var guider = "start";

var emoji;
var emojiThree = "<p>" + emoji + emoji + emoji + "</p>";
var emojiTwo = "<p>" + emoji + emoji + "</p>";

var userEmoji = function(userInput) {
    emoji = userInput;
    emojiThree = "<p>" + emoji + emoji + emoji + "</p>";
    emojiTwo = "<p>" + emoji + emoji + "</p>";
};


input.placeholder = "What character or emoji do you want to draw?";

var inputHappened = function(currentInput){
  console.log(currentInput);
  resetInput();
  input.placeholder = "how many emoji?";

  if (currentInput !== "" && guider === "start"){
    userEmoji(currentInput);
    guider = "";
  } else if (guider === "start") {
    emoji = "🍍"
    emojiTwo = "<p>" + emoji + emoji + "</p>";
    emojiTwo = "<p>" + emoji + emoji + "</p>";
  };

  if (currentInput === "3" && guider === ""){
    display(emojiThree);
  };

  resetInput();

  if (currentInput === "2" && guider === ""){
    display(emojiTwo);
  };

  if (currentInput.toLowerCase() === 'clear'){
    resetOutput();
  };

  if (currentInput.toLowerCase() === 'clear 2'){
    makePineappleArray();
  };

  if (currentInput === "2 2"){
    display("<p>🍍🍍</p>") + display("<p>🍍🍍</p>");
  };
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
    output.innerHTML += stuffToDisplay;

};