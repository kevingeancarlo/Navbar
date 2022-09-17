const { Router } = require('express');
const router = new Router();

let productos = [];

router.get("/", (req, res) => {
res.render("index", { productos }); });

router.get('/registro-form', (req, res) => { res.render('registro-form');
});

router.get("/productosregistrados", (req, res) => {
  res.render("productosregistrados", { productos }); });

router.get("/producto", (req, res) => {
  res.render("producto", { productos }); });

router.get("/producto_2", (req, res) => {
  res.render("producto_2", { productos }); });

  router.get("/producto_3", (req, res) => {
    res.render("producto_3", { productos }); });

router.post('/registro-form', (req, res) => {
let { nombre, documento, impuesto, vendedor } = req.body;
let nuevoRegistro = { nombre, documento, impuesto, vendedor, fecha: new Date() }; productos.push
(nuevoRegistro);
res.redirect("/");
});

module.exports = router;