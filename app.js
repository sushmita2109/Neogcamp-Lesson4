var txtinput=document.querySelector('#txt-input');
var btnclicked=document.querySelector('#btnClicked');

function clickEventHandler(){
    console.log('clicked');
    console.log("input",txtinput.value);
}

btnclicked.addEventListener('click',clickEventHandler);
