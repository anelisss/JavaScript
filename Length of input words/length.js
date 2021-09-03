document.getElementById("text")
    .addEventListener("change", function() {
    input = document.getElementById("text")
    text = input.value /* text e textul pe care il scrie utilizatorul
    in caseta, iar value e valoarea inputului care e cel de mai sus
    document.getElementById("text") */
    /* input.value merge la orice, nu neaparat la texte */
    document.getElementById("length").innerText = text.length
})
/* in functie de lungimea textului scris in caseta, va aparea o cifra
care este valoarea totalului de caractere/litere a cuvantului scris.  */
