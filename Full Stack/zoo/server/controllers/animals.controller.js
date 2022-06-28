const Model = require('../models/animals.model')

module.exports.index = (req, res) => {
    res.json({key : "hello zoolians"})
}

module.exports.create = (req,res) => {
    Model.create(req.body)
        .then( e => res.json(e) )
        .catch( e => res.json(e) )
}