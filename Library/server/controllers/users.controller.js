const Model = require('../models/users.model')

module.exports.index = (req, res) => {
    res.json({message:"Hello World"})
}

module.exports.create = (req, res) => {
    Model.create(req.body)
        .then( e => res.json(e) )
        .catch( e=> res.json(e) )
}