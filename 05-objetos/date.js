const ahora = new Date();
console.log(ahora);

const fecha = new Date('December 11 1986 14:15 GMT-0300'); //mes dia año
console.log(fecha);

const fecha2 = new Date(1986,11,25,14,15);
console.log(fecha2)


const fecha3 = new Date(1986,11,25,14+15,15);
console.log(fecha3);

console.log('todatetring',fecha.toDateString());
console.log('todatetring',fecha.toISOString());
console.log('todatetring',fecha.toTimeString());
fecha.setFullYear(2002);
console.log(fecha);


console.log(fecha.getDate());

