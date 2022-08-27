var txtinput=document.querySelector('#txt-input');
var btnclicked=document.querySelector('#btnClicked');
var outputDiv=document.querySelector('#output-div');

function clickEventHandler(){
    outputDiv.innerHTML="translate "+ txtinput.value;
}

btnclicked.addEventListener('click',clickEventHandler);
