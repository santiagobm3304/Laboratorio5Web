var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const rutas = require('./rutas');
var port = 3000;

app.use(express.static('files'));
app.use('/static', express.static('public'));

app.use('/', rutas);

app.use(function (req, res, next){
    res.status(404).send("Eso no existe");
});

app.use(function (err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Algo salio mal');
});

io.on('connection', function(socket){
    console.log('alguien se conecto!');
    socket.on('chat message', function(mensaje){
        console.log('recibi: '+mensaje);
        io.emit('recibido', {
            date: new Date(),
            txt: mensaje
        });
    });
});

http.listen(port, function (){
    console.log('Escuchando en http://localhost:'+ port);
});