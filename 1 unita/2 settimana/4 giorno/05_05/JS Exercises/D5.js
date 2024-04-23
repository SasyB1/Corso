/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']


/*
for(i=0;i<pets.length;i++) {
  var animali = pets[i]
  console.log(animali)
}
*/


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/


/*
var alfabetico = pets.sort();
for(i=0;i<alfabetico.length;i++) {
  var arabo = alfabetico[i]
  console.log(arabo)
}
*/


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/


/*
var contrario =pets.reverse();
for(i=0;i<contrario.length;i++) {
  var girato = contrario[i]
  console.log(girato);
}
*/


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/


/* 
var elemento = pets.shift();
console.log(pets)
var elemento2 = pets.push(elemento);
console.log(pets)
*/


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
 
/* 
function Targa() {
const licensePlate ="FORZANAPOLI";
for(i=0;i<cars.length;i++){
  let car = cars[i]
  car.licensePlate = licensePlate;
  console.log(car)
}
 }
var auto = Targa()
*/


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/


/*function Aggiungi() {
  var km = "123456";
  for(i=0;i<cars.length;i++){
    let distanza = cars[i]
    distanza.km = km
    console.log(distanza)
  }
}
var auto2 = Aggiungi()

for(i=0;i<cars.length;i++){
  let a1 = cars[i]
a1.trims.pop();
console.log(cars)
}
*/



/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/


/*
const justTrims = []
for (let i = 0; i < cars.length; i++) {
  let a2 = cars[i];
  if (a2.trims.length > 0) {
    justTrims.push(a2.trims[0]);
  }
}
console.log(justTrims);
*/



/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/


/*
for(i=0;i<cars.length;i++){
  let a3 = cars[i].color.charAt(0)
  if(a3 === "b") {
    console.log("Fizz")
  } else {
    console.log("Buzz");
  }
}
console.log(cars)
*/


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]


/*
let i = 0;
while (numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}
*/


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

/*
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let scambio = [];
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "g":
      scambio.push(7);
      break;
    case "n":
      scambio.push(12);
      break;
    case "u":
      scambio.push(19);
      break;
    case "z":
      scambio.push(21);
      break;
    case "d":
      scambio.push(4);
      break;
  }
}
console.log(scambio);
*/
