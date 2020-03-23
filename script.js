//Global Variables
var pineappleCalled;
var callType;
var inputArray;
var numberOfCurrentRow=0;

//console.log("hello script js");
 //🍍 onglai
// for checking input

//To insert Row
InsertRow=(pineappleInsert)=>{
    var newRowItem=[];
    var newRowID, textDisplayed;
    var newParagraph=document.createElement('p');
    var outputDisplay=document.getElementById("output");
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
    outputDisplay.appendChild(newParagraph);

}

//clear all
var clear=()=>{
    var rowRemoval=document.getElementsByClassName("row");
    var itemRemoval;
    var output=document.getElementById("output");
        for(var i=0;i<=rowRemoval.length;i++)
        {
                //itemRemoval=document.getElementsByClassName("row")[i];
            //output.removeChild(itemRemoval);
            output.removeChild(rowRemoval[0]);
        }
output.removeChild(rowRemoval[0]);
}

//Where the magic happens
var inputHappened = function(currentInput){
    inputArray=currentInput.split(' ');
  //console.log( inputArray );
 //to note if double digit,, double array
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
  display( "WOW SOMETHING HAPPENED" );
  inputArray=[];
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here

};