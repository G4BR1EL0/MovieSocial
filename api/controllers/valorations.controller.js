import Valoration from '../models/valoration.model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const valorationController = {
    list: async (req,res) => {
        let respuesta = await Valoration.find()
                                        .populate('user')
                                        .populate('movie')
                                        .sort('-_id');
        res.json({respuesta});
    },
    listByUser: async (req,res) => {
        let respuesta = await Valoration.find({user : req.headers.id})
                                        .populate('user')
                                        .populate('movie')
                                        .sort('-_id');
        res.json({respuesta});
    },
    listByMovie: async (req,res) => {
        let respuesta = await Valoration.find({movie : req.headers.id})
                                        .populate('user')
                                        .populate('movie')
                                        .sort('-_id');
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
    delete: async (req,res) => {
        console.log(req.headers.id);
        let respuesta = await Valoration.findByIdAndDelete(req.headers.id);
        console.log(respuesta);
        res.send(respuesta);
    },
    deleteAll: async (req,res) => {
        let respuesta = await Valoration.remove({});
        res.send(respuesta);
    },
    update: async (req,res) => {
        console.log(req.body);
        let respuesta = await Valoration.updateOne({_id:req.body.id}, 
                        {$set:{comment:req.body.comment, stars:req.body.stars}})
        console.log(respuesta);
        res.send(respuesta);
        //.findOneAndUpdate({matchQuery},
        //{$set: updateData}, {useFindAndModify: false})
    }
}