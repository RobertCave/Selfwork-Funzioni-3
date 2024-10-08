// Selfwork Funzioni 3
// Scrivi una funzione che dato un numero intero positivo (massimo 9999) conti da quante cifre è formato.

// Esempio:

//     Input : 9 → output: 1 cifra
//     Input : 99 → output: 2 cifre
//     Input: 12000 → output: Numero troppo grande


function contaCifre(num) {
    if (num < 0) {
        return "Input non valido: inserire un numero intero positivo.";
    } else if (num > 9999) {
        return "Numero troppo grande";
    } else {
        const cifre = num.toString().length;
        return cifre;
    }

}


let numero = parseInt(prompt("Inserisci un numero"));

if (Number.isNaN(numero) || numero === null || numero === '') {
    console.log("Attenzione inserisci un numero ");
    
} else if (contaCifre(numero) == 1){
    console.log(`Il numero ${numero}: ha una sola cifra`);
} else if ( contaCifre(numero) >= 2){
    console.log(`Il numero ${numero}: ha ${contaCifre(numero)} cifre`);

} 