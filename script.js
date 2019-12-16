console.log("hello script js");
let pineappleText = "";
let pineappleParagraph;
let input = document.querySelector("#input");
let output = document.querySelector("#output");

var inputHappened = function(currentInput) {
  let numOfPineapples = currentInput;
  let sentence = currentInput;
  let wordArray = sentence.split(" ");
  let pineapples = parseInt(wordArray[0]);
  let row = parseInt(wordArray[1]);

  if (!isNaN(parseInt(numOfPineapples)) && wordArray.length === 1) {
    for (let i = 0; i < numOfPineapples; i++) {
      pineappleParagraph = document.createElement("p");
      pineappleText = pineappleText + "🍍";
      pineappleParagraph.textContent = pineappleText;
    }
    output.appendChild(pineappleParagraph);
    pineappleText = "";
    input.value = "";
  } else if (wordArray.length > 1) {
    if (isNaN(pineapples)) {
      output.removeChild(output.childNodes[row - 1]);
      input.value = "";
    } else {
      for (i = 0; i < pineapples; i++) {
        pineappleText = pineappleText + "🍍";
      }
      for (j = 0; j < row; j++) {
        pineappleParagraph = document.createElement("p");
        pineappleParagraph.textContent = pineappleText;
        output.appendChild(pineappleParagraph);
      }
      pineappleText = "";
      input.value = "";
    }
  } else if (currentInput === "clear") {
    output.textContent = "";
    input.value = "";
  } 
};

var display = function(stuffToDisplay) {};
