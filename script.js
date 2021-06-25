//model

var viewDiv = document.getElementById("view");
var inputText; // teksten fra input før den er parset
var parsedText = ""; // teksten etter den er gjort om til morse

const morseCodeArray =  [   '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
                            '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
                            '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
                            '-.--', '--..', ' ', '·−·−', '−−−·', '·−−·−']; //4 siste er space, æ ,ø og å

const alphabetArray =   ['a','b','c','d','e','f','g','h',
                         'i','j','k','l','m','n','o','p',
                         'q','r','s','t','u','v','w','x',
                         'y','z',' ','æ','ø','å'];

// start
updateView();

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

//controller

//* en funksjon for å ta value av inputfeltet og lagre den i en variabel -når vi trykker på knappen-
function getInputValue()
{    
    var inputField = document.getElementById("inputField").innerHTML;
    inputText = "" + inputField.toLowerCase();
    inputText = inputText.replace(/&nbsp;/g, ' ');

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
        parsedText += translate(inputText[i]) + ' ';
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
    return morseCodeArray[alphaArray];
}







