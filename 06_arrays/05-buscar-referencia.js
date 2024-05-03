const usuarios =[
    {id:1,name:'alan'},
    {id:1,name:'rodri'},
    {id:2,name:"carlos"},
];

// const resultado = usuarios.indexOf({id:2,name:"carlos"});

const resultado = usuarios.find(function(usuario){
    return usuario.id === 1;
});

console.log(resultado);

const resultado2 = usuarios.findIndex(usuario =>
    usuario.id === 2);

console.log(resultado2);