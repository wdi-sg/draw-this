let enteredEmoji = false;
let emoji;
let text = "";
let paragraph;
let input = document.querySelector("#input");
let output = document.querySelector("#output");
output.textContent = "Please enter an emoji to begin!";

var inputHappened = function(currentInput) {
  if (enteredEmoji === false) {
    emoji = currentInput;
    enteredEmoji = true;
    output.textContent = "";
    input.value = "";
  } else if (enteredEmoji === true) {
    let numOfEmojis = currentInput;
    let sentence = currentInput;
    let wordArray = sentence.split(" ");
    let emojis = parseInt(wordArray[0]);
    let row = parseInt(wordArray[1]);

    if (!isNaN(parseInt(numOfEmojis)) && wordArray.length === 1) {
      for (let i = 0; i < numOfEmojis; i++) {
        paragraph = document.createElement("p");
        text = text + emoji;
        paragraph.textContent = text;
      }
      output.appendChild(paragraph);
      text = "";
      input.value = "";
    } else if (wordArray.length > 1) {
      if (isNaN(emojis)) {
        output.removeChild(output.childNodes[row - 1]);
        input.value = "";
      } else {
        for (i = 0; i < emojis; i++) {
          text = text + emoji;
        }
        for (j = 0; j < row; j++) {
          paragraph = document.createElement("p");
          paragraph.textContent = text;
          output.appendChild(paragraph);
        }
        text = "";
        input.value = "";
      }
    } else if (emojis === "triangle" && wordArray > 1) {
      console.log("must draw triangle");
    } else if (currentInput === "clear") {
      output.textContent = "";
      input.value = "";
    }
  }
};

var display = function(stuffToDisplay) {};
