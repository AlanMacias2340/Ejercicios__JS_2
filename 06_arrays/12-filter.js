const usuarios = [
    {edad:17,nombre:'alan'},
    {edad:18,nombre:'chanchito'},
    {edad:15,nombre:'nico'},
    {edad:14,nombre:'fernanda'},
    {edad:19,nombre:'rodri'},
];

const mayores = usuarios.filter(u => u.edad > 17);
console.log(mayores);
const menores = usuarios.filter(u => u.edad < 17);
console.log(menores);