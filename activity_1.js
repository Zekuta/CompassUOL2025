let array = [1, 2, 3, 4, 5, 6, 7];
console.log(ArraySoma(array));

function ArraySoma(array){
    print("Informe sus ")

    let soma = 0;
    for(let i=0;i<array.length;i++){
        soma = array[i] + soma;
    }
return soma;
}