
const display =document.getElementById("display")
 
function appendToDisplay(input){
    display.value += input;
}

function cleardisplay(){
    display.value ="";
}

function calculator(){
    display.value = eval(display.value);
}