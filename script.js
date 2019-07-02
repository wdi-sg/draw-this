console.log("hello script js");

//array to record all user inputs
var inputRecord = [];

//function to check for number in user's "clear" instruction
function hasNumber(data) {
  return /\d/.test(data);
}

//Display
var inputHappened = function(
    currentInput){

    //individual inputs to be pushed to array
   inputRecord.push(currentInput);

    //to confirm inputs values in array
  console.log(inputRecord);

  //parseInt input values
  var input = parseInt(currentInput);

  //create a new <p> tag for pineapples
  var createP = document.createElement("p");

  //array to store pineapples
  var pineapple = [];
  console.log(pineapple);

  //***VERSION 1 - loop to check through input and return pineapple
   for (let i = 0; i<input; i++){

    //to push all pineapple into the array
    pineapple.push("🍍");
   }

   //to remove the commas in between the pineapple in the array
   createP.innerHTML = pineapple.join(" ");

   //to check no. of pineapples
   console.log(`The number of pineapples is ${pineapple}.` );

   //to display the <p> and containing pineapples in the output field
   document.getElementById('output').append(createP);


  //***VERSION 2 - Loop to check for "clear" in each user input
   for (let j = 0; j<inputRecord.length; j++){

    //condition - must include "clear" and a number
   if (inputRecord[j].includes('clear') && hasNumber(inputRecord[j]) === true ){

    //to retrieve the number value behind "clear"
         var rowToRemove = inputRecord[j].split(" ")[1];

         //to attach the number to the corresponding <p> tag and replace the pineapples with new text value
         (document.querySelectorAll("p")[rowToRemove]).innerHTML="This row has been removed."
        } else if (inputRecord[j].includes('clear') && inputRecord[j].split(" ")[1] === undefined ){
            var parentP = document.querySelector("p");
            while (parentP.firstChild){
                    parentP.removeChild(parentP.firstChild)
            }
        }
    }
}