function webserver(config){
    const url = config.url;
    return url;
}


console.log(webserver({url:'google.com'}));


const config = {
    url:'https://ejemplo.com',
    direccion:{
        calle:'domingo',
        numero:'80'
    }
}
function webserver2({url,direccion:{calle}}){
    console.log(calle);
    return url;
}
console.log(webserver2(config));




const config2 = [
    'holamundo.io',
    145,
    80
]
function webserver3(configuracion){
    const [url,bucket,port] = configuracion;
    return url;
}
console.log(webserver3(config2));