// PARTE 1
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.

// PARTE 2
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi,
// nome e cognome.Ricordatevi, è un array, quindi ? for.

// PARTE 3
// Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - di aggiungere
// UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.

document.addEventListener('DOMContentLoaded', function () {

    function caseAdjusted(k) {

        return k[0].toUpperCase() + k.slice(1).toLowerCase();

    }
    
    // PARTE 1
    var professor = {
        name: "Mattia",
        surname: "Ferrari",
        age: "24"
    };

    var professorHtmlElement = document.getElementById('professor');

    for (const key in professor) {
        
        professorHtmlElement.innerHTML += "<li>" + caseAdjusted(key) + ": " + professor[key] + "</li><br>";
            
    }

    // PARTE 2
    var students = [

        {name: "Mattia", surname: "Ferrari", age: "24"},

        {name: "Pinco", surname: "Pallo", age: "21"},

        {name: "Mario", surname: "Rossi", age: "31"}

    ];

    // PARTE 3
    while (students.length < 4) {
        
        var newStudentName = prompt("Qual è il nome del nuovo studente?");
        var newStudentSurname = prompt("Qual è il cognome del nuovo studente?");
        var newStudentAge = prompt("Qual è l'età del nuovo studente?");

        students.push({
            name: caseAdjusted(newStudentName),
            surname: caseAdjusted(newStudentSurname),
            age: caseAdjusted(newStudentAge)
        });

    }

    var studentsHtmlElement = document.getElementById('students');

    for (var i = 0; i < students.length; i++) {

        for (const chiave in students[i]) {

            studentsHtmlElement.innerHTML += "<li>" + caseAdjusted(chiave) + ": " + students[i][chiave] + "</li><br>";

        }

    }

})