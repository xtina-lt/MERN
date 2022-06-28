const Controller = require('../controllers/persons.controller')

module.exports = app => {
    app.get('/', Controller.index)
    app.post('/api/people', Controller.create)
}