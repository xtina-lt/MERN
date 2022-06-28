const Controller = require('../controllers/animals.controller')

module.exports = app => {
    app.get('/getme', Controller.index)
    app.post('/animals/create', Controller.create)
}