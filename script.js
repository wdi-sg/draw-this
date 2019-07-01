console.log("hello script js");

// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   display( "WOW SOMETHING HAPPENED" );
// };

// var display = function(stuffToDisplay){
//   // your DOM manipulation code here
    var display = function(num) {
        var pTag = document.createElement("p");
        pTag.setAttribute("class","newP");
        pTag.textContent = emoji.repeat(num);
        document.body.appendChild(pTag);
        currentRow ++;
    }
// };
var currentRow = 1
var emoji = "🍍";


var inputHappened = function(currentInput){
    if (!isNaN(parseInt(currentInput))) {
        display(parseInt(currentInput));

    } else if (currentInput === "clear") {
        var test = document.body.getElementsByTagName("p");
            var oP = document.body.getElementsByTagName("p")[1];
            document.body.removeChild(oP);
            var oP2 = document.body.getElementsByTagName("p")[1];
            document.body.removeChild(oP2);
    } else if (currentInput === "clear 2") {
        var test = document.body.getElementsByTagName("p");
            var oP = document.body.getElementsByTagName("p")[2];
            document.body.removeChild(oP);
    }
}