const saludo = "Hola mundo";

console.log(saludo.length); //devuele el largo

console.log(saludo.indexOf("mu")) //devuelve el indice

if (saludo.indexOf("mu") > 0){
    console.log("verdadero")
};

console.log(saludo.includes(" mu")); //si el valor existe
console.log(saludo.replace("mundo","alan"),saludo); //remplazar el valor de un string

console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());


console.log(saludo.substring(1,2));
console.log(saludo.substr(2,4));

const espacios = " Hola mundo ";

console.log(espacios.trim()); //quita los espacios de la izquierda y de la derecha
console.log(espacios.trimStart());
console.log(espacios.trimEnd());


