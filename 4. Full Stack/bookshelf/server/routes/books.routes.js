const CONTROLLER = require('../controllers/books.controller')

module.exports = app => {
    app.get('/', CONTROLLER.index)
    app.post('/api/book/', CONTROLLER.create)
    app.get('/api/books/', CONTROLLER.find)
    app.get('/api/book/:id', CONTROLLER.findOne)
    app.put('/api/book/:id', CONTROLLER.udpateOne)
    app.delete('/api/book/:id', CONTROLLER.deleteOne)
}
