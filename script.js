console.log("hello script js");

var inputRecord = [];

function hasNumber(data) {
  return /\d/.test(data);
}

var inputHappened = function(
    currentInput){
   inputRecord.push(currentInput);
    //to confirm inputs are stored
  console.log(inputRecord);
  var input = parseInt(currentInput);
  var createP = document.createElement("p");
  var pineapple = [];
   for (let i = 0; i<input; i++){
    pineapple.push("🍍");
   }
   createP.innerHTML = pineapple.join(" ");
   console.log(`The number of pineapples is ${pineapple}.` );
   document.getElementById('output').append(createP);

   for (let j = 0; j<inputRecord.length; j++){
   if (inputRecord[j].includes('clear') && hasNumber(inputRecord[j]) === true ){
         var rowToRemove = inputRecord[j].split(" ")[1];
         (document.querySelectorAll("p")[rowToRemove]).innerHTML="This row has been removed."
   }
}
}