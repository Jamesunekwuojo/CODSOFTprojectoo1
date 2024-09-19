import jwt from 'jsonwebtoken';


const JWTkey = process.env.JWT_key;

// export const createToken = (_id) => {
//     return jwt.sign({_id},  JWTkey, {expiresIn:'12h'})
// }


const createToken = (res, userId) => {
    const token = jwt.sign({ userId }, JWTkey, { expiresIn: '12h' });

    res.cookie('jwt', token, {
        httpOnly: true,
        secure:process.env.NODE_ENV !== 'development',
        sameSite: 'strict', // to prevent cross site attack
        maxAge: 12 * 60 * 60 * 1000 ,// 12 hours
    });
};

export default createToken;
