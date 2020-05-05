console.log("hello script js");

    var box =document.getElementById("output");

var inputHappened = function(currentInput){
  console.log(currentInput);
  if(currentInput === "clear") {
        //do something {
    clearDisplay();
  } else {
    display(currentInput);
  }
}

var clearDisplay = function() {
  while (box.firstChild) {
    box.removeChild(box.firstChild);
      }
}

var display = function(stuffToDisplay){
  // your DOM manipulation code here
    console.log(stuffToDisplay);

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