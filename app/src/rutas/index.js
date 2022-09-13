const { Router } = require('express');
const router = new Router();

let productos = [];

router.get("/", (req, res) => {
res.render("index", { productos }); });

router.get('/registro-form', (req, res) => { res.render('registro-form');
});

router.post('/registro-form', (req, res) => {
let { nombre, documento } = req.body;
let nuevoRegistro = { nombre, documento, fecha: new Date() }; productos.push
(nuevoRegistro);
res.redirect("/");
});

module.exports = router;