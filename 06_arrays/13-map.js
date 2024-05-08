const usuarios = [
    {edad:17,nombre:'alan'},
    {edad:18,nombre:'chanchito'},
    {edad:15,nombre:'nico'},
    {edad:14,nombre:'fernanda'},
    {edad:19,nombre:'rodri'},
];

const lista = usuarios
    .filter(u => u.edad>17)
    .map(u => `<li>${u.nombre}</li>`);
const html = `<ol>${lista.join('')}</ol>`
console.log(html);


// const mapped = usuarios.map(u => ({
    
//         ...u,
//         mayor: u.edad >17
    
// })) //devolviendo un objeto

// console.log(mapped)