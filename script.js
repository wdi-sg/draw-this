console.log("hello script js");

var inputHappened = function(currentInput){
    // PARSED USER INPUT INTO INTEGER
    var userInput = parseInt(currentInput);
    console.log("User enters: " + userInput);

    // CREATE A NEW ARRAY TO STORE USER INPUT OVER TIME
    var textInside = [];

    for (var i = 0; i < currentInput; i++) {
        // PUSH NEW PINEAPPLE INTO ARRAY BASED ON USER INPUT NUMBER
        textInside.push("🍍");
    }
    // DISPLAY THE ARRAY OF PINEAPPLES
    display(textInside);
};

var display = function(data) {
    // RETURN THE 1ST ELEMENT WITH ID #OUTPUT & STORE IT INSIDE VARIABLE
    var output = document.querySelector('#output');

    // CREATE NEW EMPTY <P> ELEMENT
    var createP = document.createElement('p');

    // PUT CONTENT FROM PINEAPPLE TEXTINSIDE ARRAY AND MAKE IT THE INNER-HTML OF THE NEWLY CREATED <P> TAG
    createP.innerHTML = data.join(' ');

    // APPEND THE NEWLY CREATED P CONTENT AS THE LAST CHILD OF #OUTPUT
    document.getElementById('output').appendChild(createP);

};