let array = [
    {
        id:1,
        name:'alan'
    },{
        id:2,
        name:'nico'
    },{
        id:3,
        name:'roberto'
    }
];


function toPairs(arr){
    newArr = [];
    for (id in arr){
        newArr[id] = [id,arr[id]];
    }
    return newArr;

}

let resultado =  toPairs(array);
console.log(resultado)
