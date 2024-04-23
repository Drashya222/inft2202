import AnimalService from '../../../js/animal.service.js';
app.get('/animals', (req, res) => {
    res.render('animals/show', { animals: animalsData });
});
async function show(req, res) {
    try {
        const { name } = req.params;
        const animal = await AnimalService.getAnimalByName(name);
        
        if (!animal) {
            return res.status(404).render('404'); 
        }
        res.render('animals/show', { animal: [animal] });
    } catch (error) {
        console.error('Error fetching animal:', error);
        res.status(500).send('Internal Server Error');
    }
}
