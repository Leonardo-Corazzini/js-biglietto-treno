// dati da inserire da parte dell'utente
const kmPercorrere = parseInt(prompt('Inserire il numero di km da percorrere'))
console.log('km:',kmPercorrere)
const etàPasseggiero = parseInt(prompt('Inserire età passeggiero'))
console.log('Anni:',etàPasseggiero)
const prezzoKm = 0.21
// calcolo sconto
let sconto = 0
if (etàPasseggiero < 18) {
    sconto = kmPercorrere * prezzoKm  * 20 / 100
} else if (etàPasseggiero >= 65){
    sconto = kmPercorrere * prezzoKm  * 40 / 100
}
// calcolo prezzo finale
const prezzoFinale = (kmPercorrere * prezzoKm - sconto).toFixed(2)
console.log('Prezzo:',prezzoFinale,'€')