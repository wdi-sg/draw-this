let banana = '🍌';
let inputArr = [];
let outputMessage = "";
console.log("hello script js");

var clearInput = function(msg = "") {
    var input = document.getElementById("input");
    input.value = '';
    input.placeholder = msg;
};

var inputHappened = function(currentInput) {
    currentInput = currentInput.trim().toLowerCase();
    inputArr = currentInput.split(' ');
    let drawAtInterval = "";

    if (inputArr.length === 1 && inputArr[0] === "clear") {
        clearScr();
    } else if (inputArr.length === 1 && !isNaN(parseInt(inputArr[0]))) {
        display(drawBananas(parseInt(inputArr[0])));
    } else if (inputArr.length > 1 && inputArr[0] === "clear") {
        clearLine(parseInt(inputArr[1]));
    } else if (inputArr.length > 1 && !isNaN(parseInt(inputArr[0]))) {
        for (let i = 0; i < inputArr.length; i++) {
            console.log(`loop: ${i}`);
            display(drawBananas(inputArr[i]));
        }
    } else if (inputArr.length > 1 && inputArr[0] === "triangle") {
        drawTriangle(parseInt(inputArr[1]));
    } else if (inputArr.length > 1 && inputArr[0] === "rtriangle") {
        drawRTriangle(parseInt(inputArr[1]));
    } else if ( inputArr[0] === "drawsquares") {
        drawFourSquares();
    } else if ( inputArr.length > 1 && inputArr[0] === "etriangle") {
        drawETriangle(parseInt(inputArr[1]));
    } else if ( inputArr.length > 1 && inputArr[0] === "eutriangle") {
        drawEUTriangle(parseInt(inputArr[1]));
    }
    else { clearInput(); }
};

var display = function(message) {
    var output = document.querySelector('#output');
    output.innerHTML = message;
    clearInput();
};

var clearScr = function() {
    display('');
    clearInput();
    inputArr = [];
    outputMessage = "";
};

var drawBananas = function(integerIP) {
    outputMessage += "<p>";
    for (let i = 1; i <= integerIP; i++) {
        outputMessage += banana;
    }
    outputMessage += "</p>";
    return outputMessage;
};

var clearLine = function(lineNumberToBeClear) {
    let lineClear = document.getElementById('output');
    if ((lineNumberToBeClear - 1) < 0 || (lineNumberToBeClear - 1) >= lineClear.childElementCount) {
        clearInput(`Line Number: ${lineNumberToBeClear} invalid`);
    } else {
        lineClear.removeChild(lineClear.childNodes[lineNumberToBeClear - 1]);
        outputMessage = output.innerHTML;
        clearInput();
    }
}

var drawTriangle = function(intNumber) {
    for (let i = 1; i <= intNumber; i++) {
        display(drawBananas(i));
    }
};

var drawRTriangle = function(intNumber) {
    inverseNum = 1;
    let msg = "";
    for (let i = 1; i <= intNumber; i++) {
        msg += "<p>";
        for (let j = 1; j <= (intNumber - inverseNum); j++) {
            msg += "&nbsp";
            console.log(`j:${j}`);
            }
        for (let k = 1; k <= i; k++) {
            console.log(`k:${k}`);
            msg += banana;
            }
        msg += "</p>";
        inverseNum++;
        console.log(msg)
        display(msg);
    }
};

var drawFourSquares = function() {
    clearinput();
    // some other time bah...
};

var drawETriangle = function(intNumber) {
    console.log(`ETRIANGLE`);
    let msg = "";
    for (let i = 1; i <= intNumber; i++) {
        msg = "<p style='text-align:center;'>";
        for (let j = 1; j <= i; j++) {
            msg += banana;
        }
        msg += "</p>";
        display(output.innerHTML + msg);
    }

}

var drawEUTriangle = function(intNumber) {
    console.log(`ETRIANGLE`);
    let msg = "";
    for (let i = 0; i < intNumber; i++) {
        msg = "<p style='text-align:center;'>";
        for (let j = 1; j <= intNumber - i; j++) {
            msg += banana;
        }
        msg += "</p>";
        display(output.innerHTML + msg);
    }

}
