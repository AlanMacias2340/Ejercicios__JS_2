let nombre = "piter"
let pelicula = "spiderman"
let edad = 22

let personaje = {
    nombre:"piter",
    pelicula:"spiderman",
    edad:16,
};

console.log(personaje);
console.log(personaje.pelicula);//solo un punto para ver las propiedades
console.log(personaje['nombre']); 


personaje.edad = 18;
personaje[edad] = 10;


delete personaje.pelicula;
console.log(personaje);