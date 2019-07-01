console.log("hello script js");




var inputHappened = function(currentInput){
    var parsedInput = parseInt(currentInput);
    var arr = null;
    if(!isNaN(parsedInput)){
        display( "🍍".repeat(parsedInput));
        displayError(" ");
    }else if (isNaN(parsedInput)){
        arr = currentInput.split(" ");
        if(arr[0]=== "clear"){
            if(!isNaN(parseInt(arr[1]))){
                clearDisplay(parseInt(arr[1]));
                displayError(" ");
            }
            else
                displayError();
        }else
            displayError();
    }



};

//to add p tag into output box
var display = function(stuffToDisplay){
  // your DOM manipulation code here
  var pElement = document.createElement("p");
  pElement.setAttribute("class","for-output")
  pElement.textContent = stuffToDisplay;
  var temp = document.getElementById("output");
  temp.appendChild(pElement);
};

//To clear specific line from output box
var clearDisplay = function(num){
    var parent = document.getElementById('output');
    var arr = document.querySelectorAll(".for-output");
    for(i=0;i<arr.length;i++){
        if(num === (i+1))
            parent.removeChild(arr[i]);

    }

}

var displayError = function (data="Please enter a valid input..") {
        var error = document.querySelector("#error");
        error.innerText = data;
        }

