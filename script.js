console.log("hello script js");

var row;
var deleteRow = false;

var inputHappened = function(currentInput){
    // PARSED USER INPUT INTO INTEGER
    // var userInput = parseInt(currentInput);

    // var userInput = currentInput;

    var words = currentInput.split(' ');
    // console.log("User enters: " + words);
    // console.log("1st word: " + words[0]);
    // console.log("2nd word: " + words[1]);

    // CHECK IF 1ST WORD IS 'CLEAR' && 2nd word is valid.
    // IF TRUE STORE THE SECOND WORD AS ROW VARIABLE.
    if ((words[0] == 'clear') && (words[1] != null)) {
        console.log("TWO WORDS!");
        row = parseInt(words[1]);
        console.log("CLEAR ROW: " + row);
        deleteRow = true;
        row = row -1;
        // console.log(typeof row);
    } else {
        // ONLY ONE WORD ENTERED
        // DO NOT DELETE ROW
        deleteRow = false;
    }


    // CREATE A NEW ARRAY TO STORE USER INPUT OVER TIME
    var textInside = [];

    for (var i = 0; i < currentInput; i++) {
        // PUSH NEW PINEAPPLE INTO ARRAY BASED ON USER INPUT NUMBER
        textInside.push("🍍");
    }
    // DISPLAY THE ARRAY OF PINEAPPLES
    display(textInside);
    // console.log("pineapples array: " + textInside);
};

var display = function(data) {
    // RETURN THE 1ST ELEMENT WITH ID #OUTPUT & STORE IT INSIDE VARIABLE
    var output = document.querySelector('#output');

    // IF 2 WORDS HAVE BEEN ENTERED. REMOVE THE ROW BASED ON 2ND WORD
    if (deleteRow == false) {
        // CREATE NEW EMPTY <P> ELEMENT
        var createP = document.createElement('p');
        // PUT CONTENT FROM PINEAPPLE TEXTINSIDE ARRAY AND MAKE IT THE INNER-HTML OF THE NEWLY CREATED <P> TAG
        createP.innerHTML = data.join(' ');
        // APPEND THE NEWLY CREATED P CONTENT AS THE LAST CHILD OF #OUTPUT
        document.getElementById('output').appendChild(createP);

    } else {
        var p_list = document.getElementsByTagName('p');
        //console.log(p_list[1]);
        output.removeChild(p_list[row]);
    }
};