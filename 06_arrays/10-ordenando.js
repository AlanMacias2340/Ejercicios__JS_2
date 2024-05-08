let numeros = [15,10,-3];

numeros.sort();
console.log(numeros);

numeros.reverse();
console.log(numeros);

let abc = ['z','a','b'];
abc.sort()
console.log(abc);

let abcConMayusculas = ['Z','a','b'];
abcConMayusculas.sort((a,b)=>{
    let alower = a.toLowerCase();
    let blower = b.toLowerCase();

    if (alower < blower){ //si quieres que este "a" por delante
        return -1;
    }if(alower>blower){//si quieres que este "b" por delante
        return 1;
    }
    return 0;//si son iguales
});
console.log(abcConMayusculas)
