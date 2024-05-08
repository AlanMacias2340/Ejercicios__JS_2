// const numeros = [1,2,3,4];

// const suma = numeros.reduce((acumulador,elemento) => {
//     return acumulador + elemento; //el acumulador siempre tendra el valor del return
// },0);

// console.log(suma);


// const anidados = [[1,2],3,[4,5]];

// const plano = anidados.reduce((acc,el) => acc.concat(el),[]);

// console.log(plano)



const usuarios = [
    {edad:17,nombre:'alan'},
    {edad:18,nombre:'chanchito'},
    {edad:15,nombre:'nico'},
    {edad:14,nombre:'fernanda'},
    {edad:19,nombre:'rodri'},
];

const indexado = usuarios.reduce((acc,el)=> ({
    ...acc,
    [el.nombre]:el,
}),{})

console.log(indexado)