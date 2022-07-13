const Model = require('../models/animals.model')

module.exports.index = (req, res) => {
    res.json({key : "hello zoolians"})
}

module.exports.create = (req,res) => {
    Model.create(req.body)
        .then( e => res.json(e) )
        .catch( e => res.json(e) )
}

module.exports.find = (req, res) => {
    Model.find()
        .then( e => res.json(e) )
        .catch( e => res.json(e) )
}

module.exports.findOne = (req, res) => {
    Model.findOne({_id: req.params.id})
        .then( e => res.json(e) )
        .catch( e => res.json(e) )
}