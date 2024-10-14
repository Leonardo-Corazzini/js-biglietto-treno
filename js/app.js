// dati da inserire da parte dell'utente
const kmPercorrere = parseInt(prompt('Inserire il numero di km da percorrere'))
console.log('km:',kmPercorrere)
const etaPasseggiero = parseInt(prompt('Inserire età passeggiero'))
console.log('Anni:',etaPasseggiero)
const prezzoKm = 0.21
// calcolo sconto
let sconto = 0
sconto = etaPasseggiero < 18 ? kmPercorrere * prezzoKm  * 20 / 100
       : etaPasseggiero > 65 ? kmPercorrere * prezzoKm  * 40 / 100
       : 0;
// calcolo prezzo finale
const prezzoFinale = (kmPercorrere * prezzoKm - sconto).toFixed(2)
console.log('Prezzo:',prezzoFinale,'€')


