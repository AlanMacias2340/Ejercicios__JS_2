function numeroImpares(longitud){
    for (let i = 0; i <= longitud;i++){
        if (i % 2 != 0){
            console.log('impar ',i);
        }
    }
}

numeroImpares(10);