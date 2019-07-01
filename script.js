console.log("hello script js");
var content = [];
var pineapple = "🍍";
var output = document.querySelector('#output');

var inputHappened = function(currentInput){
  console.log( "user input is " + currentInput );

  if (currentInput === "clear"){
    clearAll();
  } else if (!isNaN(currentInput)){
    for (var i = 0; i < currentInput ; i++){
      content.push(pineapple);
    }
    // console.log(content);
    console.log("current content length is " + content.length);
    display(content);

  }
};

var display = function(data){
  var row = document.createElement('p');
  row.setAttribute('class','row');
  var newRow = output.appendChild(row);
  var str = "";

  for (var i=0; i < data.length; i++){
    str = str + data[i];
  }

  console.log(str);
  newRow.innerHTML = str;

  //clear context array
  content = [];
};

var clearAll = function(){
  output.innerHTML = "";
}
