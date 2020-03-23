//Global Variables
var pineappleCalled;
var callType;
var inputArray;
var numberOfCurrentRow=0;
var rowToShoot;
    var output=document.getElementById("output");

//console.log("hello script js");
 //🍍 onglai
// for checking input

//To insert Row
InsertRow=(pineappleInsert)=>{
    var newRowItem=[];
    var newRowID, textDisplayed;
    var newParagraph=document.createElement('p');

    numberOfCurrentRow++;
    //class name cannot contain space
    newRowID=numberOfCurrentRow.toString();
    for(var i=0; i<pineappleInsert;i++)
    {
        if(i===0)
        {
            newRowItem=["🍍"];

        }
        else
        {
            newRowItem.push("🍍")
        }
    }
    textDisplayed=newRowItem.join('');
    console.log(textDisplayed);
    newParagraph.classList.add('row');
    newParagraph.setAttribute("id",newRowID);
    newParagraph.innerText=textDisplayed;
    output.appendChild(newParagraph);

}

//clear all
var clear=()=>{
    var rowRemoval=document.getElementsByClassName("row");
    //var itemRemoval;


        output.textContent='';
        //output.removeChild(rowRemoval[0]);
//output.removeChild(rowRemoval[0]);
            }

//clear specific row
var clearSpecific=()=>{
//console.log(typeof rowtoShoot);
var rowClear=document.getElementById(rowtoShoot);
output.removeChild(rowClear)
//var rowClear=
}



//Where the magic happens
var inputHappened = function(currentInput){
    inputArray=currentInput.split(' ');
  //console.log( inputArray );
 //to note if double digit,, double array
 //for single word input
  if(inputArray.length===1)
  {
    if(isNaN(parseInt(inputArray[0]))){
        if(inputArray[0].toLowerCase()==="clear")
        {
            clear();
        }
    }
    else
    {pineappleCalled=parseInt(inputArray[0]);
    InsertRow(pineappleCalled);}
  }
  else
    //2 word input

  if(inputArray.length===2)
  {
    //console.log("wrong entry");
    if(inputArray[0].toLowerCase()==="clear")
    {
        rowtoShoot=inputArray[1];
        clearSpecific();
    }
  }
//  display( "WOW SOMETHING HAPPENED" );
  inputArray=[];
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here

};