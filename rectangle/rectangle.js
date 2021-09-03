//adaugam clasa "disappear" care contine animatia din fisierul CSS

document.querySelector("div").addEventListener("click", () => document.querySelector("div").classList.add("disappear"));

//scoatem clasa "disappear" ca sa revina la forma initiala.
document.querySelector("div").addEventListener("animationend", () => document.querySelector("div").classList.remove("disappear"));

//arrow functions ^