console.log("hello script js");

var inputHappened = function(currentInput){
  console.log(currentInput );
  display( currentInput );
};

var display = function(stufftoDisplay){//changing the binding of the variable from stufftoDisplay to currentInput
  // your DOM manipulation code here
  console.log(stufftoDisplay)
  var pinkbox = document.getElementById("output") //To tie the pinkbox to the output Id
  var text = ""
    for (var i = 0; i < parseInt(stufftoDisplay);i++){//for loop to tie current Input to the output
     text = text + "🍍";//to concatenate the "pineapples"
    }
    var emoji = document.createElement('p')//create p tag
    emoji.innerHTML = text
    pinkbox.appendChild(emoji)//append pineapples to output box
  
    if (stufftoDisplay === "clear"){
     document.getElementById("output").InnerHTML = " "}
    }
    
    
  
  
 // ;

//};
//
