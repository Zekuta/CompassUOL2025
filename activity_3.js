let palabra = (prompt("Ingresa una palabra: "));

PalindromoFun(palabra);

function PalindromoFun(palabra){
    let splitString = palabra.split("");
    let reverseString = splitString.reverse();
    let joinString = reverseString.join("");
 
    if(joinString == palabra){
        console.log("Es un palindromo");
    } else {
        console.log("No es un palindromo");
    }
}