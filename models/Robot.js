const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RobotSchema = new Schema({

    name: {
        type: String,
    },
    pilot_id: {
        type: String
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
    },
    rosscoin: {
        type: Number
    }
})

const Robot = mongoose.model('robot', RobotSchema)

module.exports = Robot

