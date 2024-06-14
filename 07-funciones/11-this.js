//this hae referencia a un objeto
//this hace referencia al objeto window, global
//si se usa new hace referencia al objeto que será creado

// 1
const user = {
    name: 'Nicolas',
    login(){
        console.log(this);
    }
};

user.logout = function(){
    console.log(this);
};

user.logout();


//2
function log2(){
    console.log(this);
}
log2();


//3
function Log(mensaje){
    this.mensaje = mensaje;
    console.log(this);
}

const l = new Log('hola mundo')

