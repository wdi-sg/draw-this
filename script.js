//Global Variables
var pineappleCalled;
var callType;
var inputArray;
var numberOfCurrentRow=0;
var rowToShoot;
    var output=document.getElementById("output");
var symbol="🍍";
var questionCount=0;
var cursorMode=false;
var cursorPosition={
    xCoordinate:1,
    yCoordinate:0
};
var emptyArray= [['&nbsp'+'&nbsp','c','&nbsp'+'&nbsp','&nbsp'+'&nbsp'],
['&nbsp'+'&nbsp','&nbsp'+'&nbsp','&nbsp'+'&nbsp','&nbsp'+'&nbsp'],
['&nbsp'+'&nbsp','&nbsp'+'&nbsp','&nbsp'+'&nbsp','&nbsp'+'&nbsp'],
['&nbsp'+'&nbsp','&nbsp'+'&nbsp','&nbsp'+'&nbsp','&nbsp'+'&nbsp']];
var emptyResetArray= [['&nbsp'+'&nbsp','c','&nbsp'+'&nbsp','&nbsp'+'&nbsp'],
['&nbsp'+'&nbsp','&nbsp'+'&nbsp','&nbsp'+'&nbsp','&nbsp'+'&nbsp'],
['&nbsp'+'&nbsp','&nbsp'+'&nbsp','&nbsp'+'&nbsp','&nbsp'+'&nbsp'],
['&nbsp'+'&nbsp','&nbsp'+'&nbsp','&nbsp'+'&nbsp','&nbsp'+'&nbsp']];
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
//cursor mode
cursorDisplay=()=>{
clear();
    //var newRowItem=[];
    var newRowID, textDisplayed;
    var str="";
    for(var verticalCount=0; verticalCount<4; verticalCount++)
    {
    var newParagraph=document.createElement('p');

        for(var horizontalCount=0; horizontalCount<4; horizontalCount++)
        {
            str+=emptyArray[verticalCount][horizontalCount];
        }
    newParagraph.innerHTML=str;
    output.appendChild(newParagraph);
    str="";

    }
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

var drawEquiTriangle=(base)=>{
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

                    }

        }
        console.log(str);
            newParagraph.classList.add('row');
    newParagraph.setAttribute("id",newRowID);
    newParagraph.innerHTML=str;
    output.appendChild(newParagraph);
    }

}

