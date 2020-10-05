const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    handle: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    hp: {
        type: Number,
    },
    hpmax: {
        type: Number,
    },
    qp: {
        type: Number
    },
    missles: {
        type: Number
    },
    evasion: {
        type: Number
    },
    weapon1 : {
        type: String
    },
    weapon2: {
        type: String
    },
    weapon3: {
        type: String
    }
});

const User = mongoose.model('users',  UserSchema)

module.exports = User