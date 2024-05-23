const usuarios = [
    {edad:17 , nombre:'Nico', plan: 'premium'},
    {edad:13 , nombre:'chanchito', plan: 'premium'},
    {edad:32 , nombre:'Fer', plan: 'free'},
    {edad:25 , nombre:'felipe', plan: 'gold'},
];


function cuantosPremium(usrs){
    return usrs.reduce((acc,el)=> {
        if (el.plan !== 'free'){
            return acc + 1
        }
        return acc;
    },0)
}

function cuantosMayores(usrs){
    return usrs.reduce((acc, el) => el.edad > 17 ? acc + 1 : acc, 0)
}

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));