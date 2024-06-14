const suma = (a,b, ...rest)=>{
    console.log(rest);
}

suma(1,2,3,4)

const logMSG = (desc, ...msgs)=>{
    for (let msg of msgs){
        console.log(desc,msg);
    }
}
logMSG('servidor:','err1','err2')
let mensajes = ['error 1','error 2', 'error 3']
logMSG('cliente movil',...mensajes);