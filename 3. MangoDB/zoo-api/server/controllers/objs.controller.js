const { response } = require('express');
const Model = require('../models/objs.model');

module.exports.findAll = (req, res) => {
    Model.find()
        .then((e) => {
            res.json({ data: e })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.find = (req, res) => {
    Model.findOne({id: req.params.id})
        .then( (e) => { res.json({data:e}) })
        .catch((err) => {res.json({ message: 'Something went wrong', error: err })});
}

module.exports.create = (req,res) => {
    Model.create(req.body)
        .then( (e)=>{ response.json({data:e}) } )
        .catch((err) => {res.json({ message: 'Something went wrong', error: err })});
}

module.exports.update = (req, res) => {
    Model.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then( (e)=>{ response.json({data:e}) } )
        .catch((err) => {res.json({ message: 'Something went wrong', error: err })});
}

module.exports.delete = ( req, res) => {
    Model.deleteOne( {_id : req.params.id} )
    .then( (e)=>{ response.json({data:e}) } )
    .catch((err) => {res.json({ message: 'Something went wrong', error: err })});
}
