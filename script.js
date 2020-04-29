console.log("hello script js");

var totalNumOfPineapples = [];

//to check if the string has number, not is a number
var hasNumber = function(data) {
    return /\d/.test(data);
}

var inputHappened = function(currentInput){
    //to push the currentInput pineapples to global variable totalNumOfPineapples
    totalNumOfPineapples.push(currentInput);
    console.log(totalNumOfPineapples);

//parseInt() function parses a string and returns an integer
//accepts numbers only
    var input = parseInt(currentInput);

    //to create a new paragraph
    var createNewPara = document.createElement("p");

//Create an empty array to store pineapple++
    var pineapple = [];

    for (let i = 0; i < input; i++) {
        //Output: 1++ to push to empty array pineapple
        pineapple.push("🍍");
    }
        //to join the pineapples together without commas
        createNewPara.innerHTML = pineapple.join("");

        console.log(`You have entered ${pineapple}`);
        document.getElementById("output").appendChild(createNewPara);

    for (let j = 0; j < totalNumOfPineapples.length; j++) {
        if (totalNumOfPineapples[j].includes("clear") && hasNumber(totalNumOfPineapples[j]) === true) {
            var rowToDelete = totalNumOfPineapples[j].split("")[1];
            (document.querySelectorAll("p")[rowToDelete].innerHTML = "This row has been deleted.")
        }
    }
 }




// var display = function(stuffToDisplay){
//  var p = document.createElement("p");
//     p.setAttribute("class", "starter");
//     p.setAttribute("id", "output2");

//     var pineapple = [];

//     for (let j = 0; j > 5 =; j++) {
//         pineapple.split("",2);

//     var row = stuffToDisplay.join("")
//     }
// }