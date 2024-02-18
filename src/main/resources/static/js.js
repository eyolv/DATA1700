let billettene = [];  //Create empty array

function kjopBillett() {

    //Create variables getting values from html tags
    let valgtFornavn = document.getElementById("velgFornavn").value;

    let valgtEtternavn = document.getElementById("velgEtternavn").value;

    let valgtFilm = document.getElementById("filmer").value;

    let valgteBilletter = document.getElementById("antallBillett").value;

    let valgtTelefonnr = document.getElementById("velgtlfNr").value;

    let valgtEpost = document.getElementById("velgEpost").value;

    const billett1 = {     //Creating object adding values
        film: valgtFilm,
        antall: valgteBilletter,
        fornavn: valgtFornavn,
        etternavn: valgtEtternavn,
        telefonnummer: valgtTelefonnr,
        epost: valgtEpost
    };

    if(billett1.antall === ""){
        document.getElementById("feilAntall").innerHTML = "Må skrive noe inn i antall";
    }
        else{
            document.getElementById("feilAntall").innerHTML = "";
        }
    if(billett1.fornavn === ""){
        document.getElementById("feilFornavn").innerHTML = "Må skrive noe inn i fornavn";
    }
        else{
            document.getElementById("feilFornavn").innerHTML = "";
        }
    if(billett1.etternavn === ""){
        document.getElementById("feilEtternavn").innerHTML = "Må skrive noe inn i etternavn";
    }
        else {
            document.getElementById("feilEtternavn").innerHTML = "";
        }
    if(billett1.telefonnummer === ""){
        document.getElementById("feilTlfnr").innerHTML = "Må skrive noe inn i telefonnummer";
    }
        else {
            document.getElementById("feilTlfnr").innerHTML = "";
        }
    if(billett1.epost === ""){
        document.getElementById("feilEpost").innerHTML = "Må skrive noe inn i epost";
    }
        else {
            document.getElementById("feilEpost").innerHTML = "";
        }

    billettene.push(billett1); // push/inject into object
    skrivUt();

    //Getting values and clearing them
    document.getElementById("filmer").value = "";

    document.getElementById("antallBillett").value = "";

    document.getElementById("velgFornavn").value = "";

    document.getElementById("velgEtternavn").value = "";

    document.getElementById("velgtlfNr").value = "";

    document.getElementById("velgEpost").value = "";

}
function skrivUt() { //run through for-loop to print values we have in object and inserted into the array.
    let ut = "";
    for (let i = 0; i < billettene.length; i++) {
        ut += billettene[i].film + " " + billettene[i].antall + " " + billettene[i].fornavn
            + " " + billettene[i].etternavn + " " + billettene[i].telefonnummer +
            " " + billettene[i].epost;
    }
    document.getElementById("utskrift").innerHTML = ut;
}
function slettBillett() {

    billettene = [];  //Emptying array
    console.log(billettene);
    skrivUt(); //calls the method that prints after emptying array. Deletes last ticket
}
