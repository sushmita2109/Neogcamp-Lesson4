var txtinput=document.querySelector('#txt-input');
var btnclicked=document.querySelector('#btnClicked');
var outputDiv=document.querySelector('#output-div');

var serverurl="https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text){
    return serverurl +"?" +"text=" + text;
}

function errorHandler(error){
console.log("error happened");
alert("Something is wrong with server");
}

function clickEventHandler(){
    var inputText=txtinput.value;

    fetch(getTranslationUrl(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedtext=json.contents.translated;
        outputDiv.innerHTML=translatedtext;
    })
    .catch(errorHandler)
    
}

btnclicked.addEventListener('click',clickEventHandler);
