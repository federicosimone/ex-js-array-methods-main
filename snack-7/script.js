const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

//find

const id2Student = students.find(element => {
  return element.id == 2  ;
})

console.log(id2Student);

//in questo caso non posso stampare in console element, perchè non esiste fuori dalla funzione
// quindi devo inserire il tutto all'interno di una variabile.