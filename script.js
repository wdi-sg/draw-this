console.log("hello script js");
var textPlace = [];
var inputHappened = function(currentInput){
  console.log( currentInput );
  var i = 0;

  while(i<currentInput){
    textPlace.push("🍍");
    // textPlace.push(" anddddd ");
    i++;
}
display( textPlace );
};

var display = function(data){
    var output = document.querySelector('#output');
    // console.log(data);
    var row = data.join("");
    output.innerHTML = row;
};
