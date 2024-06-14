const obj = {
    nombre:'Nicolas',
};

function extender(usuario){
    console.log(usuario);
    usuario.login = ()=>{
        console.log(`iniciando sesion ${usuario.nombre}`)
    };
    usuario.logout = ()=>{
        console.log(`cerrando sesion ${usuario.nombre}`)
    };
    return usuario
}

const usuario = extender(obj);

console.log(usuario);
usuario.login();