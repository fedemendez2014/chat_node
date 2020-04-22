const express = require('express'); // esto es igual a import express from 'express';
const bodyParser = require('body-parser'); //require al body parser
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://usermongo:usermongo@telegrom-xdxov.mongodb.net/test');
var app = express(); // aca inicializo express
app.use(bodyParser.json()); //agrego el body parser para porder utilizarlo
router(app);

app.use('/app', express.static('public')); //Sirve archivos estaticos como html, css, etc

app.listen(3000); //puerto en el que escucha
console.log('Aplicacion escuchando en http://localhost:3000');
