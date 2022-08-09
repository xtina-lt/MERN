const Model = require('../models/animals.model')

module.exports.index = (req, res) => {
    res.json({key : "welcome to the shelter"})
}

module.exports.create = (req,res) => {
    Model.create(req.body)
        .then( e => res.json(e) )
        .catch( e => res.status(400).json(e) )
}

module.exports.find = (req, res) => {
    /*********************************
    *       BLACK BELT 1 / 2         * 
    *       SORT BY SPECIES          *
    *      ascend 1; desc -1         *
    **********************************/
    Model.find().sort([['species', 1]])
        .then( e => res.json(e) )
        .catch( e => res.status(400).json(e) )
}

module.exports.findOne = (req, res) => {
    Model.findOne({_id: req.params.id})
        .then( e => res.json(e) )
        .catch( e => res.status(400).json(e) )
}

module.exports.udpateOne = (req, res) => {
    console.log('updating: ' + req.body.data)
    /*********************************
    *       BLACK BELT 2 / 2         * 
    *    validate while updating     *
    **********************************/
    Model.findOneAndUpdate({_id: req.params.id}, req.body.data, { new: true, runValidators: true })
        .then( e=> res.json(e) )
        .catch( e => res.status(400).json( e ) )
}

module.exports.deleteOne = (req, res) => {
    Model.deleteOne({_id: req.params.id})
        .then( e => res.json(e) )
        .catch( e => res.status(400).json(e) )
}
