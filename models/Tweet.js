const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const TweetScheema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


const Tweet = mongoose.model('tweet', TweetScheema)

module.exports = Tweet;