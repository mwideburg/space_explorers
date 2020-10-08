const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnemySchema = new Schema({

    hp: {
        type: Number,
    },
    name: {
        type: String,
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
    weapon1: {
        type: String
    },
    weapon2: {
        type: String
    },
    weapon3: {
        type: String
    },
    rosscoin: {
        type: Number
    },
    location: {
        type: String
    },
});

const Enemy = mongoose.model('enemies', EnemySchema)

module.exports = Enemy