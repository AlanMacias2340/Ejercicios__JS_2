function ordenar(texto,fn){
    const h = texto.toLowerCase()
        .split("")
        .filter(letra => letra !== ' ')
        .sort()
        .join("");

    fn(h);
}

ordenar('hola mundo',console.log);