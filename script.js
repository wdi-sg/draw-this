console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );

  if (isNaN(currentInput === true || currentInput === '0' )) {
    return "Invalid input!"
  };
  display(currentInput);

};

var display = function(stuffToDisplay){
  // your DOM manipulation code here

    var emojiUsed = "🌼";
    //creating a box to keep my <p> tag
    var box = document.getElementById("output");
    //<p> tag
    var pTag = document.createElement("p");

    for (let i = 0; i < stuffToDisplay; i++) {
        pTag.innerText += emojiUsed;
    };
    box.appendChild(pTag);
};