
// Inserisco il titolo
const PrintTitle = function () {
    const title = document.querySelector('h1')
    title.innerText = "Tombola";
}

// Creo il tabellone
const generateMainBoard = function () {
    const mainboard = document.querySelector('#tombola')
    for(let i=1;i<77;i++) {
        const NumBoard = document.createElement('div')
        NumBoard.classList.add("Celle")
        NumBoard.textContent = i;
        mainboard.appendChild(NumBoard);
    } 
}

// Inserisco in un array
const fillArray = function () {
const Array = [];
for(i=0;i<76;i++) {
    Array.push(i+1)
} return Array;
}

// Numero random
const getRandomNum = function (a) {
    return Math.floor(Math.random() * 76);

}

// Stampo il numero Random
const generateRandNumber = function () {
let bottone = document.getElementById("Estrazione");
bottone.addEventListener("click", function (){
const numeroEstratto = getRandomNum();
const numeroEstrattoElement = document.getElementById("estratto");
numeroEstrattoElement.innerHTML = numeroEstratto;
const celloide = document.querySelectorAll('.Celle');
celloide.forEach(function(cella) {
    if (parseInt(cella.textContent) === numeroEstratto) {
        cella.classList.add("selected");
    }
})
}) 
}




PrintTitle();
generateMainBoard();
fillArray();
generateRandNumber();
Colorare ();