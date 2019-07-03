console.log("hello script js");
var img_pineapple = "🍍";
var icon_output = "";


var inputHappened = function(currentInput){
  console.log( currentInput );
  //display( "WOW SOMETHING HAPPENED" );
    if(currentInput.indexOf("clear") != -1)
    {
        var arr_currentInput = currentInput.split(' ');
        var noOfLine = arr_currentInput.length > 1 ? arr_currentInput[1] : 0;

        clear(noOfLine);
    }
    else if(currentInput.indexOf("rtriangle 3") != -1)
    {
        rtriangle_3();
    }
     else if(currentInput.indexOf("triangle 3") != -1)
    {
        triangle_3();
    }
    else {
        if (icon_output.length > 0){
            icon_output += '<br />'
        }
        for (var i=0; i < currentInput; i++){
            icon_output += img_pineapple;
        }
        display(icon_output);
    }

};

var display = function(stuffToDisplay){
  // your DOM manipulation code here
  document.getElementById('output').innerHTML=stuffToDisplay;
};


var clear = function(noOfLine){
  // your DOM manipulation code here
  if (noOfLine == 0){
    icon_output = "";
    document.getElementById('output').innerHTML="";
  } else {
    var arr_icon = icon_output.split("<br />");
    arr_icon.splice((noOfLine -1), 1);
    icon_output = arr_icon.join("<br />");;
    display(icon_output);
  }
};

var triangle_3 = function(){
    icon_output = "";
    for (var i=1; i < 4; i++){
        for (var j= 0; j<i; j++)
            icon_output += img_pineapple;
        icon_output += "<br />";
    }
    display(icon_output);

};

var rtriangle_3 = function(){
    icon_output = "";
    for (var i= 0; i<3; i++){
        for (var j=0; j <2-i ; j++){
            icon_output += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        }
        for (var k=0; k<=i; k++){
            icon_output += img_pineapple;
        }
        icon_output += "<br />";
    }
    display(icon_output);
}