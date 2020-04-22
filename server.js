const express = require('express'); // esto es igual a import express from 'express';
const app = express(); // aca inicializo express
const server = require('http').Server(app);

const cors = require('cors'); // para control del cors
const bodyParser = require('body-parser'); //require al body parser
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://usermongo:usermongo@telegrom-xdxov.mongodb.net/test');

app.use(cors());
app.use(bodyParser.json()); //agrego el body parser para porder utilizarlo

socket.connect(server);
router(app);

app.use('/app', express.static('public')); //Sirve archivos estaticos como html, css, etc

server.listen(3000, function () {
    console.log('Aplicacion escuchando en http://localhost:3000');
}); //puerto en el que escucha
