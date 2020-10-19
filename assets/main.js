//Creo un Array che contiene alcuni congomi scritti in ordine non alfabetico
var cognomi = ['Ceri', 'Di Antonio', 'Alberti', 'Giacobazzi'];
//console.log(cognomi);

//Chiedo all'utente di digitare il suo cognome
var userSurname = prompt('Scrivere il proprio cognome');

//Aggiungo nell'Array il cognome digitato dall' utente.
cognomi.push(userSurname);
//console.log(cognomi);

//Ordino gli elementi dell'Array cognomi in ordine alfabetico
cognomi.sort();
console.log(cognomi);

//Stampo sulla console la posizione (Index Number) del cognome inserito dall'utente
var position = cognomi.indexOf(userSurname);
console.log('Il suo cognome si trova all\'index: ' + position);
