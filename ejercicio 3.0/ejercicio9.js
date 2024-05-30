const usuarios = [
    {edad : 17, nombre: "Nico", plan : 'Premium'},
    {edad : 13, nombre: "Chanchito", plan : 'free'},
    {edad : 32, nombre: "Fernanda", plan : 'free'},
]


const user = [
    {age : 17, name: "Alan", membership : 'Premium'},
    {age : 13, name: "Feliz", membership : 'free'},
    {age : 32, name: "Ale", membership : 'free'},
]

const usuarios2 = user.map(u =>({
    edad: u.age,
    nombre:u.name,
    plan: u.membership,
}))



const user3 = [...usuarios,...usuarios2]

user3.sort((a,b)=>{
    if (a.edad > b.edad){
        return 1;
    }
    if (a.edad < b.edad){
        return -1;
    }
    return 0;
});
console.log(usuarios2)


const usrHtml = user3.map(x=>`<li>Nombre: ${x.nombre}, Edad: ${x.edad}</li>`)
const html = (`<ul>${usrHtml.join(`
`)}</ul>`)

console.log(html)
