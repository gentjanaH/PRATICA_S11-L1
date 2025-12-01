// DOMANDE
// 1) Quali sono i tipi primitivi principali in TypeScript?
// RISPOSTA:
/*In TS ci sono tutti i TIPI DI DATO PRIMITIVI presenti in JS:
-string
-number
-boolean
-null
-undefined */
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
//RISPOSTA:
var myName = "Gentjana";
var myAge = 32;
var studingTypeScript = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => [ return "Ciao" + name)
//RISPOSTA:
var greet = function (name) {
    return "ciao" + name;
};
console.log("ES-3", greet("Stefano!"));
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {return a + b }
// RISPOSTA:
var sum = function (a, b) {
    return a + b;
};
console.log("ES-4", sum(3, 7));
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
//RISPOSTA:
var price = function (prezzo) {
    var iva = 0.22;
    return prezzo + prezzo * iva;
};
console.log(price(100));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
//RISPOSTA:
var lengthOfStrings = function (s1, s2) {
    var allInOne = s1 + s2;
    return allInOne.length;
};
console.log(lengthOfStrings("Ciao", "Sara!"));
// 7) Cos'è un Type Union e come si scrive?
// RISPOSTA:
/* Un Type Union è la possibilità di creare un'UNIONE di di diversi TIPI DI DATO, per poter descrivere meglio la tipizzazone
di alcune porzioni di codice.
Si definiscono i tipi di dato separandoli dal simbolo "OR" "|":

 */
//ES:
var myvariable = "ciao";
myvariable = 100;
// 8) Crea una variabile che possa contenere un numero, null o undefined.
//RISPOSTA:
var newVariable;
newVariable = 100;
newVariable = null;
newVariable = undefined;
var days = "Lunedi";
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
//RISPOSTA:
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
//RISPOSTA:
var myTuple = ["Marco", "Francesca", "Marta", 10, 13];
var me = {
    firstName: "Gentjana",
    lastName: "Hani",
    age: 32
};
console.log(me);
var newUtente = {
    email: "gian@giorgio.it"
};
console.log(newUtente);
var studenti = [
    { firstName: "Marco", voto: 28 },
    { firstName: "Sara", voto: 30 }
];
console.log(studenti);
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var myAuto = {
    marca: "VolksWagen",
    modello: "Tiguan",
    tipo: "Suv",
    accidentata: false,
    usata: true,
    cambio: "automatico",
    porte: 5
};
console.log(myAuto);
