console.log("hello script js");

// Part 1 - Second version
var inputHappened = function(currentInput) {
    console.log(currentInput);
    var output = document.getElementById("output");
    var inputArray = currentInput.split(" ");
    console.log(inputArray);
    var int = parseInt(inputArray[1] - 1);
    console.log(int);
    if (currentInput == "clear") {
        output.innerHTML = "";
    } else if (inputArray[0] == "clear") {
        var content = output.innerHTML;
        console.log(content);
        var contentArray = content.split("<br>");
        console.log(contentArray);
        contentArray.splice(int, 1);
        console.log(contentArray);
        var newContent = "";
        for (i = 0; i < contentArray.length; i++) {
            newContent += contentArray[i];
            if (i != contentArray.length - 1) {
                newContent += "<br>";
            }
            console.log(contentArray[i]);
            console.log(newContent);

        }

        output.innerHTML = newContent;

    } else if (!isNaN(currentInput) && currentInput != "") {
        display(currentInput);
    }
};

var display = function(stuffToDisplay) {
    var output = document.getElementById("output");
    var content = "";
    var repeat = parseInt(stuffToDisplay);
    for (i = 0; i < repeat; i++) {
        content += "🍍";
    }
    content += "<br>"
    output.innerHTML += content;

};