const usuarios = [
    {edad:17 , nombre:'Nico', plan: 'premium'},
    {edad:13 , nombre:'chanchito', plan: 'free'},
    {edad:32 , nombre:'Fer', plan: 'free'},
    {edad:25 , nombre:'felipe', plan: 'gold'},
];

function getPaidUsers(usrs){
    return paid = usrs.filter(n => {
        if (n.plan === "premium" || n.plan === "gold"){
            return n
        }
    })
}

console.log(getPaidUsers(usuarios));