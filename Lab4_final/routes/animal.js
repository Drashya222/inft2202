//Name ->Drashya Patel
//Student ID -> 100863337
//Date: April 19th 2024
// routes/animal.js

const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

//Create a new animal
router.post('/create', animalController.createAnimal);

// GET Create Animal Page
router.get('/create-animal', animalController.getCreateAnimal);

// GET all animals
router.get('/', animalController.getAllAnimals);


// GET edit page for a specific animal
router.get('/:id/edit', animalController.getEditAnimalPage);

// POST update animal details
router.post('/:id/edit', animalController.updateAnimalDetails);

// POST delete an animal
router.delete('/:id/delete', animalController.deleteAnimal);

module.exports = router;
