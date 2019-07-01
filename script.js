var inputHappened = function(currentInput){
    var arr = null;

    //handles input that has spaces
    if(currentInput.includes(" ")){
        arr = currentInput.split(" ");

        //if first word is clear
        if(arr[0]=== "clear"){
            if(!isNaN(parseInt(arr[1]))){
                clearDisplay(parseInt(arr[1]));
                displayError(" ");
            }
            else{
                displayError();
            }
        }
        //if first word is a number
        else if(!isNaN(parseInt(arr[0]))){
            display(parseInt(arr[0]));
            //loop through array until finish or meet with a NaN
            for(i=1;i<arr.length;i++){
                if(!isNaN(parseInt(arr[i])))
                    display(parseInt(arr[i]));
                else
                    break;
            }
        }
        //if first word is gibberish
        else{
            displayError();
        }
    }
    //handles input that doesn't has spaces
    else{
        if(!isNaN(parseInt(currentInput))){
            display(parseInt(currentInput));
            displayError(" ");
        }else{
            displayError();
        }

    }
}


//to add p tag into output box
var display = function(num){
  // your DOM manipulation code here
  var pElement = document.createElement("p");
  pElement.setAttribute("class","for-output")
  pElement.textContent = "🍍".repeat(num);
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

//display error message for invalid input
var displayError = function (data="Please enter a valid input..") {
        var error = document.querySelector("#error");
        error.innerText = data;
        }

