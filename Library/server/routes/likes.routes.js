const CONTROLLER = require('../controllers/likes.controllers')


module.exports = app => {
    app.post('/api/likes/create', CONTROLLER.create)
    app.get('/api/likes', CONTROLLER.find)
    app.get('/api/like/:id',CONTROLLER.findOne)
    app.put('/api/like/:id', CONTROLLER.update)
    app.delete('/api/like/:id', CONTROLLER.deleteOne)
}