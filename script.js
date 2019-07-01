console.log("hello script js");
var output = document.getElementById("output");
var emoji = "🍍";

var updateEmoji = function(newEmoji){
    emoji = newEmoji;
}
var inputHappened = function(currentInput){
    //split user's input when there is spaces and store into an array
    let inputArray = currentInput.split(" ");
    if (inputArray[1]){
        //trim user's input from second item of inputArray and convert it into an integer
        numOfPineapples = parseInt(inputArray[1].trim());
    }
    else {
        //trim user's input from first item of inputArray and convert it into an integer
        numOfPineapples = parseInt(inputArray[0].trim());
    }
    // check if the first item in the inputArray is "clear"
    if (inputArray[0].toLowerCase() === "clear"){
        //if there is a second item in the inputArray
        if (inputArray[1]) {
            //select the selected row in the output section
            var toBeDeleted = output.children[(inputArray[1]-1)];
            // check if the selected row does exist
            if (toBeDeleted){
                output.removeChild(toBeDeleted)
            }
            else {
                displayError("There is no such row!");
            }
        }
        //if there is no second item in the inputArray
        else {
            clearDisplay();
        }
    }

    // check if the first item in the inputArray is "triangle"
    else if (inputArray[0].toLowerCase() === "triangle") {
        //if user's input is a number
        if (!isNaN(numOfPineapples)) {
            //create a wrapping div to store all of the pineapples
            let pineappleLine = document.createElement("div");
            //for loop to create the pineapple span, and append it to the wrapping div with every loop
            for (var i=0;i<numOfPineapples;i++){
                //create span element
                let pineapple = document.createElement("span");
                //set text content of span element with the pineapple emoji
                pineapple.innerText = emoji;
                //add the pineapple span into the wrapping div
                pineappleLine.appendChild(pineapple);
                //create a clone for the pineapple wrapping div
                let pineappleClone = pineappleLine.cloneNode(true)
                //call the display function and pass in the cloned node into the parameter
                display(pineappleClone);
            }
        }
        else {
            displayError("Please type in a valid command!");
        }
    }
    // check if the first item in the inputArray is "rtriangle"
    else if (inputArray[0].toLowerCase() === "rtriangle") {
        let numOfSpaces = numOfPineapples-1;
        //if user's input is a number
        if (!isNaN(numOfPineapples)) {
            //create a wrapping div to store all of the pineapples
            let pineappleLine = document.createElement("div");
            //for loop to create the pineapple span, and append it to the wrapping div with every loop
            for (var i=0;i<numOfPineapples;i++){
                //create span element
                let pineapple = document.createElement("span");
                //set text content of span element with the pineapple emoji
                pineapple.innerText = emoji;
                //add the pineapple span into the wrapping div
                pineappleLine.appendChild(pineapple);

                //create a clone for the pineapple wrapping div
                let pineappleClone = pineappleLine.cloneNode(true)
                for (var j=numOfSpaces;j>0;j--){
                    let space = document.createElement("span");
                    space.innerHTML = "&nbsp;";
                    pineappleClone.prepend(space);
                    console.log(j);
                }
                numOfSpaces--;
                //call the display function and pass in the cloned node into the parameter
                display(pineappleClone);
            }
        }
        else {
            displayError("Please type in a valid command!");
        }
    }
    else {
        let numOfRows = 1;
        //if user's input is a number
        if (!isNaN(numOfPineapples) && !isNaN(numOfRows)) {
            //create a wrapping div to store all of the pineapples
            let pineappleLine = document.createElement("div");
            //for loop to create many spans, containing the individual pineapple.
            for (var i=0;i<numOfPineapples;i++){
                //create span element
                let pineapple = document.createElement("span");
                //set text content of span element with the pineapple emoji
                pineapple.innerText = emoji;
                //add the pineapple span into the wrapping div
                pineappleLine.appendChild(pineapple);
            }
            //for loop to append the pineapple wrapping div
            for (var i=0;i<numOfRows;i++){
                //create a clone for the pineapple wrapping div
                let pineappleClone = pineappleLine.cloneNode(true)
                //call the display function and pass in the cloned node into the parameter
                display(pineappleClone);
            }
            displayError("");
        }
        //if not a number, display error message
        else {
            displayError("Please type in a valid command!");
        }
    }
};
//display line
var display = (stuffToDisplay) => {
    //select the element #output and add in the new pineapple line
    output.appendChild(stuffToDisplay);
}
//display error
var displayError = (data) => {
    let errorDisplay = document.querySelector('#error');
    errorDisplay.innerText = data;
}
//clear display
var clearDisplay = () => {
    document.getElementById("output").innerHTML = "";
}