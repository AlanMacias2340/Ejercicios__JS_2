function getByIdx(arr,idx){
    if (idx < 0){
        return "el indice es menor que cero";
    }
    if (arr.length > idx){
        return arr[idx];
    }else{
        return "no existe el elemento";
    }
}

const resultado = getByIdx([1,2],1);

console.log(resultado);