const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

/*people.forEach(function(element){
  
  return console.log(element.name)
})*/

people.forEach(element => {
  return console.log(element.name) ;
})