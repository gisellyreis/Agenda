const express = require('express');

const routes = express.Router();

routes.get('/contacts', (req, res) => {
    res.send('Listar contatos');
})

routes.post('/contacts/new', (req, res) => {
    const body = req.body;
    console.log(body);
    res.json(body);
})

routes.post('/singUp', (req, res) => {
    res.send('Cria conta de usuario');
})

routes.post('/login', (req, res) => {
    res.send('Faz login de usuario');
})


module.exports = routes;