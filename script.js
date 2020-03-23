var emoji = "";

var instr = document.createElement("h2");
instr.innerText = "Usage: \n" +
  "<command> [arg(s)]\n\n" +
  "command: draw, clear. If this is a number, command will default to draw.\n" +
  "arg: number. if provided with draw, will draw this many.\n" +
  "if provided with clear, will remove nth row from the top.";

var inputBox = document.querySelector("#input");
document.querySelector("body").insertBefore(instr,inputBox);

document.querySelector("#output").innerText = "Enter an emoji! (or just a character)";

var inputHappened = function (currentInput) {
  var inArr = currentInput.split(" ");
  var command, times, outStr;

  clearInput();

  if (emoji === "") {
    emoji = currentInput;
    document.querySelector("#output").innerText = "";
    return;
  }

  if (inArr.length === 1) {
    if (currentInput === "clear") {
      clearDisplay();
    }
    num = Number(inArr[0]);
    outStr = emojiString(emoji, num);
    display(createRow(outStr));
  } else {
    command = inArr[0];
    num = Number(inArr[1]);

    if (!isNaN(command)) {
      console.log("trying here");
      while (inArr.length > 0) {
        outStr = emojiString(emoji, inArr.shift());
        display(createRow(outStr));
      }
    }

    switch (command) {
    case "draw":
      outStr = emojiString(emoji, num);
      display(createRow(outStr));
      break;
    case "clear":
      clearRow(num);
      return;
    default:
      return;
    }
  }
};

// input/display helper functions
var display = function(stuffToDisplay){
  document.querySelector("#output").appendChild(stuffToDisplay);
};

var clearInput = function () {
  document.querySelector("#input").value = "";
}

var clearDisplay = function () {
  document.querySelector("#output").innerHTML = "";
};

var clearRow = function (row) {
  var rows = document.querySelectorAll("#output code");
  console.log(rows);
  rows[row - 1].remove();
};

// string builder helper functions
var createRow = function (innerStr) {
  var el = document.createElement("code");
  el.innerText = innerStr;
  el.style.display = "block";
  return el;
}

var emojiString = function (emoji, times) {
  var emoji = emoji;
  return emoji.repeat(times);
};
