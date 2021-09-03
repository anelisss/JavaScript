let button = document.getElementById("check")
button.addEventListener("click", function () {
    let planet = document.getElementById("redplanet")
    planet.innerText = "Alien Invasion"
    planet.classList.add("alert")
    planet.classList.add("important")
    //planet.style.color = "red"
    //planet.style.fontWeight = "bold"
    //planet.remove()
})
/*i-am adaugat butonului un eveniment cu functia de mai sus, adica
sa stilizeze paragraful cu id-ul redplanet.
astfel, cand dam click pe butonul Check, se va stiliza paragraful
2 "redplanet" cu rosu si bold la font, dupa stilizarea in css a acelui
paragraf */

/* facem buton cu functia de reset. spre deosebire de cazul de sus
cand am adaugat o variabila button dupa id check, mai jos
il putem scrie cu totul, intr-o inlantuire.
e acelasi lucru doar ca punem textul vechi si scriem remove la clasa
ca sa nu stilizeze ce e in css pe clasa alert. */


document.getElementById("reset")
    .addEventListener("click", function () {
        let planet = document.getElementById("redplanet")
        planet.innerText = "Nothing to report"
        planet.classList.remove("alert")
    })

    /* cand dam click pe primul paragraf, vrem sa ne stilizeze textul
    la fel: red, bold. */

    document.getElementById("greenplanet")
        .addEventListener("click", function(){
            document.getElementById("greenplanet").classList.add("alert")
        })
