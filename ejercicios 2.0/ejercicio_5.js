let objeto = {
    id: 1,
    name: 'false',
    login: function () { },
    logout: function () { },
}

let propiedad = 'name';

function tieneProp(obj, propiedad) {

    for (let key in obj) {
        if (propiedad == key) {
            return key;
        }
    }
}

console.log(tieneProp(objeto, propiedad));