console.log("hello script js");

var inputHappened = function(currentInput){
    // check if input is "clear"
    if (currentInput === "clear"){
        clearDisplay();
    }
    else {
        //trim user's input and convert it into an integer
        let numOfPineapples = parseInt(currentInput.trim());

        //if user's input is a number
        if (!isNaN(numOfPineapples)) {
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
            //call the display function and pass in the wrapping div into the parameter
            display(pineappleLine);
            displayError("");
        }
        //if not a number, display error message
        else {
            displayError("Please type in a valid number!");
        }
    }
};
//display line
var display = (stuffToDisplay) => {
    //select the element #output and add in the new pineapple line
    document.getElementById("output").appendChild(stuffToDisplay);
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