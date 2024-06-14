function saludar(...rest){
    console.log(this,rest);
}

saludar.call({propiedad:'hola mundo'},1,2);
saludar.apply({propiedad:'hola mundo'},[1,2]);
saludar.bind({propiedad:'hola mundo'})(1,5);


(function saludar2(...rest){
    console.log(this,rest);
}).bind({propiedad:'hola mundo'})(1,2);