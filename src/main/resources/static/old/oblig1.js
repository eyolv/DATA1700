// JavaScript code
function storeInput() {
    // Tomt array
    let inputArray = [];
console.log("AAA");
    // Få input
    let filmer = document.getElementById("filmer").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnummer = document.getElementById("telefonnummer").value;
    let epost = document.getElementById("epost").value;

    let order = {
        Filmer: filmer,
        Antall: antall,
        Fornavn: fornavn,
        Etternavn: etternavn,
        Telefonnummer: telefonnummer,
        Epost: epost
    }


    // Add the values to the array
    inputArray.push(order);
    let orderOut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th>" + "</tr>";
console.log("Half Works")

    for (let i = 0; i < tickets.length; i++){
        orderOut +=
            "<tr> <th>" + tickets[i].Filmer + "</th></tr>" + tickets[i].Antall +
            "<tr> <th>" + tickets[i].Fornavn + "</th></tr>" + tickets[i].Etternavn +
            "<tr> <th>" + tickets[i].Telefonnummer + "</th></tr>" + tickets[i].Epost;
        console.log("Run loop" + i);
        document.getElementById("table").innerHTML = orderOut;


    }
     function printnumbers(){
        var Display = inputArray.toString();
        document.getElementById("resultat").innerHTML = Display;
    }
    // Print the array to the console
    console.log(Show prog.);
}