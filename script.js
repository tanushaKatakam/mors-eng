morseCodeDict = {
    A : ".-", B : "-...", C : "-.-.", D : "-..", E : ".", F : "..-.", G : "--.",
    H : "....", I : "..", J : ".---", K : "-.-", L : ".-..", M : "--", N : "-.", 
    O : "---", P : ".--.", Q : "--.-", R : ".-.", S : "...", T : "-",U : "..-",
    V : "...-", W : ".--", X : "-..-", Y : "-.--", Z : "--..", 
    1 : ".----", 2 : "..---", 3 : "...--", 4 : "....-", 5 : ".....",
    6 : "-....", 7 : "--...", 8 : "---..", 9 : "----.", 0 : "-----",
    '.': ".-.-.-", ',' : "--..--", '?' : "..--..", ':' : "---...", ';' : "-.-.-.",
    '-' : "-....-", '/' : "-..-.", '!' : "-.-.--", " " : "/"
};

translateToMorse=()=> {
    const inputText = document.getElementById("inputText").value.toUpperCase();
    let outputText = "";
    for(let i=0; i<inputText.length; i++){
        const char = inputText[i];
        const morseChar = morseCodeDict[char];
        if(morseChar){
            outputText += morseChar + " ";
        }
        else{
            outputText += char + " ";
        }
    }
    document.getElementById("outputText").value = outputText.trim();
}

const morseToEnglishDict = {};
for(const key in morseCodeDict){
    morseToEnglishDict[morseCodeDict[key]] = key;
}


function translateToEnglish(){
    const inputText = document.getElementById("inputText").value.trim();
    const words = inputText.split(" / ");
    let englishText = "";
    words.forEach(word => {
        const letters = word.split(" ");
        letters.forEach(letter => {
            
                englishText += morseToEnglishDict[letter] || "?";
            
        });
        englishText += " ";
    });
    document.getElementById("outputText").value = englishText.trim();
    
}

function autoTranslate(){
    const inputText = document.getElementById("inputText").value.trim();
    if(/^[.\-\/\s]+$/.test(inputText)){
        translateToEnglish();
    }
    else{
        translateToMorse();
    }
}