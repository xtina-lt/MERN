const Model = require('../models/users.model')
// decrypt and encrypt passwords
const bcrypt = require('bcrypt')
// JWT: Json Web Token
// encoded and varified by secret key
// decodent into json object
const jwt = require('jsonwebtoken')
// get secret ket from .env
require('dotenv').config()
const SECRET = process.env.SECRET


// test
const index = (req, res) => {
    res.json({ message: "Hello World" })
}

const register = async (req, res) => {
    try {
        // check to make sure email is not the same
        const checkEmail = await Model.findOne({ email: req.body.email })
        if (checkEmail) {
            res.status(400).json({ errors: { email: { message: 'Email in use🦄' } } })
            // check other inputs
        } else {
            const data = new Model(req.body)
            const user = await data.save()
            const token = jwt.sign({ _id: user._id, email: user.email, first: user.first, stars: user.stars }, SECRET)
            res.status(201)
                // create cookie
                // name, generated token, expiration
                .cookie('userToken', token, { expires: new Date(Date.now() + 900000) })
                .json({ successMessage: 'user created', user: user })
        }
    } catch (err) {
        res.status(400).json(err)
    }
}

const login = async (req, res) => {
    const user = await Model.findOne({ email: req.body.email })
    console.log('logging in:' + user)
    try {
        // if email not in system
        if (!user) {
            res.status(400).json({ errors: 'Email not found' })
            // else check the rest
        } else {
            const validPassword = await bcrypt.compare(req.body.password, user.password)
            if (!validPassword) {
                res.status(400).json({ errors: 'Invalid email/password' })
            } else {
                const payload = { _id: user._id, email: user.email, first: user.first }
                const token = jwt.sign(payload, SECRET)
                res.cookie('userToken', token, { httpOnly: true })
                res.cookie('stars', user.stars, { sameSite: 'none', secure: true })
                .json({ successMessage: 'userToken: ', user: user })
            }
        }
    } catch (err) {
        res.status(400).json({ errors: 'oops something when wrong' })
    }
}

const logout = (req, res) => {
    res.clearCookie('userToken')
    res.json({ successMessage: 'user logout' })
}

const getLogged = async (req, res) => {
    try {
        const user = jwt.verify(req.cookies.userToken, SECRET);
        const currentUser = await Model.findOne({ _id: user._id });
        res.json(currentUser);
    } catch (error) {
        console.log('fail' )
        res.status(401).json({ error });
    }
};

const updateOne = async (req, res) => {
    const user = await Model.findOne({_id : req.body._id})
    try {
        const payload = { _id: user._id, email: user.email, first: user.first, stars: user.stars }
        const token = jwt.sign(payload, SECRET)
        res.cookie('userToken', token, { httpOnly: true }).json({ successMessage: 'userToken: ', user: user })
    } catch (err) {
        res.status(400).json({ errors: 'oops something when wrong' })
    }
}



// export
module.exports = { index, register, login, logout, getLogged }



/* JOIN
const createMovie = (req, res) =>
const token = jwt.verify(req.cookies.userToken, SECRET)
Movie.create({...req.body, createdBy: user._id})
*/