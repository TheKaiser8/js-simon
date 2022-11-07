"use strict";

// Consegna:
// Visualizzare in pagina 5 numeri casuali da 1 a 100 senza duplicati.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/*------------------
    FUNCTIONS
--------------------*/
// Inserisco funzione per generare numero casuale
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/*------------------
    MAIN
--------------------*/
// seleziono il container della lista dei numeri
const listContainer = document.getElementById('list');

// creo costante del totale dei numeri da generare
const totRandomNumbers = 5;
// creo array vuoto in cui verranno inseriti i 5 numeri casuali non duplicati
const numberList = [];

// creo un ciclo WHILE per inserire nell'array i 5 numeri casuali non duplicati
while( numberList.length < totRandomNumbers ) {
    const numberRandom = getRndInteger(1, 100);
    console.log(numberRandom);
    if( !numberList.includes(numberRandom) ) {
        numberList.push(numberRandom);
        // creo l'elemento lista per ogni numero generato all'interno della verifica per non far stampare in HTML anche i numeri duplicati
        const listItem = document.createElement('li');
        // stampo in HTML i numeri generati
        listItem.innerHTML = numberRandom;
        listContainer.append(listItem);
    }
}
console.log(numberList);

// creo un timer che mi nasconda la lista di numeri generata dopo 30 secondi
setTimeout(function() {
    listContainer.classList.add('hide');
}, 3000);

// dopo 31 secondi chiedo all'utente, tramite un prompt all'interno di un ciclo FOR, di inserire i 5 numeri visualizzati precedentemente
const storedNumberList = [];
const numbersGuessed = [];

setTimeout(askNumber, 3100);

function askNumber() {
    for ( let i = 0; i < totRandomNumbers; i++ ) {
        const numberStored = Number( prompt("Inserisci uno dei numeri memorizzati"));
        storedNumberList.push(numberStored);
        console.log(numberStored);
        if( numberList.includes(numberStored) && !numbersGuessed.includes(numberStored) ) {
            numbersGuessed.push(numberStored);
        }
    }
    console.log("I numeri memorizzati dall'utente sono:", storedNumberList);
    console.log("I numeri indovinati dall'utente sono:", numbersGuessed);
}
