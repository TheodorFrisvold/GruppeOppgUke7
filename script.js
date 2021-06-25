//model

var viewDiv = document.getElementById("view");
var inputText; // teksten fra input før den er parset
var parsedText; // teksten etter den er gjort om til morse

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
        <span id="inputField" class="input" role="textbox" contenteditable></span>
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
    inputText = "" + inputField;

    setInputTextToSubmittedText();
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

    //dosomethingwithparsedtext
    updateView();
}


//    ** en funksjon som tar verdier fra variabel og oversetter til morsekode, lagrer i output variabel
function translate(l) 
{
    let alphaArray = alphabetArray.indexOf(l);
    console.log(alphaArray);
}

//  **en funksjon som setter input tekst til placeholder etter trykket på knapp for å oversette
function setInputTextToSubmittedText() 
{
    inputField.value = "";
    inputField.setAttribute("placeholder", inputText); 
}






