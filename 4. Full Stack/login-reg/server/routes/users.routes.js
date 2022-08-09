const CONTROLLER = require('../controllers/users.controller')

module.exports = app => {
    app.post('/register', CONTROLLER.register)
    app.post('/login', CONTROLLER.login)
    app.post('/logout', CONTROLLER.logout)
    app.get('/api/user', CONTROLLER.getLoggedIn)
}