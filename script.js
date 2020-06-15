console.log("hello script js");
//-----------DOM Selectors-------------
let output = document.querySelector("#output")
let btnClear = document.querySelector("#btn-clear");
let input = document.querySelector("#input")
let errorMsg = document.querySelector("#errorMsg")
let btnClear2 = document.querySelector("#btn-clear2");
// let state = 0;

//----------GLOBAL VAR--------------------
const emoji = "🍍"  //fixed variable
let emojiArray = [] //initialize empty array for storing emoji
let rowVar = 0; //for naming p-tag id uniquely each time created
let pArray =[]; //empty array to store all p-tag IDs for clear2FN

//-------------FUNCTIONS--------------------
//>>>>MAIN FUNC<<<<
var inputHappened = function(currentInput){
  if(!isNaN(parseInt(currentInput))){
          console.log( currentInput );
          errorMsg.innerHTML = "";
          loopInputNum(currentInput);
          addRows(emojiArray);
          console.log(emojiArray);
    } else if(currentInput === "clear" || currentInput === "clear "){
          toClearOutput();
     } else if (currentInput === "clear 2"){
          if(pArray.length>1){
                clearRow2();
          } else {
                errorMsg.innerHTML = "<h1 style='color:red;'>try using \"clear\"</h1>"
          }
    } else if (currentInput !== ""){
          errorMsg.innerHTML = "<h1 style='color:red;'>key in a number or clear existing</h1>"
          
    }
    input.value="";
  }


//>>>>FUNCTION TO CREATE P TAG, INSERT P-CONTENT, CLEAR EMOJI ARRAY AFTER INSERTING P-CONTENT<<<<
function addRows(arrayCreated){
  rowVar++;
  let addRows = document.createElement("p")
  addRows.setAttribute("id", `row-${rowVar}`)
  addRows.innerText = arrayCreated.join('') //join is to remove ',' in array
  console.log(addRows);
  output.appendChild(addRows); 
  pArray.push(addRows.id)
  console.log(pArray);
  emojiArray = []; //clear emojiArray for the next update by Main Func so previous I/O dont stack
}


//>>>>FUNCTION TO ADD EMOJI BASED ON USER'S NUMBER INPUT<<<<
function loopInputNum(currentInput){
  for(let i = 0; i <= currentInput-1; i++){
    emojiArray.push(emoji);
  }
}

//>>>>FUNCTION TO CLEAR OUTPUT EITHER BY TYPING "CLEAR" OR CLICK BTN-CLEAR<<<<
function toClearOutput(){
    output.innerText = "";
    pArray = [];
    rowVar = 0;
}

function clearRow2(){        
  let rowToRemove = document.querySelector('#'+pArray[1]);
  console.log(">>" + rowToRemove.id) //log removed P-Tag Ids
  rowToRemove.parentNode.removeChild(rowToRemove)
  pArray.splice(1,1);
  //STARTED WITH BELOW STATIC ROW-2 AND IMPROVED TO MAKE IT DYNAMIC BY USING pARRAY & SPLICE
  // let row2 = document.querySelector("#row-2")
  // row2.parentNode.removeChild(row2)
}

function clearErrorMsg(){
  errorMsg.innerHTML = "";
}


//--------------------EVENT LISTENER------------------------
btnClear.addEventListener('click', function () {
  toClearOutput();
  errorMsg.innerHTML = "";
})

btnClear2.addEventListener('click', function() {
  if (pArray.length > 1){
    clearRow2();
  } else {
    errorMsg.innerHTML = "<h1 style='color:red;'>try using \"clear\"</h1>"
    setTimeout(clearErrorMsg, 3000); //unnecessary but just to try
    }
  }
)
