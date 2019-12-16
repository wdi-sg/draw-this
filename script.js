console.log("hello script js");

var inputHappened = function(currentInput){
  console.log(currentInput);
  display(currentInput);
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
console.log(stuffToDisplay);

var box = document.getElementById("output");  // This refers to the output box

var text = "";

for (var i = 0; i < parseInt(stuffToDisplay); i++) {
    text = text + "🍍";
}

var emoji = document.createElement("p");
    emoji.innerHTML = text;
    box.appendChild(emoji); //append to the output element



};



/*    box.removeChild(emoji);*/


/*function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}
*/

