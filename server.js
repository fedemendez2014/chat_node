const express = require('express'); // esto es igual a import express from 'express';
const app = express(); // aca inicializo express
const server = require('http').Server(app);
const config = require('./config');

const cors = require('cors'); // para control del cors
const bodyParser = require('body-parser'); //require al body parser
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

db(config.dbUrl);

app.use(cors());
app.use(bodyParser.json()); //agrego el body parser para porder utilizarlo

socket.connect(server);
router(app);

app.use(`/${config.publicRoute}`, express.static('public')); //Sirve archivos estaticos como html, css, etc

server.listen(config.port, function () {
    console.log(`Aplicacion escuchando en ${config.host}:${config.port}`);
}); //puerto en el que escucha
