var inputHappened = function(currentInput){
    var parseInput = parseInt(currentInput);
    var paragraph = document.getElementById('output');
    var pineapple = [];
    for (var i = 0; i < parseInput; i++){
        // console.log( i + " ");
        pineapple.push('🍍')
    };
    // paragraph.innerHTML = pineapple;

    //creating an empty paragraph element
    var newParagraph = document.createElement('p');
    //innerHTML sets content to newParagraph
    newParagraph.innerHTML = pineapple.join(" ");
    // add new paragraph to output
    paragraph.appendChild(newParagraph);

}

var display = function(stuffToDisplay){
};
