const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = new mongoose.Schema({
    first: {
        type: String,
        required: [true, 'Gimme a name'],
        minLength: [2, 'Tell me more than 2']
    },
    last: {
        type: String,
        required: [true, 'Gimme a name'],
        minLength: [2, 'Tell me more than 2']
    },
    email: {
        type: String,
        required: [true, 'Email Required']
    },
    password: {
        type: String,
        required: [true, 'Password Required']
    }
}, { timestamps: true })

Schema.virtual('confirmP')
    .get(() => this._confirmP)
    .set((value) => (this._confirmP = value));

Schema.pre('validate', function (next) {
    if (this.password !== this.confirmP) {
        this.invalidate('confirmP', 'Passwords must Match!!!');
    }
    next();
});

Schema.pre('save', async function (next) {
    console.log('IN PRE SAVE:', this.password);
    try {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        console.log('HASHED:', hashedPassword);
        this.password = hashedPassword;
        next();
    } catch (error) {
        console.log('ERROR IN SAVE', error);
    }
});

module.exports = mongoose.model('User', Schema)
