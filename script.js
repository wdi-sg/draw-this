console.log("hello script js");
let pineappleText = "";
let input = document.querySelector("#input");
let output = document.querySelector("#output");

var inputHappened = function(currentInput) {
  let sentence = currentInput;
  let wordArray = sentence.split(" ");
  let pineapples = document.querySelectorAll(".pineapple");
  let index = parseInt(wordArray[1]);

  console.log(parseInt(wordArray[0]));

  if (currentInput === "clear") {
    output.textContent = "";
  } else if (wordArray.length > 1) {
    if (isNaN(parseInt(wordArray[0]))) {
      output.removeChild(output.childNodes[index - 1]);
    } else {
      // parseInt word array at position 0, do a loop for as many times as i < arry[0],
      // every time creating a p element and appending it.
    }
  }
  display(currentInput);
};

var display = function(stuffToDisplay) {
  // your DOM manipulation code here
  for (let i = 0; i < stuffToDisplay; i++) {
    pineappleText = pineappleText + "🍍";
  }
  let paragraph = document.createElement("p");
  paragraph.classList.add("pineapple");
  paragraph.textContent = pineappleText;
  output.appendChild(paragraph);
  pineappleText = "";
  input.value = "";
};
