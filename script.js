var emojiEntered = false;
document.querySelector(".message").innerText="Please enter an emoji that you like.\nYou can select a list from here\n🍍🍎🌜❤️🤣😫😱👍👨🙋";

var emoji = "";
var inputHappened = function(currentInput){
    var arr = null;
    //take in emoji enter and store in variable
    if(!emojiEntered){
        emojiEntered = true;
        emoji = currentInput;
        document.querySelector(".message").innerText = `The emoji you entered is ${emoji}.\nEnter a number or multiple numbers to display them. Use 'clear' to clear rows. (try triangle/rtriangle followed by a number)`;
    }else{
    //handles input that has spaces, split them into an array
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
            //handles triangle
            else if(arr[0]=== "triangle"){
                if(!isNaN(parseInt(arr[1]))){
                    makeTriangle(parseInt(arr[1]));
                    displayError(" ");
                }
                else{
                    displayError();
                }
            }
            //handles reverse triangle
            else if(arr[0]=== "rtriangle"){
                if(!isNaN(parseInt(arr[1]))){
                    makeRTriangle(parseInt(arr[1]));
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
}


//to add p tag into output box
var display = function(num){
  // your DOM manipulation code here
  var pElement = document.createElement("p");
  pElement.setAttribute("class","for-output")
  pElement.textContent = emoji.repeat(num);
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

//make triangle
var makeTriangle = function(num){
    for(i=1;i<num+1;i++){
        display(i);
    }
}

//make reverse triangle
var makeRTriangle = function(num){
    for(i=1;i<num+1;i++){
        var pElement = document.createElement("p");
        var emptySpace = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;".repeat(num-i);
        pElement.setAttribute("class","for-output");
        pElement.innerHTML = emptySpace+emoji.repeat(i);
        var temp = document.getElementById("output");
        temp.appendChild(pElement);
    }
}