let usuarios = [
    {
        id:1,
        activo:true
    },
    {
        id:2,
        activo:false
    },
    {
        id:3,
        activo:false
    }
];

let todosActivos = usuarios.every(u => { //every se ejecuta hasta encontrar True
    console.log('todos activos', u.id);
    return u.activo;
})

console.log(todosActivos);


let algundoActivo = usuarios.some(u=>{ //solo ejecuta si es True
    console.log(u.id);
    return u.activo;
});

console.log(algundoActivo);
