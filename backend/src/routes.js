const express = require('express'); 

const routes = express.Router();

const UserController = require('./controllers/UserController');
const ContactController = require('./controllers/ContactController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');
const SearchController = require('./controllers/SearchController');

routes.get('/contacts', ContactController.index)

routes.post('/contacts/new', ContactController.create)

routes.post('/contacts/:id', ContactController.update)

routes.delete('/contacts/:id', ContactController.delete)

routes.get('/search', SearchController.search)

routes.post('/singUp', UserController.create)

routes.post('/login', UserController.index)

routes.get('/profile', ProfileController.index)

routes.post('/login/update', UserController.update)

routes.delete('/login/delete', UserController.delete)

routes.get('/session', UserController.test )

routes.get('/profile/gitcontacts', SessionController.index)


module.exports = routes;