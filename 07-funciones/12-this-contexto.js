const usuario = {
    nombre:'Nicolas',
    ciudadanias:['chile','colombia','new zeland'],
    mostrarCiudadanias(){
        this.ciudadanias.forEach(ciudadania=>{
            console.log(this.nombre,ciudadania);
        });
    }
}

usuario.mostrarCiudadanias();