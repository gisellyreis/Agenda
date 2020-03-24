const { Router } = require('express')

const routes = Router()

routes.get('/', (req, res) => {
    res.send('This system is still in construction')
})

// Contacts are basically api data 
// only signUp and login are user routes 

routes.get('/contacts', (req, res) => {
    res.send('This system is still in construction')
})

routes.post('/contacts', (req, res) => {
    
})

routes.get('/signUp', (req, res) => {
    res.send('This system is still in construction')
})

routes.get('/login', (req, res) => {
    res.send('This system is still in construction')
})

module.exports = routes