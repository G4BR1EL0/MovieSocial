import Valoration from '../models/valoration.model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const valorationController = {
    list: async (req,res) => {
        let respuesta = await Valoration.find().populate('user').populate('movie');
        res.json({respuesta});
    },
    create: async (req,res) => {
        try {
            console.log(req.body)
            let respuesta = await Valoration.create(req.body);
    
            res.json({respuesta});
        } catch (error) {
            res.json({error});
            console.log(error);
        }
    },
    //solo admin
    delete: async (req,res) => {
        let respuesta = await Valoration.findByIdAndDelete(req.params.id);
        res.send(respuesta);
    },
    deleteAll: async (req,res) => {
        let respuesta = await Valoration.remove({});
        res.send(respuesta);
    },
    update: async (req,res) => {
        let respuesta = await Valoration.findByIdAndUpdate(req.headers.id, req.body);
        res.send(respuesta);
    }
}