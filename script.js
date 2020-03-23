outputHeader = document.querySelector("h2");

//Input validation
var invalidMessage = document.createTextNode(` Please enter a positive whole number to print ${charToPrint}'s, or type in "clear" to get rid of them!`)

displayInvalidMessage = () => {
    outputHeader.append(invalidMessage);
}

var clearRegex = /^clear\s[0-9]+/;
var triangleRegex = /^triangle\s[0-9]+/;
var reverseTriangleRegex = /^rtriangle\s[0-9]+/;

//
var clearNumber;
var triangleNumber;
var reverseTriangleNumber;
var whiteSpace = "&nbsp;"
var charToPrint = "🍍"
var numberOfCharRows;
var charParagraphs;

//
var inputHappened = function(currentInput){
    if (currentInput.toLowerCase().trim() === "clear") {
        outputField.innerHTML = ""

    //Validate clearing multiple rows input
    } else if (currentInput.toLowerCase().trim().match(clearRegex)) {
        clearNumber = parseInt(currentInput.trim().split(" ")[1]);
        var charList = document.querySelectorAll("#output > p");

        //if user tries to clear a number larger than existing lines
        try {
        outputField.removeChild(charList[clearNumber - 1]);
        } catch (e) {
            if (clearNumber > charList.length) {
                alert `You can't clear a non-existent line!`
            } else {
                console.log(e);
            }
        }
    //Validate triangle  plus number input
    } else if (currentInput.toLowerCase().trim().match(triangleRegex)) {
        triangleNumber = parseInt(currentInput.trim().split(" ")[1]);
        for (var i = 1; i < triangleNumber + 1; i++) {
            display(i, charToPrint);
        }

    //Validate rtriangle plus number input
    } else if (currentInput.toLowerCase().trim().match(reverseTriangleRegex)) {
        reverseTriangleNumber = parseInt(currentInput.trim().split(" ")[1]);
        for (var i = 1; i < reverseTriangleNumber + 1; i++) {
            display(i, charToPrint);
        }
        charParagraphs = document.querySelectorAll("#output > p");
        var paraStartingNumber = charParagraphs.length - reverseTriangleNumber;
        for (var j = paraStartingNumber; j < charParagraphs.length; j++) {
            charParagraphs[j].insertAdjacentHTML("afterbegin", whiteSpace.repeat(charParagraphs.length - j));
        }

    } else if (Number.isInteger(parseInt(currentInput)) && parseInt(currentInput) > 0) {
        outputHeader.innerHTML = "output: "
        numberOfCharRows = currentInput.trim().split(" ");
        for (var i = 0; i < numberOfCharRows.length; i++){
            display(numberOfCharRows[i], charToPrint);
        }
    } else {
        displayInvalidMessage();
    }
};


var display = function(stuffToDisplay, char){
  // your DOM manipulation code here
    var emptyPara = document.createElement("p");
    outputField.appendChild(emptyPara);
    for (let i = 0; i < parseInt(stuffToDisplay); i++) {
            emptyPara.append(char);
    }
};