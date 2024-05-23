const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    {id:15},
    ['lala'],
]

function dividePorTipo(arr){
    const numeros = arr.filter(n => typeof n == "number");
    const string = arr.filter(n => typeof n == "string");
    const object = arr.filter(n => typeof n == "object");
    return {numeros,string,object}
}

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);