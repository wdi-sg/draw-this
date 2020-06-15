console.log("hello script js");
document.getElementById("output").innerText = "Draw with emoji"

//variables and functions
var emoji = "";

function clearElements() {
    document.querySelector("#input").value = "";
    document.getElementById("output").innerText = "";
}

function splitInput(x) {
    var array = x.split(" ");
    return array;
}

//DOM Manipulation code goes here
var inputHappened = function(currentInput){

    var array = splitInput(currentInput);
    var arrayNumber = parseInt(array[1]);

    if (array.length === 1 && array[0] === "clear") {
        clearElements();
    } else if (array[0] === "clear" && array.length > 1) {
        document.getElementById("output").splice(arrayNumber, 1);
    } else if (typeof(array[0]) !== 'number' && typeof(array[1])!== 'number') {
        for (var i = 0; i < arrayNumber; i++) {
        display(array[0]);
        }
    } else {
        display(currentInput);
    }
}

var display = function(stuffToDisplay){
    var pTag = document.createElement('p');

    for (var i = 0; i < stuffToDisplay; i++) {
    emoji += "🗿";
    }

    pTag.classList.add("emoji");
    pTag.textContent = emoji;

    var output = document.getElementById("output");
        output.appendChild(pTag);
    };