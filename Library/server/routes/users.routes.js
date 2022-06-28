const Controller = require('../controllers/users.controller')

module.exports = app  => {
    app.get('/', Controller.index)
    app.post('/register', Controller.create)
}