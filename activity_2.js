
const numero = parseInt(prompt("Ingresa un numero: "));

if(NumeroPrimo(numero)){
    console.log("El numero es primo");
} else {
    console.log("El numero no es primo.");
}

function NumeroPrimo(numero){
    if(numero < 2){
        return false;
    }
    for (let i=2;i<= Math.sqrt(numero); i++) {
        if(numero % i === 0) {
            return false;
        }
        return true;
    }
}