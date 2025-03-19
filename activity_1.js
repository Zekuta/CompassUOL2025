const input = prompt("Ingresa un array de números separados por comas: ");
const array = input.split(",");
let check = true;
// array = [1, 2, 3, 4, 5, 6, 7];

console.log(ArraySoma(array));

function ArraySoma(array){
    let soma = 0;
    for(let i=0;i<array.length;i++){
        if(isNaN(array[i])){
          console.log("La variable referenciada no es un numero.");
          check = false;
          break;
        } else {
          soma = soma + Number(array[i]);
        }
    }
    if(check === false){
      console.log("Para recibir la suma, debe reiniciar la app.")
    } else {
      console.log("La suma es: " + soma);
    }
}
