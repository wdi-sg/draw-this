var inputHappened = function(currentInput){
  var inArr = currentInput.split(" ");
  var command, times, outStr;

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
  var rows = document.querySelectorAll("#output p");
  console.log(rows);
  rows[row - 1].remove();
};

// string builder helper functions
var createRow = function (innerStr) {
  var p = document.createElement("p");
  p.innerText = innerStr;
  return p;
}

var emojiString = function (emoji, times) {
  var emoji = emoji;
  return emoji.repeat(times);
};
