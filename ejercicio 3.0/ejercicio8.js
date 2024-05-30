const usuarios = [
    {edad:17 , nombre:'Nico', plan: 'premium'},
    {edad:13 , nombre:'chanchito', plan: 'free'},
    {edad:32 , nombre:'Fer', plan: 'free'},
    {edad:25 , nombre:'felipe', plan: 'gold'},
];


const userPass = usuarios.filter(x => x.plan != "free");
console.log(userPass);
const userOrder = userPass.sort((a,b)=>{
    if(a.edad < b.edad){
        return -1
    }if(a.edad > b.edad){
        return 1
    }
    return 0
})

console.log(userOrder)

const userHtml = userOrder.map(x=>`<li>${x.nombre}</li>`);
const aux = (`<ul>${userHtml.join(`
`)}</ul>`);
console.log(aux);