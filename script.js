console.log("hello script js");

    var display = function(number)
    {
        var p = document.createElement("p");
        p.setAttribute("class","newP");
        p.textContent = emoji.repeat(number);
        document.body.appendChild(p);
        currentRow ++;
    }

var currentRow = 1
var emoji = "🍍";


var inputHappened = function(currentInput){
if (!isNaN(parseInt(currentInput))) {
        display(parseInt(currentInput));

    } else if (currentInput === "clear") {
        var output = document.body.getElementsByTagName("p");
            var o = document.body.getElementsByTagName("p")[1];
            document.body.removeChild(o);
            var o2 = document.body.getElementsByTagName("p")[1];
            document.body.removeChild(o2);
    } else if (currentInput === "clear 2") {
        var output = document.body.getElementsByTagName("p");
            var o = document.body.getElementsByTagName("p")[2];
            document.body.removeChild(o);
    }
}