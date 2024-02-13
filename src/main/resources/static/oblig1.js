//const filmer = ["Apokalypse", "Chainsaw", "Massacre", "American History X"]

// JavaScript code
function storeInput() {
    // Tomt array
    const inputArray = [];

    // Få input
    const input1 = document.getElementById("filmer");
    const input2 = document.getElementById("antall");
    const input3 = document.getElementById("fornavn");
    const input4 = document.getElementById("etternavn");
    const input5 = document.getElementById("telefonnummer");
    const input6 = document.getElementById("epost");

    // Get the values of the input elements
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const value4 = input4.value;
    const value5 = input5.value;
    const value6 = input6.value;

    // Add the values to the array
    inputArray.push(value1, value2, value3, value4, value5, value6);

    function printnumbers(){
        var Display = inputArray.toString();
        document.getElementById("resultat").innerHTML = Display;
    }
    // Print the array to the console
    console.log(inputArray);
}