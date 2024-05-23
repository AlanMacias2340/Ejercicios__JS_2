const usuarios = [
    {edad:17 , nombre:'Nico', plan: 'premium'},
    {edad:13 , nombre:'chanchito', plan: 'free'},
    {edad:32 , nombre:'Fer', plan: 'gold'},
    {edad:25 , nombre:'felipe', plan: 'free'},
];

function groupBy(arr,prop){
    return arr.reduce((acc,a)=>{
        let key = a.plan
        acc[key] = acc[key] ? acc[key] : [];
        acc[key].push(a);
        return acc
    },{})
};

const grouped = groupBy(usuarios,'plan');
console.log({grouped})