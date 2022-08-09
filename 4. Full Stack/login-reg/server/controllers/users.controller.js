const Model = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config()

const SECRET = process.env.SECRET;
console.log('SECRET', SECRET)

const register = async(req, res) => {
    try{
        const user = new Model(req.body);
        const userData = await user.save();
        const userToken = jwt.sign({ _id: userData._id, email:userData.email, first: userData.first}, SECRET)
        res.status(201)
            .cookie('userToken', userToken, { expires: new Date(Date.now() + 900000) })
            .json({successMessage: 'user created', user: userData})
    } catch(e) {
        console.log("caught an error: ", e);
        res.status(400).json(e);
    }
}

const login = async (req, res) => {
    const userDoc = await Model.findOne({email: req.body.email})
    console.log(userDoc)
    try{
        if(!userDoc){
            res.status(400).json({error: 'invalid email/password'})
        } else {
            const isPasswordValid = await bcrypt.compare(req.body.password, userDoc.password)
            if (!isPasswordValid) {
                res.status(400).json({error: 'invalid email/password'})
            } else {
                const userToken = jwt.sign({
                    _id: userDoc._id, 
                    email: userDoc.email, 
                    first: userDoc.first}
                    , SECRET)
                console.log("JWT", userToken)
                res.status(201)
                    .cookie('userToken', userToken, { expires: new Date(Date.now() + 900000) })
                    .json({successMessage: 'user created', user: userDoc})
            }
        }
    }catch(e){
        res.status(400).json({error:'invalid email/password'})
    }
}

const logout = (req, res) => {
    res.clearCookie('userToken')
    res.json({successMessage: 'user logout'})
}

const getLoggedIn = (req, res) => {
    console.log("getting cookies")
    console.log("req: " + req)
    console.log("cookies: " + req.cookies)
    res.json("good try")
    // // use with create other object as well
    // const user = jwt.verify(req.cookies.userToken, SECRET);
    // Model.findOne({_id: user._id})
    //     .then( e => res.json(e) )
    //     .catch( e => console.log(e))
}

module.exports = {
    register, login, logout, getLoggedIn
}