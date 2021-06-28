//model

var viewDiv = document.getElementById("view");
var inputText; // teksten fra input før den er parset
var parsedText = ""; // teksten etter den er gjort om til morse

const morseCodeArray =  [   '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
                            '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
                            '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
                            '-.--', '--..', '&nbsp;', '·−·−', '−−−·', '·−−·−']; //4 siste er space, æ ,ø og å

const alphabetArray =   ['a','b','c','d','e','f','g','h',
                         'i','j','k','l','m','n','o','p',
                         'q','r','s','t','u','v','w','x',
                         'y','z',' ','æ','ø','å'];

const punctuationArray = ['.', ',', '!', '?', ':', ';'] // pushed to alphabetArray onload
const punctuationMorseArray = ['.-.-.-', '--..--', '-.-.--', '..--..', '---...', '-.-.-.'] // pushed to morseCodeArray onload


// start
pushPunctuation();
updateView();

//controller

//* en funksjon for å ta value av inputfeltet og lagre den i en variabel -når vi trykker på knappen-

function pushPunctuation() {
    let length = punctuationArray.length;
    for (let i = 0; i < length; i++) {
        alphabetArray.push(punctuationArray[i])
    }
    for (let i = 0; i < length; i++) {
        morseCodeArray.push(punctuationMorseArray[i])
    }
}

function getInputValue()
{    
    var inputField = document.getElementById("inputField").innerHTML;
    inputText = "" + inputField.toLowerCase();
    let replaceThese = ['&nbsp;', '<div>', '</div>', '<br>']
    for (let i = 0; i < replaceThese.length; i++) {
        inputText = inputText.replaceAll(replaceThese[i], ' ')
    }

    validateAlphabet();
}
//* en funksjon som parser teksten og sjekker hver verdi opp mot alfabet-liste, lagrer i variabel
function validateAlphabet() 
{
    let inputLength = inputText.length;
    console.log("Lengde på string er " + inputLength);
    parsedText = "";
    
    for (i = 0; i < inputLength; i++)
    {
        parsedText += translate(inputText[i]);
    }

    updateView();
}

function updateParsedTextForView()
{
    if (parsedText == "") return " ";
    else return parsedText;
}

//    ** en funksjon som tar verdier fra variabel og oversetter til morsekode, lagrer i output variabel
function translate(letter) 
{
    let alphaArray = alphabetArray.indexOf(letter);
    return morseCodeArray[alphaArray] + ' ';
}

//view

function updateView() {

    view.innerHTML = `
        
    <div class="parent">
        <span id="inputField" class="input" role="textbox" contenteditable >${updateParsedTextForView()}</span>
        <button id="button" onclick="getInputValue()">Trykk på meg</button>
        <div id="infoDiv"></div>
    </div>

    `;
}
