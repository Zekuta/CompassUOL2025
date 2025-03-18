const input = prompt("Ingresa un array de números separados por comas: ");
const array = input.split(",");
// array = [1, 2, 3, 4, 5, 6, 7];

console.log(ArraySoma(array));

function ArraySoma(array){
    let soma = 0;
    for(let i=0;i<array.length;i++){
        soma = soma + Number(array[i]);
    }
return soma;
}
