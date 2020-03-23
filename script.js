console.log("hello script js");
// var cookies = 🍪;

var inputHappened = function(currentInput){
  console.log( currentInput );
  display( currentInput );
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
console.log ("cookies");
console.log (stuffToDisplay);

var x = parseInt (stuffToDisplay);
console.log (x);

// if (stuffToDisplay === "clear"){
//     output.textContent = ""
//     myCookies.textContent = "";
// }
var myCookies = document.createElement('p');
if (x > 0) {

var x = parseInt (stuffToDisplay);
output.textContent = "A".repeat(x);

var myCookies = document.createElement('p');

myCookies.textContent = "A".repeat(x);

document.body.appendChild(myCookies);
// } else if (currentInput === clear) {
//     output.textContent = "";
// }
} else if (stuffToDisplay === "clear") {
    output.textContent = "";
    var c = document.querySelectorAll("p");
    c.length = 0;
}

};
//🍪