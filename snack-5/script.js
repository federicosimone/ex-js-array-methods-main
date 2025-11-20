const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

//filter()

/*const numeriPari = nums.filter(element => {
    if (element % 2 == 0) {
        return true ;
    } else {
        return false ;
    }
})

console.log(numeriPari); */

//  (element % 2 == 0) è la condizione secondo cui il filter() decide se l'elemento analizzato
//può entrare o meno nel nuovo array (che deve essere definito da una variabile)

const numeriPari = nums.filter(element => {
    return element % 2 == 0 ;
})

console.log(numeriPari);

// Senza utilizzare l'if, ma solamente fornendo la condizione per la quale devono essere 
// filtrati gli elementi dell'array originale. 