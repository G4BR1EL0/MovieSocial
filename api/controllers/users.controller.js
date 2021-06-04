import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const userController = {
    list: async (req,res) => {
        let respuesta = await User.find();
        res.json({respuesta});
    },
    login: async (req,res) => {
        try {
            console.log(req.body)
            let respuesta = await User.findOne({$and: [{'email':req.body.email},
                                                    {'password':req.body.password}]}).lean();
            console.log(respuesta)
            if(respuesta){
                const payload={respuesta};
                const secret=process.env.JWT_TOKEN;
                const token=jwt.sign(payload,secret);        
                res.json({"token":token,"user":respuesta});
                return 
            }
            res.json({error:"Datos incorrectos"});
        } catch (error) {
            console.log(error);            
            res.send(error);
        }
    },
    create: async (req,res) => {
        try {
            console.log(req.body)
            let respuesta = await User.create(req.body);
    
            res.json({respuesta});
        } catch (error) {
            res.json({error});
            console.log(error);
        }
    },
    delete: async (req,res) => {
        let respuesta = await User.findByIdAndDelete(req.params.id);
        res.send(respuesta);
    },
    deleteAll: async (req,res) => {
        let respuesta = await User.remove({});
        res.send(respuesta);
    },
    update: async (req,res) => {
        let respuesta = await User.findByIdAndUpdate(req.headers.id, req.body);
        console.log(req.body, "esto es el body");
        console.log(respuesta);
        res.send(respuesta);
    }
}
