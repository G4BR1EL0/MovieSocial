import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const checkJWT = (req,res,next) =>{
    try {
        const jwt_tokenVerify=jwt.verify(req.headers.token,process.env.JWT_TOKEN);
        console.log(jwt_tokenVerify);
        next();
    } catch (error) {
        res.sendStatus(401);
    }    
};

export default checkJWT;