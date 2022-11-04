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
    }
}
console.log(numberList);