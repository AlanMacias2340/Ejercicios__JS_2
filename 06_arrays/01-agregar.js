const letras = ['a','b'];


letras.push('c'); //AGREGA AL FINAL DEL ARRAY
console.log(letras);

letras.unshift('0'); //AGREGA AL FINAL
console.log(letras)

letras.splice(2,0,1,2);//(donde introducir, hasta donde eliminar, que agregar)

console.log(letras);