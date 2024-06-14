const obj = {
    nombre:'Nicolas',
};

function Extender(){
    this.login = function(){
        console.log(`logeando usuario ${this.nombre}`);
    };
    this.logout = function(){
        console.log(`cerrando sesion ${this.nombre}`);
    };
}

Extender.call(obj);
console.log(obj);
obj.login();
obj.logout();