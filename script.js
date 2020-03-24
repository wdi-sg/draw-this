console.log("hello script js");
initialize();
reset();
var drawSelected = false;
var gameSelected = false;
var gameStarted = false;
var selectedEmoji = "";
var output;
var input = document.getElementById("input")

// Part 6 - draw game

// Function on input + enter
var inputHappened = function(currentInput) {
    console.log(currentInput);
    clearInput();
    if (drawSelected == false && gameSelected == false) {
        selectDrawOrGame(currentInput);
    } else if (drawSelected == false && gameSelected == true) {
        startGame(currentInput);
    } else if (drawSelected == false && gameSelected == true && gameStarted == true) {
        gameOptions(currentInput);
    } else if (drawSelected == true && gameSelected == false) {
        drawOptions(currentInput);
    }
    else if (currentInput == "clear") {
        clearOutput();
    }
    else if (currentInput == "reset") {
        reset();
    }

};

//Generates content that will be put in <p>
var display = function(stuffToDisplay) {
    var content = "";
    var repeat = parseInt(stuffToDisplay);
    for (i = 0; i < repeat; i++) {
        content += selectedEmoji;
    }
    addPara(content);

};

var customDisplay = function(length, character) {
    var content = "";
    var repeat = parseInt(length);
    for (i = 0; i < length; i++) {
        content += character;
    }
    return content;

};

// Clears value in input textbox
function clearInput() {
    input.value = "";
}

function placeholder(text) {
    input.placeholder = text;
}
// Replaces starter code output <p> with new output <div>, adds <p> styling
function initialize() {
    var tempOutput = document.getElementById("output");
    tempOutput.style.display = "none";
    tempOutput.id = "obsolete";
    var outputDiv = document.createElement("div");
    outputDiv.className = "starter";
    outputDiv.id = "output";
    outputDiv.style.display = "block"
    var script = document.getElementsByTagName("script")
    document.body.insertBefore(outputDiv, script[0]);
    output = document.getElementById("output");
    var style = document.createElement('style');
    style.innerHTML = `
  p {
  margin-top: 0px;margin-bottom: 0px;
  }
  `;
    document.head.appendChild(style);
}

// Adds content to newly created <p>
function addPara(content) {
    var outputPara = document.createElement("p");
    outputPara.innerHTML = content;
    output.appendChild(outputPara);
}

// Clears output content
function clearOutput() {
    output = document.getElementById("output");
    output.innerText = "";
}

// Clears specified row of output
function clearRow(rowNumber) {
    var arrayIndex = parseInt(rowNumber) - 1;
    var children = output.childNodes;
    output.removeChild(children[arrayIndex]);

}
// Print emoji selection
function reset() {
    clearOutput();
    selectedEmoji = "";
    drawSelected = false;
    gameSelected = false;
    gameStarted = false;
    addPara("Choose an emoji to start drawing:")
    addPara(" 1.  ♠  | 2.  ♦  | 3.  ♣  | 4.  ♥  ");
    addPara("&nbsp");
    addPara("Or play game: type 'game' to start");

}

// Function for selecting emoji
function selectDrawOrGame(input) {
    switch (input) {
        case "1":
            selectedEmoji = "♠"
            drawSelected = true;
            clearOutput();
            alert(`Draw mode with ${selectedEmoji} emoji selected`);
            break;
        case "2":
            selectedEmoji = "♦"
            drawSelected = true;
            clearOutput();
            alert(`Draw mode with ${selectedEmoji} emoji selected`);
            break;
        case "3":
            selectedEmoji = "♣"
            drawSelected = true;
            clearOutput();
            alert(`Draw mode with ${selectedEmoji} emoji selected`);
            break;
        case "4":
            selectedEmoji = "♥"
            drawSelected = true;
            clearOutput();
            alert(`Draw mode with ${selectedEmoji} emoji selected`);
            break;
        case "game":
            selectedEmoji = "⭕";
            gameSelected = true;
            clearOutput();
            alert(`Game mode selected`);
            addPara("Input size of game board:");
        default:
            selectedEmoji = "";
            break;
    }

}

// Print triangle
function triangle(height) {
    for (i = 1; i <= height; i++) {
        display(i);
    }
}

// Print reverse triangle
function rtriangle(height) {
    var height2 = parseInt(height);
    var rowContent = "";
    var i = 1;
    while (i <= height2) {
        rowContent += customDisplay((height2 - i), "&nbsp&nbsp&nbsp");
        rowContent += customDisplay(i, selectedEmoji);
        console.log(rowContent);
        addPara(rowContent);
        rowContent = "";
        i++;
    }
}

function startGame(input) {
    clearOutput();
    boardBuilder(input);
    gameStarted = true;
}

function boardBuilder(size) {
    var intSize = parseInt(size);
    var i = 1
    while (i <= intSize) {
        addPara(customDisplay(intSize, "⬜"));
        i++;
    }
}

function drawOptions(currentInput) {
    var args = currentInput.split(" ")
    var allNum = function(args) {
        var allNum = true;
        for (element in args) {
            if (isNaN(args[element])) {
                allNum = false;
            }
        }
        return allNum;
    }
    if (!isNaN(currentInput)) {
        display(currentInput);
    } else if (args[0] == "clear" && !isNaN(args[1])) {
        clearRow(args[1]);
    } else if (currentInput == "clear") {
        gameStarted = false;
        clearOutput();
    } else if (currentInput == "reset") {
        reset();
    } else if (allNum(args) == true) {
        for (element in args) {
            display(args[element]);
        }
    } else if (args[0] == "triangle" && !isNaN(args[1])) {
        triangle(args[1]);
    } else if (args[0] == "rtriangle" && !isNaN(args[1])) {
        rtriangle(args[1]);
    } else {
        //do nothing
    }
}

function gameOptions(currentInput) {
    var args = currentInput.split(" ")
    if (!isNaN(currentInput)) {
        display(currentInput);
    } else if (currentInput == "clear") {
        clearOutput();
    } else if (currentInput == "reset") {
        reset();
    } else if (!isNaN(args[0]) && !isNaN(args[1])) {
        display(args[0]);
        display(args[1]);
    } else {
        //do nothing
    }
}