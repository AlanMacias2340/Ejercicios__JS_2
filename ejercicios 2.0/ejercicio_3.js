function similares(obj1,obj2){
    for (let key in obj1){
        if(obj1[key]==obj2[key]){
            continue;
        }else{
            return false;
        }
    }
    return true;
}

let reslutado = similares(
    {id:1,name:"alan"},
    {id:1,name:"alan"}
);

console.log(reslutado);