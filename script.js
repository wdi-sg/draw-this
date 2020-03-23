console.log("hello script js");
var num;
var count;
var pineapple = ' 🍍';
var pineappleEmpty = '';
var inputHappened = function(currentInput){
    console.log( currentInput );
  //display( "WOW SOMETHING HAPPENED" );
    var newPineapple = document.createElement('p');

    num = parseInt(currentInput);
    document.querySelector("#input").value = "";
    for(count = 0; count<num; count++){
        pineappleEmpty += pineapple;
    }

    console.log(pineappleEmpty);
    newPineapple.innerText = pineappleEmpty;
    document.getElementById("output").appendChild(newPineapple);
    pineappleEmpty ='';
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
    var display = document.querySelector('#output');
    if (stuffToDisplay === "clear"){
        display.innerHTML = "";
    }
    else{
        display.appendChild(stuffToDisplay);
    }


};