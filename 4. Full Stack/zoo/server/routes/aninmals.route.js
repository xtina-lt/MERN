const CONTROLLER = require('../controllers/animals.controller')

module.exports = app => {
    app.get('/getme', CONTROLLER.index)
    app.post('/api/animal/create', CONTROLLER.create)
    app.get('/api/animals/find', CONTROLLER.find)
    app.get('/api/animal/find/:id', CONTROLLER.findOne)
}