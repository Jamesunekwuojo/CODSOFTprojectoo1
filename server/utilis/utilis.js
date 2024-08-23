import jwt from 'jsonwebtoken';


const JWTkey = process.env.JWT_key;

export const createToken = (_id) => {
    return jwt.sign({_id},  JWTkey, {expiresIn:'12h'})
}