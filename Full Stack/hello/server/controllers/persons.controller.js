const Person = require('../models/people.model')

module.exports.index = (req, res) => {
    res.json({message : "I origionate from the person controller"})
}

module.exports.create = (req, res) => {
    Person.create(req.body)
        .then( e => res.json(e) )
        .catch( err => res.json({message: 'Something went wrong', error: err}) );

}