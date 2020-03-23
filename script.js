console.log("hello script js");

var reset = function() {
    return document.getElementById('input').value = '';
}

var clear = function() {
    return document.getElementById('output').textContent = '';
}


//Main function
var inputHappened = function(currentInput){
        console.log( currentInput );
        reset();

    if(currentInput === 'clear') {
        clear();
    } else if (isNaN(currentInput) === false) {
        reset();
        display( currentInput );
    }
};




var display = function(currentInput){
  // your DOM manipulation code here


        var pineappleNum = pineappleCount(currentInput);
        console.log(pineappleNum);
        // Create child element with p tag
        var createChild = document.createElement('p');

        //Storing actual pineapple in variable createChild.
        createChild.textContent = pineappleNum;

            // Targeting the parent to append child to.
        var parent = document.getElementById('output');
        console.log(parent);
            //Appends child
        var joinParentChild = parent.appendChild(createChild);
        var output = createChild;
        return output;

  }




//Function that counts and returns (num): pineapples.
var pineappleCount = function(num) {

    var col = '🍍';
    var pineappleStr = "";
    var pinecount = 1 * num;

    for(var i = 0; i < pinecount; i++) {
        pineappleStr = pineappleStr + col;
    }
    return pineappleStr;
}