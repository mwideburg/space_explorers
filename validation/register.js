
const Validator = require('validator');
const validText = require('./valid-text');


 module.exports = function validateRegisterInput(data) {
     let errors = {};


    data.handle = validText(data.handle) ? data.handle : ""
    // data.email = validText(data.email) ? data.email : ""
    data.password = validText(data.password) ? data.password : ""
    data.password2 = validText(data.password2) ? data.password2 : ""
     

    if(!Validator.isLength(data.handle, {min: 2, max: 30})){
        errors.handle = "Handle must be between blah and ablah"
    }
    if(Validator.isEmpty(data.handle)){
        errors.handle = "Handle cant be empty"
    }
    // if(!Validator.isEmail(data.email)){
    //     errors.email = "Email is invalid"
    // }
    if(Validator.isEmpty(data.email)){
        errors.email = "email cant be empty"
    }
    if(Validator.isEmpty(data.password)){
        errors.password = "Password cant be empty"
    }
    if (!Validator.isLength(data.password, { min: 2, max: 30 })){
        errors.password = "Password must be 2-30 chars long"
    }
    if (!Validator.equals(data.password, data.password2)){
        errors.password2 = "Password must match"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
 }