function precioCompleto(precio, impuesto){
    return precio + (precio*impuesto);
}

const resultado = precioCompleto(19.90,0.15);
console.log(resultado);