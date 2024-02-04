let cislo = Math.floor(Math.random() * 6) + 1;
console.log ("na kostce padlo cislo: " + cislo);

document.body.innerHTML += "<p> na kostce padlo číslo: " + cislo + "</p>" // Tady pouzit += misto = a pridat <p>, aby se to zobrazilo pod nadpisem v novem odstavci.