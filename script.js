console.log("hello script js");
initialize();
chooseEmoji();
var emojiSelected = false;
var selectedEmoji = "";

// Part 3 - emoji selection

// Function on input + enter
var inputHappened = function(currentInput) {
    console.log(currentInput);
    clearInput();
    if (emojiSelected == false) {
        selectEmoji(currentInput);
    } else {
        var args = currentInput.split(" ")
        if (!isNaN(currentInput)) {
            display(currentInput);
        } else if (args[0] == "clear" && !isNaN(args[1])) {
            clearRow(args[1]);
        } else if (currentInput == "clear") {
            clearOutput();
        } else if (currentInput == "reset") {
            clearOutput();
            selectedEmoji = "";
            emojiSelected = false;
            chooseEmoji();
        } else if (!isNaN(args[0]) && !isNaN(args[1])) {
            display(args[0]);
            display(args[1]);
        } else {
            //do nothing
        }
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

// Clears value in input textbox
function clearInput() {
    var input = document.getElementById("input");
    input.value = "";
}
// Replaces starter code output <p> with new output <div>, adds <p> styling
function initialize() {
    var output = document.getElementById("output");
    output.style.display = "none";
    output.id = "obsolete";
    var outputDiv = document.createElement("div");
    outputDiv.className = "starter";
    outputDiv.id = "output";
    outputDiv.style.display = "block"
    var script = document.getElementsByTagName("script")
    document.body.insertBefore(outputDiv, script[0]);
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
    var output = document.getElementById("output")
    var outputPara = document.createElement("p");
    outputPara.innerHTML = content;
    output.appendChild(outputPara);
}

// Clears output content
function clearOutput() {
    var output = document.getElementById("output")
    while (output.firstChild) {
        output.removeChild(output.lastChild);
    }
}

// Clears specified row of output
function clearRow(rowNumber) {
    var arrayIndex = parseInt(rowNumber) - 1;
    var output = document.getElementById("output")
    var children = output.childNodes;

    output.removeChild(children[arrayIndex]);

}

function chooseEmoji() {
    addPara("Choose an emoji:")
    addPara("1. ♠");
    addPara("2. ♦");
    addPara("3. ♣");
    addPara("4. ♥");
}

function selectEmoji(input) {
    switch (input) {
        case "1":
            selectedEmoji = "♠"
            emojiSelected = true;
            clearOutput();
            alert(`${selectedEmoji} emoji selected`);
            break;
        case "2":
            selectedEmoji = "♦"
            emojiSelected = true;
            clearOutput();
            alert(`${selectedEmoji} emoji selected`);
            break;
        case "3":
            selectedEmoji = "♣"
            emojiSelected = true;
            clearOutput();
            alert(`${selectedEmoji} emoji selected`);
            break;
        case "4":
            selectedEmoji = "♥"
            emojiSelected = true;
            clearOutput();
            alert(`${selectedEmoji} emoji selected`);
            break;
        default:
            selectedEmoji = "";
            break;
    }

}