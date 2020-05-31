console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );

  if (isNaN(currentInput === true || currentInput === '0' )) {
    return "Invalid input!"
  };
  display(currentInput);

};

var display = function(stuffToDisplay){
  // your DOM manipulation code here

    var emojiUsed = "🌼";
    //creating a box to keep my <p> tag
    var box = document.getElementById("output");
    //<p> tag created
    var pTag = document.createElement("p");
    //loop through content of <p> tag and +1 when [i] is smaller than stuffToDisplay
    for (let i = 0; i < stuffToDisplay; i++) {
    //<p> tag duplicates as well as emojis. Hence, there're multiple <p> tags in the box
        pTag.innerText += emojiUsed;
    };
    //append <p> tag into output to display it
    box.appendChild(pTag);


    //split the currentInput into an array
    var splitInput = currentInput.split(" ");
    //console check
    console.log(splitInput)

    //if first object in array s clear, integer input will be parseInt second object in array
    if (splitInput[0] === 'clear') {
        var integerInput = parseInt(splitInput[1]);
            (integerInput === box.getElementsByTagName("p")[intergerInput -1) {
                box.removeChild(box.p[integerInput]);
            }
    };


// };

// var deleteRow = function('') {
//     for (let j = 0; j < box; j++)
//         if (integerInput[1] === box.getElementsByTagName("p")[j]) {

//         }

};




// //split the currentInput into an array
// var splitInput = currentInput.split(' ');
// //dp a console check
// console.log(splitInput)
// //if first object in array s clear, integer input will be parseInt second object in array
// if (splitInput[0] === 'clear') {
//     integerInput = parseInt(splitInput[1]);
//         if (integerInput) {
//             deleteRow(splitInput[1]);
//             return;
//         }
// }