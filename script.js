//Global Variables
var pineappleCalled;
var callType;
var inputArray;
var numberOfCurrentRow=0;
var rowToShoot;
    var output=document.getElementById("output");
var symbol="🍍";
var questionCount=0;
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
            newRowItem=[symbol];

        }
        else
        {
            newRowItem.push(symbol)
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
for(var i=0;i<rowRemoval.length;i++){
numberOfCurrentRow--;}
        output.textContent='';
        //output.removeChild(rowRemoval[0]);
//output.removeChild(rowRemoval[0]);
            }

//clear specific row
var clearSpecific=()=>{
//console.log(typeof rowtoShoot);
var rowClear=document.getElementById(rowtoShoot);
output.removeChild(rowClear)
numberOfCurrentRow--;
//var rowClear=
}

//drawing shapes
var drawSquare=(sides)=>{
    var newRowItem=[];
    var newRowID, textDisplayed;

    for(var j=0;j<sides;j++)
    {
         var newParagraph=document.createElement('p');
        numberOfCurrentRow++;
    //class name cannot contain space
    newRowID=numberOfCurrentRow;
        for(var i=0; i<sides;i++)
    {
        if(i===0)
        {
            newRowItem=[symbol];

        }
        else
        {
            newRowItem.push(symbol)
        }
    }
     textDisplayed=newRowItem.join('');
    console.log(textDisplayed);
    newParagraph.classList.add('row');
    newParagraph.setAttribute("id",newRowID);
    newParagraph.innerText=textDisplayed;
    output.appendChild(newParagraph);}
}
//triangles

var drawtriangle=(base)=>{
    console.log("I am here");
    var newRowItem=[];
    var newRowID, textDisplayed;

    for(var j=0;j<base;j++)
    {
         var newParagraph=document.createElement('p');
        numberOfCurrentRow++;
    //class name cannot contain space
    newRowID=numberOfCurrentRow;
        for(var i=0; i<base;i++)
    {
        if(i===0)
        {
            newRowItem.push(symbol);

        }
        else
        {
            newRowItem.push(" ")
        }
    }
     textDisplayed=newRowItem.join('');
    console.log(textDisplayed);
    newParagraph.classList.add('row');
    newParagraph.setAttribute("id",newRowID);
    newParagraph.innerText=textDisplayed;
    output.appendChild(newParagraph);}
}


var drawRightTriangle=(base)=>{
    var newRowItem=[];
    var newRowID, textDisplayed;
 for(var j=base-1;j>=0;j--)
    {
         var newParagraph=document.createElement('p');
        numberOfCurrentRow++;
           newRowID=numberOfCurrentRow;
        var str="";
        for(i=0;i<base;i++)
        {
            if(i-j>=0){
                        str+=symbol;
                    }
            else{

                        str+='&nbsp';
                        str+='&nbsp';
                        str+='&nbsp';
                        str+='&nbsp';
                    }

        }
        console.log(str);
            newParagraph.classList.add('row');
    newParagraph.setAttribute("id",newRowID);
    newParagraph.innerHTML=str;
    output.appendChild(newParagraph);
    }

}


//Change Message
var changeMessage=()=>
{
    var instruction=document.getElementById("instructions");
    instruction.innerText="Type a single digit to insert row.\n Type clear to clear all.\n Type clear with number to clear row.\n Type 2 similar numbers with a space to draw a square \n Type triangle and a number for a triangle"
}

//Where the magic happens
var inputHappened = function(currentInput){
if(questionCount===0)
{
    //change message
    if(currentInput!=="default")
    {
        symbol=currentInput;
    }
    changeMessage();
    questionCount++;
}
else if (questionCount===1)
{    inputArray=currentInput.split(' ');
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
    //console.log("hee");
    //console.log("wrong entry");
    if(inputArray[0].toLowerCase()==="clear")
    {
        rowtoShoot=inputArray[1];
        clearSpecific();
    }
    else
    if(inputArray[0]===inputArray[1])
    {
        //console.log("Same number");
        if(isNaN(parseInt(inputArray[0])))
        {
            //console.log("nonsense");
        }
        else
        {
            var squareNumber=parseInt(inputArray[0]);
            drawSquare(squareNumber);
        }
    }
    else
     //console.log(typeof inputArray[0]);
    if(inputArray[0].toLowerCase()==="triangle")
    {
        if(isNaN(parseInt(inputArray[1])))
        {
            //console.log("nonsense");
        }
        else
        {
            var triangleBase=parseInt(inputArray[1]);
            drawtriangle(triangleBase);
        }
    }
    else
     //console.log(typeof inputArray[0]);
    if(inputArray[0].toLowerCase()==="rtriangle")
    {
        if(isNaN(parseInt(inputArray[1])))
        {
            //console.log("nonsense");
        }
        else
        {
            var rtriangleBase=parseInt(inputArray[1]);
            drawRightTriangle(rtriangleBase);
        }
    }
  }
}
//  display( "WOW SOMETHING HAPPENED" );
  inputArray=[];
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here

};