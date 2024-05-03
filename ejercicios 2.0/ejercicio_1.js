function Usuarios(name){
    this.name=name;
    this.id = Math.random();
}

let user = new Usuarios('Felipe');
let user2 = new Usuarios('Chanchito');
console.log(user,user2);