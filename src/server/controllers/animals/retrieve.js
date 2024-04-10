import Animal from '../../models/Animal.js';

export default async (req, res, next)=>{
    
    const query = {};
    
    if (req.params.name) {
        query.name = rq.params.name; 
    }

    try {
        const animals = await Animal.find(query);
        if (animals.length === 0) {
            return res.status(404).send('Animal not found');
        }
        return res.json(animals);
    } catch (error) {
        console.error('Error retrieving animals:', error);
        next(error);
    }
}