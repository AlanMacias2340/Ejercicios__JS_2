let pairs = [
    [1,{name:"alan"}],
    [2,{name:"felipe"}],
    [3,{name:"nico"}]
];

function toCollection(arr){
    newArr = [];
    for (key in arr){
        let conten = arr[key];
        newArr[key] = conten[1];
        newArr[key].id = key;
    }
    return newArr;
}

let resultado = toCollection(pairs);
console.log(resultado);