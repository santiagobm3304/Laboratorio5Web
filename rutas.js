const express = require('express');
const router = express.Router();

router.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
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
