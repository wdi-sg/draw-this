const output = document.getElementById("output");
var row = document.getElementById("row");
var col = document.getElementById("col");
const draw = document.getElementById("submit");
const clear = document.getElementById("clear-button");
const sideTriangle = document.getElementById("side-triangle");
const upsideTriangle = document.getElementById("upside-triangle");
const topTriangle = document.getElementById("top-triangle");
const clearOption = document.getElementById("clear");
const dropDown = document.getElementById("dropdown");
var rocol = [];
var status = "";
let emojis = [0x1F970, 0x1F60D, 0x1F63B, 0x1F496, 0x1F498];

//------------------- PAGE LOADS ----------------------------->
clearOption.style.display = "none";

emojis.forEach( emoji=> {
    let option = document.createElement("option");
    option.innerHTML = String.fromCodePoint(emoji);
    dropDown.appendChild(option);
});

//--------------------- EVENT LISTENERS STARTS --------------->

draw.addEventListener('click', drawSquare);
clear.addEventListener('click', clearLine);
sideTriangle.addEventListener('click', drawSideTriangle);
upsideTriangle.addEventListener('click', drawUpsideTriangle);
topTriangle.addEventListener('click', drawTopTriangle);

// -------------- DRAWING FUNCTIONS ---------------->

function drawSquare() {
    clearOption.style.display = "none";
    if (!validateInput()) {
        return;
    }

    if (rocol.length == 0) {
        storeIntoArray();
    }

    output.innerHTML = "";
    for (let i = 0; i < rocol.length; i++) {
        for (let j = 0; j < rocol[i]; j++) {
            output.innerHTML += dropDown.options[dropDown.selectedIndex].value;
        }
        output.innerHTML += "<br>";
    }
    displayClear();
    status = "square";
    clearInputs();
}

function drawSideTriangle() {
    if (!validateInput()) {
        return;
    }
    if (rocol.length == 0) {
        storeIntoArray();
    }

    output.innerHTML = "";

    for (let i = 0; i < rocol.length; i++) {
        for (let j = 0; j < i + 1; j++) {
            output.innerHTML += dropDown.options[dropDown.selectedIndex].value;
        }
        output.innerHTML += "<br>";
    }
    displayClear();
    status = "sideTriangle";
    clearInputs();
}

function drawUpsideTriangle() {
    if (!validateInput()) {
        return;
    }
    if (rocol.length == 0) {
        storeIntoArray();
    }

    output.innerHTML = "";

    for (let i = 0; i < rocol.length; i++) {

        for (let j = rocol.length + 1; j > rocol.length - (i * 2); j--) {
            output.innerHTML += '&nbsp';
        }
        for (let j = rocol.length - i; j > 0; j--) {
            output.innerHTML += dropDown.options[dropDown.selectedIndex].value;
        }
        output.innerHTML += "<br>";
    }
    displayClear();
    status = "upsideTriangle";
    clearInputs();
}

function drawTopTriangle() {
    if (!validateInput()) {
        return;
    }
    if (rocol.length == 0) {
        storeIntoArray();
    }
    output.innerHTML = "";
//let j = i; j < rocol.length + (rocol.length - (i * 2)); j++
    for (let i = 0; i < rocol.length; i++) {
        for (let j = i; j < rocol.length + (rocol.length - i * 0.5); j++) {
            output.innerHTML += '&nbsp';
        }
        for (let j = 0; j < i + 1; j++) {
            output.innerHTML += dropDown.options[dropDown.selectedIndex].value;
        }
        output.innerHTML += "<br>";
    }
    displayClear();
    status = "topTriangle";
    clearInputs();
}

//---------------- CLEAR LINE FUNCTIONS ----------->

function clearLine() {
    const clearLine = document.getElementById("clear-input");

    if (clearLine.value <= rocol.length) {
        rocol.pop();
        if (status == "side-triangle") {
            drawSideTriangle();
        }
        else if (status == "square") {
            drawSquare();
        }
        else if (status == "upsideTriangle") {
            drawUpsideTriangle();
        }
        else if (status == "topTriangle") {
            drawTopTriangle();
        }
    }
    else {
        document.getElementById("clear-output").innerHTML = "Oops! The line is invalid, please key in between 1 and " + rocol.length;
    }
    clearLine.value = "";
    clearInputs();
}

// --------------- HELPER FUNCTIONS ------------->

function storeIntoArray() {
    if (status == "") {
        for (let i = 0; i < row.value; i++) {
            rocol.push(col.value);
        }
    }
}

function displayClear() {
    if (output.innerHTML != "") { clearOption.style.display = "initial";}
    else { clearOption.style.display = "none"; }
}

function clearInputs() {
    row.value = "";
    col.value = "";
}

function validateInput() {
    if (isNaN(row.value) || isNaN(col.value)) {
        output.innerHTML = "Invalid input ~";
        return false;
    }
    return true;
}