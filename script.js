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
var emojiThree;
var emojiTwo;

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

  if (guider === "start"){
    userEmoji(currentInput);
    guider = "";
  };

  if (currentInput === "3" && guider === ""){
    display(emojiThree);
  };

  resetInput();

  if (currentInput === "2" && guider === ""){
    display(emojiTwo);
  };

  if (currentInput === "1" && guider === ""){
    display(emoji);
  };

  if (currentInput.toLowerCase() === 'clear'){
    resetOutput();
  };

  if (currentInput.toLowerCase() === 'clear 2'){
    makePineappleArray();
  };

  if (currentInput === "2 2" && guider === ""){
    display(emojiTwo) + display(emojiTwo);
  };

   if (currentInput === "triangle 3"){
    display(emoji) + display(emojiTwo) + display(emojiThree);
  };

  if (currentInput === "rtriangle 3"){
    rEmoji = "<p>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + emoji + "</p>";
    rEmojiTwo = "<p>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + emoji + emoji + "</p>";

    display(rEmoji) + display(rEmojiTwo) + display(emojiThree);
  }
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
    output.innerHTML += stuffToDisplay;

};