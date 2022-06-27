const Controller = require('../controllers/objs.controller');

module.exports = app => {
    app.get('/', Controller.findAll);
    app.get('/api/obj/:id', Controller.find)
    app.post('/api/obj/:id', Controller.create)
    app.put('/api/obj/:id', Controller.update)
    app.delete('/api/obj/:id', Controller.delete)
}
