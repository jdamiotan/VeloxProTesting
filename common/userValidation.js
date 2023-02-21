import Joi from 'joi';

const userValidation = (data)=>{
    const userSchema = Joi.object({
        UserName: Joi.string().required(),
        UserEmail: Joi.string().required(),
        UserPassword: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    });
    return userSchema.validate(data);
};

export default userValidation;