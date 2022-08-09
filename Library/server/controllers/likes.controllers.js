const Model = require('../models/likes.model')


const create = (req,res) => {
    console.log(req.body)
    Model.create(req.body)
        .then( e => res.json(e) )
        .catch( e => res.json(e) )
}
const find = (req, res) => {
    Model.find()
        .then( e => res.json( e ) )
        .catch( e => res.json( e ) )
}

const findOne = (req, res) => {
    // or change to body
    Model.findOne( {_id: req.params.id} )
        .then( e => res.json(e) )
        .catch( e => res.json(e)  )
}

const update = (req, res) => {
    console.log(req.body)
    Model.findOneAndUpdate( {_id: req.body._id}, req.body, { new: true } )
        .then( e => {res.json(e)} )
        .catch( e => res.json(e) )
}

const deleteOne = (req, res) => {
    Model.deleteOne({_id: req.params.id})
        .then( e => res.json(e) )
        .catch( e => res.json(e) )
}

module.exports = {create, find, findOne, update, deleteOne};