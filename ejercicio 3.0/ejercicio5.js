const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'chanchito', plan: 'premium' },
    { edad: 32, nombre: 'Fer', plan: 'free' },
    { edad: 25, nombre: 'felipe', plan: 'gold' },
];

function obtenerMayor(arr) {
    return arr.reduce((acc,a)=> {
        if(acc.edad > a.edad){
            return acc
        }
        return a
    },...arr)
}

const mayor = obtenerMayor(usuarios);
console.log(mayor);