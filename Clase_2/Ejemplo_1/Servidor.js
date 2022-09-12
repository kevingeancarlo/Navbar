//Importe los módulos
const express = require("express");
const app = express();
const puerto = 5000;
//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');
//Atención de la solicitud
app.get('/kevin', (req,res)=>{
    res.render("index", {tit: "Kevin",
                        titulo:"Ing. en telecomunicaciones",
                        parrafo:"Suba",
                        Variable_n:"FERXXO"})
});

app.get('/julian', (req,res)=>{
    res.render("index", {tit: "Julian",
                        titulo:"Ing. en control",
                        parrafo:"Kennedy",
                        Variable_n:"Formula 1"})
});
//Oyente
app.listen(puerto, () => {
    console.log("Ejecutando express");
});

