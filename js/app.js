// dati da inserire da parte dell'utente
const kmPercorrere = parseInt(prompt('Inserire il numero di km da percorrere'))
console.log(kmPercorrere)
const etàPasseggiero = parseInt(prompt('Inserire età passeggiero'))
console.log(etàPasseggiero)
// calcolo prezzo base
const prezzoBase = kmPercorrere * 0.21
console.log(prezzoBase)
// calcolo sconto
let sconto = 0
if (etàPasseggiero < 18) {
    sconto = prezzoBase * 20 / 100
} else if (etàPasseggiero >= 65){
    sconto = prezzoBase * 40 / 100
}
// calcolo prezzo finale
const prezzoFinale = prezzoBase - sconto
console.log(prezzoFinale)