const express = require('express');
const router = express.Router();

router.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

router.get('/prueba-jade', function(req, res){
    res.render('index');
});

router.get('/laboratorio6', function(req, res){
    res.render('proyecto');
});

router.get('/productos', function(req, res){
    res.render('productos');
});

router.get('/contacto', function(req, res){
    res.render('contacto');
});

router.post('/', function(req, res){
    res.send('Llamada POST misma url');
});

router.put('/user', function(req, res){
    res.send('Recibimos un PUT en /user');
});

router.delete('/user', function(req, res){
    res.send('Recibimos un DELETE en /user');
});

module.exports = router;
