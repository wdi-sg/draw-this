console.log("hello script js");

var inputHappened = function(currentInput){
    if (currentInput === "clear"){

    }
    else {
        let numOfPineapples = parseInt(currentInput.trim());
        if (!isNaN(numOfPineapples)) {
            let pineappleLine = document.createElement("div");
            for (var i=0;i<numOfPineapples;i++){
                let pineapple = document.createElement("span");
                pineapple.innerText = "🍍";
                pineappleLine.appendChild(pineapple);
            }
            display(pineappleLine);
            displayError("");
        }
        else {
            displayError("Please type in a valid number!");
        }
    }
};

var display = function(stuffToDisplay){
    document.getElementById("output").appendChild(stuffToDisplay);
};

var displayError = (data) => {
    let errorDisplay = document.querySelector('#error');
    errorDisplay.innerText = data;
}