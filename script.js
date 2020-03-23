var inputHappened = function(currentInput){
  var inArr = currentInput.split(" ");
  var command, times, outStr;

  if (inArr.length === 1) {
    if (currentInput === "clear") {
      clearDisplay();
    }
    num = Number(inArr[0]);
    outStr = emojiString(num);
    display(outStr);
  } else {
    command = inArr[0];
    num = Number(inArr[1]);

    switch (command) {
    case "draw":
      outStr = emojiString(num);
      display(outStr);
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
  var outElement = document.createElement("p");
  outElement.innerText = stuffToDisplay;
  document.querySelector("#output").appendChild(outElement);
};

var clearInput = function () {
  document.querySelector("#input").value = "";
}

var clearDisplay = function () {
  document.querySelector("#output").innerHTML = "";
}

var clearRow = function (row) {
  var rows = document.querySelectorAll("#output p");
  console.log(rows);
  rows[row].remove();
}

// string builder helper functions
var emojiString = function (times) {
  var emoji = "🍍";
  return emoji.repeat(times);
}
