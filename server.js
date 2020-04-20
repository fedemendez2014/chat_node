const express = require('express'); // esto es igual a import express from 'express';

var app = express(); // aca inicializo express

app.use('/', function (req, res) {
    res.send('hola');
}) //para cualquier ruta

app.listen(3000); //puerto en el que escucha

console.log('Aplicacion escuchando en http://localhost:3000');
