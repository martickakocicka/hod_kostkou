//Math.random()vrátí náhodné číslo mezi 0 (včetně) a 1 (mimo)
//Math.random()použitý s Math.floor()lze použít k vrácení náhodných celých čísel.
//Příklad: Returns a random integer from 0 to 10:
//         Math.floor(Math.random() * 11)
//Příklad: Returns a random integer from 1 to 10:
//         Math.floor(Math.random() * 10) + 1

let cislo = Math.floor(Math.random() * 6) + 1;
console.log ("na kostce padlo cislo: " + cislo);

document.body.innerHTML += "<p> na kostce padlo číslo: " + cislo + "</p>" 
// Tady pouzit += misto = a pridat <p>, aby se to zobrazilo pod nadpisem v novem odstavci.