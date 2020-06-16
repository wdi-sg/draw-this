var inputHappened = function(currentInput){
  display(checkInputisNaN(currentInput));
   if (currentInput == "clear") {
     document.querySelector("#output").innerHTML = "";
   }
    //  } else if(currentInput == "clear 2") {
    //    currentInput.split[1]
    //    var selectAllRows = document.querySelectorAll("#output p");
    //    selectAllRows[selectAllRows.length - 1].remove();
    //  }
   };

var display = function(stuffToDisplay){
    var rowPTag = document.createElement('p');
    rowPTag.textContent = columnPineapple(stuffToDisplay);
    document.querySelector("#output").appendChild(rowPTag);
};


var checkInputisNaN = function(input) {
    if (isNaN(input)) {
        return ;
    } else {
        num = parseInt(input);
        return num;
    }
};

var columnPineapple = function(num){
  var pineapples = "🍍";
    return pineapples.repeat(num);
};
