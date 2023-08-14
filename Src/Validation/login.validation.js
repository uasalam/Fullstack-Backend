//VALIDATING REGISTRATION
const Joi = require('@hapi/joi');

//Validating Web Login
const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()  
            .required(),
        type: Joi.string()
            .required()
    });
    return schema.validate(data);
}

module.exports.loginValidation = loginValidation;