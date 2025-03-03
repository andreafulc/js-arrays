const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  } else {
    continue
  }
} console.log(longNames);


// 3. Rimuovi 'Ed' dall'array teachers
/* qui dopo aver cercato la posizione di 'Ed' nell'array teachers
ho usato il metodo splice per rimuoverlo */
const removeEd = teachers.indexOf('Ed');
teachers.splice(removeEd, 1);
console.log(teachers);