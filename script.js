console.log("hello script js");

var emoji = "&#127821;";


function Ananas(){
var getValue = document.getElementById("input").value;

        if(isNaN(getValue)){
        alert("Must input numbers");
        return false;
        }

            else{
                var pineapples = emoji.repeat(getValue);

                }
var MyTable = document.getElementById("table");
var NewRow = MyTable.insertRow(0);
var Newcell1 = NewRow.insertCell(0);
Newcell1.innerHTML = pineapples;
}