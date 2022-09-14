//Importe el módulo express
const express = require("express");
const path = require('path');
//Variable que almacena el objeto para usar los métodos de la clase
const app = express();
const puerto = 5000;

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname+'/views'));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./src/rutas/index'));
//Oyente
app.listen(puerto, () => {
    console.log("Ejecutando express");
});