var drawReverseEquiTriangle=(base)=>{
    var newRowItem=[];
    var newRowID, textDisplayed;
 for(var j=0;j<base;j++)
    {
         var newParagraph=document.createElement('p');
        numberOfCurrentRow++;
           newRowID=numberOfCurrentRow;
        var str="";
        for(i=0;i<base;i++)
        {
            if(i<j){
                        str+='&nbsp';
                    }
            else{

                        str+=symbol;

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
    instruction.innerText="Type a single digit to insert row.\n Type clear to clear all.\n Type clear with number to clear row.\n Type 2 similar numbers with a space to draw a square \n Type triangle and a number for a triangle\n Type rtriangle and a number for a reverse triangle\n Type eTriangle for a isosceles triangle\n Type euTriangle for reverse isosceles triangle.\n Type Cursor for cursor mode";
}

var cursorMessage=()=>
{
        var instruction=document.getElementById("instructions");
    instruction.innerText="Type movedown and number to move cursor\n Type drawdown and number to draw the symbols. Please keep within the 4 by 4 boxes";
}

//Where the magic happens
var inputHappened = function(currentInput){
if(!cursorMode)
{if(questionCount===0)
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
        else if(inputArray[0].toLowerCase()==="cursor")
        {
            cursorMode=true;
            cursorMessage();
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

    if(inputArray[0].toLowerCase()==="etriangle")
    {
        if(isNaN(parseInt(inputArray[1])))
        {
            //console.log("nonsense");
        }
        else
        {
            var etriangleBase=parseInt(inputArray[1]);
            drawEquiTriangle(etriangleBase);
        }
    }

    if(inputArray[0].toLowerCase()==="eutriangle")
    {
        if(isNaN(parseInt(inputArray[1])))
        {
            //console.log("nonsense");
        }
        else
        {
            var eutriangleBase=parseInt(inputArray[1]);
            drawReverseEquiTriangle(eutriangleBase);
        }
    }

  }
}
//  display( "WOW SOMETHING HAPPENED" );
  inputArray=[];}

  if(cursorMode)
    {
    clear();
    cursorDisplay();
    var drawingCount=0;
    //console.log("cursor Mode");
    inputArray=currentInput.split(' ');
    if(isNaN(parseInt(inputArray[1])))
        {
            console.log("nothing happens")
        }
    else
        {
            var index=parseInt(inputArray[1])
            console.log("we are in");
            if(inputArray[0].toLowerCase()==="movedown")
            {
                if(cursorPosition.yCoordinate+index>3)
                {
                    alert("You have exceeded the box")
                }
                else
                {
                    emptyArray[cursorPosition.yCoordinate][cursorPosition.xCoordinate]='&nbsp'+'&nbsp';
                    cursorPosition.yCoordinate+=index;
                    emptyArray[cursorPosition.yCoordinate][cursorPosition.xCoordinate]='c';
                    cursorDisplay();
                }
            }
            else
            if(inputArray[0].toLowerCase()==="moveup")
            {
                if(cursorPosition.yCoordinate-index<0)
                {
                    alert("You have exceeded the box")
                }
                else
                {
                    emptyArray[cursorPosition.yCoordinate][cursorPosition.xCoordinate]='&nbsp'+'&nbsp';
                    cursorPosition.yCoordinate-=index;
                    emptyArray[cursorPosition.yCoordinate][cursorPosition.xCoordinate]='c';
                    cursorDisplay();
                }
            }
            else
            if(inputArray[0].toLowerCase()==="moveright")
            {
                if(cursorPosition.xCoordinate+index>3)
                {
                    alert("You have exceeded the box")
                }
                else
                {
                    emptyArray[cursorPosition.yCoordinate][cursorPosition.xCoordinate]='&nbsp'+'&nbsp';
                    cursorPosition.xCoordinate+=index;
                    emptyArray[cursorPosition.yCoordinate][cursorPosition.xCoordinate]='c';
                    cursorDisplay();
                }
            }
            else
            if(inputArray[0].toLowerCase()==="moveleft")
            {
                if(cursorPosition.xCoordinate-index<0)
                {
                    alert("You have exceeded the box")
                }
                else
                {
                    emptyArray[cursorPosition.yCoordinate][cursorPosition.xCoordinate]='&nbsp'+'&nbsp';
                    cursorPosition.xCoordinate-=index;
                    emptyArray[cursorPosition.yCoordinate][cursorPosition.xCoordinate]='c';
                    cursorDisplay();
                }
            }

            if(inputArray[0].toLowerCase()==="drawdown")
            {
                if(cursorPosition.yCoordinate+index>3)
                {
                    alert("You have exceeded the box")
                }
                else
                {
                    for(drawingCount=cursorPosition.yCoordinate;drawingCount<=index;drawingCount++)
                    {
                        emptyArray[cursorPosition.yCoordinate][cursorPosition.xCoordinate]=symbol;
                        cursorPosition.yCoordinate+=1;

                                        cursorDisplay();
                    }
                }
            }
            else
            if(inputArray[0].toLowerCase()==="drawup")
            {
                if(cursorPosition.yCoordinate-index<0)
                {
                    alert("You have exceeded the box")
                }
                else
                {
                    for(drawingCount=cursorPosition.yCoordinate;drawingCount<=index;drawingCount++)
                    {
                        emptyArray[cursorPosition.yCoordinate][cursorPosition.xCoordinate]=symbol;
                        cursorPosition.yCoordinate-=1;

                                        cursorDisplay();
                    }
                }
            }

            if(inputArray[0].toLowerCase()==="drawright")
            {
                if(cursorPosition.xCoordinate+index>3)
                {
                    alert("You have exceeded the box")
                }
                else
                {
                    for(drawingCount=cursorPosition.xCoordinate;drawingCount<=index;drawingCount++)
                    {
                        emptyArray[cursorPosition.yCoordinate][cursorPosition.xCoordinate]=symbol;
                        cursorPosition.xCoordinate+=1;

                                        cursorDisplay();
                    }
                }
            }
            else
            if(inputArray[0].toLowerCase()==="drawleft")
            {
                if(cursorPosition.xCoordinate-index<0)
                {
                    alert("You have exceeded the box")
                }
                else
                {
                    for(drawingCount=cursorPosition.xCoordinate;drawingCount<=index;drawingCount++)
                    {
                        emptyArray[cursorPosition.yCoordinate][cursorPosition.xCoordinate]=symbol;
                        cursorPosition.xCoordinate-=1;

                                        cursorDisplay();
                    }
                }
            }

        }
    }
};

var display = function(stuffToDisplay){
  // your DOM manipulation code here

};