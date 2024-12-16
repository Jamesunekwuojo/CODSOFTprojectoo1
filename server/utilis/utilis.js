import jwt from 'jsonwebtoken';


const JWTkey = process.env.JWT_KEY;

// export const createToken = (_id) => {
//     return jwt.sign({_id},  JWTkey, {epiresIn:'12h'})
// }


const createToken = ( userId) => {
    const token = jwt.sign({ userId }, JWTkey, { expiresIn: '12h' });

  
    return token;




    
};

export default createToken;
