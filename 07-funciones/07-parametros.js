
//antiguo
function configurarApi(url){
    const defaultUrl = url || 'https://google.com';
    return `${defaultUrl}`;
}

function configurarApi2(url = "default url"){
    return `${url}`;
}


console.log(configurarApi(''));
console.log(configurarApi2());


//obtener la propiedad de un objeto

const config = {
    url:'https://holamundo.com',
}

function configurarApi3({ url } = {url:'defecto'}){
    return `${url}`;
}

console.log(configurarApi3(config));