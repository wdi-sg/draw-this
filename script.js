console.log("hello script js");

var inputHappened = function(currentInput){
  console.log(currentInput );
  display( currentInput );
};

var display = function(stufftoDisplay){
  // your DOM manipulation code here
  console.log(stufftoDisplay)
  var pinkbox = document.getElementById("output") 
  var text = ""
    for (var i = 0; i < parseInt(stufftoDisplay);i++){
     text = text + "🍍";
    }
    var emoji = document.createElement('p')
    emoji.innerHTML = text
    pinkbox.appendChild(emoji)
  
  

  }
 // ;

//};
