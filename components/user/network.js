const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', function (req, res) {
    controller.addUser(req.body.name)
        .then(() => {
            response.success(req, res, 'Usuario creado con éxito', 201);
        })
        .catch(error => {
            response.error(req, res, 'Ocurrió un error', 500, error);
        })
})

router.get('/', function (req, res) {
    controller.listUsers(req.body.name)
        .then((users) => {
            response.success(req, res, users, 200);
        })
        .catch(error => {
            response.error(req, res, 'Ocurrió un error', 500, error);
        })
})

module.exports = router;