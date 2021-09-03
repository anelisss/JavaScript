document.querySelector("input[type='button']")
        .addEventListener("click", crypt);

function crypt() {
    let text = document.querySelector("textarea").value; //luam valoarea din caseta unde se adauga cuvintele pe care vrem sa le criptam
    let cypher = Number(document.querySelector("#cypher").value); //luam cifrul din caseta

    let encryptedText = encrypt(text, cypher); // am obtinut textul criptat
    
    document.querySelector("#result").innerText = encryptedText; //preia textul din valoarea pe care i-o da utilizatorul, prin functia de mai sus "encrypt()"
}

function encryptAscii(text, cypher) {
    let encryptedText = text.split("").map(letter => encryptLetter(letter, cypher));
    
    return encryptedText;
}

function encrypt(text, cypher) { //definim ce face functia de mai sus
    
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let encryptedAlphabet = shift(alphabet, cypher);
    let letterMap = zipAlphabet(alphabet, encryptedAlphabet); //maparea intre caracterele din alf. original in lit. din alf. criptat
    let encryptedText = text.split("").map(letter => encryptLetter(letter, cypher)); 

    return encryptedText;
}

function encryptLetter(letter, cypher) {
    let ascii = letter.charCodeAt(0);
    let encryptedAscii = (ascii - 65 + cypher) % 26 + 65;
    return String.fromCharCode(encryptedAscii); //returneaza litera criptata


}

function shift(alphabet, cypher) {
    let firstCut = alphabet.slice(0, cypher); // de la 0 la 3. dar 3 e cypher ca incepe cu xyz si restul alfabetului original.
    let secondCut = alphabet.slice(cypher); // ca cypher incepe de la litera 3;

    return secondCut.concat(firstCut); //uneste alphabetul (de la D incolo) cu ABC (din firstCut)
}

function zipAlphabet(alphabet1, alphabet2) {
    let zip = {}; 

    for (let index = 0; index < alphabet1.length; index++) { //pentru litera A din primul alfabet cu index 0 sa fie egal cu prima litera din alfabetul criptat care are prima litera D tot cu index 0
        let firstLetter = alphabet1[index]; 
        let secondLetter = alphabet2[index];
        zip[firstLetter] = secondLetter;
    }
    return zip;
}
