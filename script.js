console.log("hello script js");
var output = document.getElementById("output");
var inputHappened = function(currentInput){
    //split user's input when there is spaces and store into an array
    var inputArray = currentInput.split(" ");
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
    else {
        //trim user's input and convert it into an integer
        let numOfPineapples = parseInt(inputArray[0].trim());
        let numOfRows = 1;
        if (inputArray[1]){
            numOfRows = parseInt(inputArray[1].trim());
        }
        //if user's input is a number
        if (!isNaN(numOfPineapples) && !isNaN(numOfRows)) {
            //create a wrapping div to store all of the pineapples
            let pineappleLine = document.createElement("div");
            //for loop to create many spans, containing the individual pineapple.
            for (var i=0;i<numOfPineapples;i++){
                //create span element
                let pineapple = document.createElement("span");
                //set text content of span element with the pineapple emoji
                pineapple.innerText = "🍍";
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