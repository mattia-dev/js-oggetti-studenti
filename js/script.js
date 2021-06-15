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

    function objectCaseAdjusted(k) {

        return k[0].toUpperCase() + k.slice(1);

    }
    
    // PARTE 1
    var student = {
        name: "Mattia",
        surname: "Ferrari",
        age: "24"
    };

    var studentHtmlElement = document.getElementById('student');

    for (const key in student) {
        
        studentHtmlElement.innerHTML += objectCaseAdjusted(key) + ": " + student[key] + "<br>";
            
    }

    // PARTE 2
    var students = [

        student1 = {
            name: "Mattia",
            surname: "Ferrari",
            age: "24"
        },

        student2 = {
            name: "Pinco",
            surname: "Pallo",
            age: "21"
        },

        student3 = {
            name: "Mario",
            surname: "Rossi",
            age: "31"
        }

    ];

    var studentsHtmlElement = document.getElementById('students');

    for (var i = 0; i < students.length; i++) {

        for (const chiave in students[i]) {

            studentsHtmlElement.innerHTML += objectCaseAdjusted(chiave) + ": " + students[i][chiave] + "<br>";

        }  
        
    }

})