const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateTweet(data){
    let errors = {};

    data.text  = validText(data.text) ? data.text : "";


    if(!Validator.isLength(data.text, {min: 5, max: 140})){
        errors.text = "Tweet must be balas dbjd"
    }
    if(Validator.isEmpty(data.text)){
        errors.text = "Tweet must be there"
    }


    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}