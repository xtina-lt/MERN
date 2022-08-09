const CONTROLLER = require('../controllers/animals.controller')

module.exports = app => {
    app.get('/', CONTROLLER.index)
    app.get('/api/animals/', CONTROLLER.find)
    app.post('/api/animals/', CONTROLLER.create)
    app.get('/api/animal/:id', CONTROLLER.findOne)
    app.put('/api/animal/:id', CONTROLLER.udpateOne)
    app.delete('/api/animal/:id', CONTROLLER.deleteOne)
}
