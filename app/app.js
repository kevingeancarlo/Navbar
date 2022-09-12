//Importe el módulo express
const express = require("express");
//Variable que almacena el objeto para usar los métodos de la clase
const app = express();
const puerto = 5000;
app.set('view engine', 'jade');
app.set('views',__dirname+'/views');
//Solicitud 1 atendida en la raíz
app.get('/', (req,res)=>{
    res.render("index")
});

//Oyente
app.listen(puerto, () => {
    console.log("Ejecutando express");
});

