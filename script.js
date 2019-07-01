var character = '🍍';
var space = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
var noOfPineapple = null;
var rowDelete = null;
//Element variables
var mainOutput = document.getElementById('display1');

//Display Functions
var clearField = function() {
    document.getElementById('input-text').value='';
};

//Pineapple functions
var createPineappleRow = function() {
    var newElement = document.createElement('p');
    newElement.classList.add('pineapple-row');
    for (var i=0; i < noOfPineapple;i++){
        newElement.insertAdjacentText('beforeend',character);
    }
    mainOutput.appendChild(newElement);
};

var deletePineappleRow = function() {
    mainOutput.removeChild(mainOutput.children[rowDelete-1]);
};

var createMultipleRows = function(row,column){
    noOfPineapple=column;
    for (var i=0; i< row; i++){
        createPineappleRow();
    }

};

var createTriangle = function (row) {
    for (var i=0; i<row; i++){
        noOfPineapple = i+1;
        createPineappleRow();
    }
}

var createRTriangle = function (row) {
    for (var i=0; i<row; i++){
        noOfPineapple = i+1;
        var noOfSpace = row - noOfPineapple;
        var newElement = document.createElement('p');
        newElement.classList.add('pineapple-row');

        for (var j=0; j<noOfSpace; j++){
            newElement.insertAdjacentHTML('beforeend',space);
        }

        for (var k=0; k<noOfPineapple; k++){
            newElement.insertAdjacentText('beforeend',character);
        }
        mainOutput.appendChild(newElement);
    }
}

//Main Function
var createPineapples = function() {
    var input = document.getElementById('input-text').value;
    var inputCharacter = document.getElementById('input-character');
    input = input.toLowerCase();
    clearField();

//check character input
    if(inputCharacter.value !== null && input.includes('clear')){
        character = inputCharacter.value;
    }

//if input includes clear to delete
    if (input.includes('clear')){
        var split = input.split(" ");
        rowDelete = parseInt(split[1]);
        deletePineappleRow();
        return;
    }
//if input includes triangle/rtriangle
    if (input.includes('triangle')){
        var split = input.split(" ");
        if (split[0].toLowerCase() === 'triangle'){
            createTriangle(parseInt(split[1]));
        } else if (split[0].toLowerCase() === 'rtriangle'){
            console.log('output');
            createRTriangle(parseInt(split[1]));
        }
    }
//input only 1 character
    if (input.length === 1 && typeof(parseInt(input) === 'number')){
        noOfPineapple = parseInt(input);
        createPineappleRow();
        return;
    }

//if input is 2x2 or 3x3 or 3x4 etc
    var split = input.split(" ");
    console.log(split);
    createMultipleRows(parseInt(split[0]),parseInt(split[1]));
}