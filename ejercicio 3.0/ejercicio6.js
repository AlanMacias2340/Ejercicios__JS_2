function dividePorTipo(arr){
    return arr.reduce((acc, a)=>{      

        // let llave = typeof a;

        // acc[llave] = acc[llave] ? acc[llave] : [];
        // acc[llave].push(a);
        
        if(typeof a in acc){
            value = acc[typeof a];
            value.push(a);
        }else{
            acc[typeof a] = [a];
        }
        return acc
    },{})
}


const miArray = [
    "Hola",
    12,
    true,
    "Mundo",
    {},
    {id:15},
    ['lala'],
]


let arr = dividePorTipo(miArray);
console.log(arr);