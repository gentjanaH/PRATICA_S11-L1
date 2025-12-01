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
const myName: string = "Gentjana"
const myAge: number = 32
const studingTypeScript: boolean = true

// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => [ return "Ciao" + name)
//RISPOSTA:
const greet = (name: string) => {

    return "ciao" + name
}
console.log("ES-3", greet("Stefano!"))

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {return a + b }
// RISPOSTA:
const sum = (a: number, b: number): number => {
    return a + b
}
console.log("ES-4", sum(3, 7))

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
//RISPOSTA:
const price = (prezzo: number) => {
    const iva = 0.22
    return prezzo + prezzo * iva
}

console.log(price(100))

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
//RISPOSTA:
const lengthOfStrings = (s1: string, s2: string) => {

    const allInOne = s1 + s2
    return allInOne.length
}

console.log(lengthOfStrings("Ciao", "Sara!"))

// 7) Cos'è un Type Union e come si scrive?
// RISPOSTA:
/* Un Type Union è la possibilità di creare un'UNIONE di di diversi TIPI DI DATO, per poter descrivere meglio la tipizzazone
di alcune porzioni di codice.
Si definiscono i tipi di dato separandoli dal simbolo "OR" "|":

 */
//ES:
let myvariable: string | number = "ciao"
myvariable = 100

// 8) Crea una variabile che possa contenere un numero, null o undefined.
//RISPOSTA:
let newVariable: number | null | undefined
newVariable = 100
newVariable = null
newVariable = undefined

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
//RISPOSTA:
type daysOfAWeek = "Lunedì" | "Martedì" | "Mercoldì" | "Giovedì" | "Sabato" | "Domenica"
const day: daysOfAWeek = "Lunedì"
console.log(day)

// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
//RISPOSTA:
const numbers: number[] = [1, 2, 3]
const numbers2: Array<number> = [1, 2, 3]

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
//RISPOSTA:
const myTuple: [string, string, string, number, number] = ["Marco", "Francesca", "Marta", 10, 13]

// 12) Qual è la differenza tra type e interface?
//RISPOSTA:
/* La differenza fra le due è che le INTERFACE  si possono ESTENDERE, quindi se ho un interface (a) con delle proprietà, ne posso creare un altra (b)
 che avrà le proprietà di "a" + quelle che decidero di aggiungere con il metodo EXTENDS.
 */

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
interface Person {
    firstName: string
    lastName: string
    age: number
}

const me: Person = {
    firstName: "Gentjana",
    lastName: "Hani",
    age: 32
}
console.log(me)

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
//RISPOSTA:
interface Utente {
    email: string
    telefono?: number
}

const newUtente: Utente = {
    email: "gian@giorgio.it"
}
console.log(newUtente)

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
type Student = {
    firstName: string
    voto: number
}

const studenti: Student[] = [
    { firstName: "Marco", voto: 28 },
    { firstName: "Sara", voto: 30 }
]
console.log(studenti)
// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Veicolo {
    marca: string
    modello: string
    tipo: string
    accidentata: boolean
    usata: boolean
}

interface Auto extends Veicolo {
    cambio: string
    porte: number
}


// 17) Crea un oggetto che implementi l'interfaccia Auto.
const myAuto: Auto = {
    marca: "VolksWagen",
    modello: "Tiguan",
    tipo: "Suv",
    accidentata: false,
    usata: true,
    cambio: "automatico",
    porte: 5

}
console.log(myAuto)

// 18) Cosa sono i Generics in TypeScript?
//RISPOSTA:
/* I GENERICS  sono dei "PLACEHOLDER" che si aspettano un TIPO di DATO, (string, number, ecc.) che, può essere passato come ARGOMENTO per un'interfaccia.
Servono a rendere quest'ultima, più versatile e riutilizzabile.
*/

// 19) È possibile avere più tipi generici in un'interfaccia?
//RISPOSTA:
//SI

// 20) Crea un interfaccia generica per una richiesta API 

