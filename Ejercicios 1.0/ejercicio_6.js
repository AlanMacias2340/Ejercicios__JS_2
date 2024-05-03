let array = [2,5,7,15,-5,-100,55];

function cuantosPositivos(arr){
    let positivo = 0;
    for (num of arr){
        if (num > 0){
            positivo += 1;
        }
    }
    return positivo;
}


const resultado = cuantosPositivos(array);
console.log(resultado);