const express = require('express'); 

const routes = express.Router();

const UserController = require('./controllers/UserController');
const ContactController = require('./controllers/ContactController');
const SessionController = require('./controllers/SessionController');

routes.get('/contacts', ContactController.index)

routes.post('/contacts/new', ContactController.create)

routes.post('/contacts/:id', ContactController.update)

routes.delete('/contacts/:id', ContactController.delete)

routes.post('/singUp', UserController.create)

routes.post('/login', UserController.index)

routes.post('/login/update', UserController.update)

routes.delete('/login/delete', UserController.delete)

routes.get('/session', UserController.test )

routes.get('/session/gitcontacts', SessionController.index)


module.exports = routes;