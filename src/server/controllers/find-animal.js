import mongoose from 'mongoose';

import Animal from '../models/Animal.js';

export default async (req, res, next)=>{
    mongoose.connect('mongodb://127.0.0.1:27017/inft2202')
        .then(() => console.log('Connected!'));
    
    const animals = await Animal.find({
        name : req.parms.name,
    });

    res.render('animals',{
        animals
    })
}