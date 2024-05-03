function createUsuario(name){
    let id = Math.random();
    return {
        id:id,
        name:name,
    }
}

let user = createUsuario('Felipe');
let user2 = createUsuario('Marco');

console.log(user,user2)