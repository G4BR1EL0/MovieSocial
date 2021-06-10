import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const adminAuth = async (req, res, next) => {
    const info = jwt.decode(req.headers.token);
    if(info.respuesta.admin){
        next();
    }else{
        res.status(401).send('No eres administrador');
    }
}

export default adminAuth;