let array = [2,5,7,15,-5,-100,55];

function getMenorMayor(arr){
    let arr2=[arr[0],arr[0]];
    for (num of arr){
        if (arr2[0] > num){
            arr2[0] = num;
        }else if(arr2[1]<num){
            arr2[1] = num;
        }
    }
    return arr2;
}

let numeros = getMenorMayor(array);
console.log(numeros);