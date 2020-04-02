const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const ContactController = require('./controllers/ContactController');

routes.get('/contacts', ContactController.index)

routes.post('/contacts/new', ContactController.create)

routes.post('/contacts/:id', ContactController.update)

routes.delete('/contacts/:id', ContactController.delete)

routes.post('/singUp', UserController.create)

routes.post('/login', (req, res) => {
    res.send('Faz login de usuario');
})

routes.get('/session',  UserController.index)


module.exports = routes;