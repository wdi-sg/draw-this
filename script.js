console.log("hello script js");

var userInput;
var basketArr = [];

var inputHappened = function(currentInput){
  // console.log(currentInput);
  // userInput = currentInput;
  display();
};

var display = function(){

    // GET THE ELEMENT WITH ID #OUTPUT
    // var output = document.getElementById("output");

    // CREATE A NEW <P> TAG ARRAY VARAIABLE
    // var newPineapples = document.createElement("p");
    var textInside = [];

    for (var i = 0; i < 5; i++) {
        textInside.push('🍍');
    }
    console.log(textInside.toString());

    // MODIFY THIS ARRAY VARIABLE
    // newPineapples.innerText = "🍍";

    // ATTACH
    // output.appendChild(newPineapples);

    //document.getElementById('output').innerHTML = "";
};

/*
var arr=['a','b','c','d','e'];
//First I create a ul element
var ul=document.createElement('ul');
//Then I append it at the body
document.getElementsByTagName('body')[0].appendChild(ul);
//Via for loop for every value in the arr
//I create a li element I set the array value as innerHTML
//and at final I append it at the ul
for(var i=0;i<arr.length;i++){
  var li=document.createElement('li');
  li.innerHTML=arr[i];
  ul.appendChild(li);
}