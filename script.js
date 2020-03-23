console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
  var pineappleRow = document.createELement("p");
  var value = parseInt(stuffToDisplay);
  for (var i =0; i<value;i++) {
  	pineappleAmt = pineappleAmt + "	🍍";

  }
  pineappleRow.innerHTML=pineappleAmt;
  ouput.innerHTML=pineappleAmt;
  document.body.appendChild(pineappleRow);
};
