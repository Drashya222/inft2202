//Name ->Drashya Patel
//Student ID -> 100863337
//Date: April 19th 2024
// controllers/animalController.js

const Animal = require("../model/Animal");

exports.getCreateAnimal = async (req, res) => {
  try {
    res.render("animals/entry-form");
  } catch (error) {
    console.error("Error retrieving animals:", error);
    res.status(500).send("Error retrieving animals from database");
  }
};

exports.createAnimal = async (req, res) => {
  try {
    // Extract data from request body
    const {
      Zoo,
      scientificName,
      commonName,
      givenName,
      gender,
      age,
      dateOfBirth,
      isTransportable,
    } = req.body;

    // Validate age format
    const parsedAge = parseInt(age);
    if (isNaN(parsedAge)) {
      return res.status(400).json({ error: "Age must be a number" });
    }
    // Create the animal using the extracted data
    const newAnimal = await Animal.create({
      Zoo,
      scientificName,
      commonName,
      givenName,
      gender,
      age: parsedAge,
      dateOfBirth,
      isTransportable: isTransportable === "on" ? true : false,
    });
    // Send a success response
    res
      .status(201)
      .json({ message: "Animal created successfully", animal: newAnimal });
  } catch (error) {
    // Handle errors
    console.error("Error creating animal:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Handler to get all animals
exports.getAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.find().sort({ _id: -1 });

    res.render("animals/all-animals", { animals: animals });
  } catch (error) {
    console.error("Error retrieving animals:", error);
    res.status(500).send("Error retrieving animals from database");
  }
};

// Handler to get the edit page for a specific animal
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  // Add leading zeros if month/day is less than 10
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};

exports.getEditAnimalPage = async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    // Format dateOfBirth
    const formattedDateOfBirth = formatDate(animal.dateOfBirth);
    res.render("animals/edit-animal", {
      animal: animal,
      formattedDateOfBirth: formattedDateOfBirth,
    });
  } catch (error) {
    res.status(404).send("Animal not found");
  }
};

// Handler to update animal details
exports.updateAnimalDetails = async (req, res) => {
  try {
    const updatedValues = {
      // Update all fields
      Zoo: req.body.Zoo,
      scientificName: req.body.scientificName,
      commonName: req.body.commonName,
      givenName: req.body.givenName,
      gender: req.body.gender,
      dateOfBirth: req.body.dateOfBirth,
      age: parseInt(req.body.age),
      // Convert checkbox value to boolean
      isTransportable: req.body.isTransportable === "on" ? true : false,
    };

    const updatedAnimal = await Animal.findByIdAndUpdate(
      req.params.id,
      updatedValues,
      { new: true }
    );
    res.redirect(`/${updatedAnimal._id}/edit`);
  } catch (error) {
    res.status(500).send("Error updating animal details");
  }
};

// Handler to delete an animal
exports.deleteAnimal = async (req, res) => {
  try {
    await Animal.findByIdAndDelete(req.params.id);
    res.sendStatus(204); // No content response for successful deletion
  } catch (error) {
    console.error("Error deleting animal:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
