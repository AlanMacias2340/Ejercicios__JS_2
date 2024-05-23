const letras = ['a','b','c','d','e'];




const final = letras.pop(); //elimina el ultimo elemento

console.log(final,letras)


const comienzo = letras.shift();//elimina el primer elemento
console.log(comienzo,letras);


letras.splice(1,1);//(donde empezar, hasta donde eliminar)
console.log(letras);
