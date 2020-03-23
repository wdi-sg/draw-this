console.log("hello script js");

var clearInput = function() {
    return document.getElementById("input").value = '';
}

var inputHappened = function(currentInput){
    clearInput();
    display(currentInput);
};

var display = function(currentInput) {

    var pArray = [];

    if (!isNaN(parseInt(currentInput)) == true) {
        for (var i = 0; i < currentInput; i++) {
        pArray.push('🍍');
        }
    } else {
        var inputArray = currentInput.split(' ');
        var inputArrayIndex = inputArray[1];
        var pClear = document.querySelectorAll('.pineapple');
            pClear[inputArrayIndex - 1].innerHTML = "";
    }

    var myPText = pArray.join('');
    var myP = document.createElement('p');
    myP.classList.add('pineapple');
    myP.innerText = myPText;

    return document.body.appendChild(myP);
};