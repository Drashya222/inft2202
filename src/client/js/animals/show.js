import AnimalService from './animal.service.js';

async function fetchAndRenderAnimal(animalName) {
    try {
        const animalData = await AnimalService.getAnimal(animalName);
        renderAnimalTable([animalData]);
    } catch (error) {
        console.error("Failed to fetch animal data", error);
    }
}

function renderAnimalTable(animals) {
    const table = document.getElementById('animal-client-table');
    table.innerHTML = '';
    const tbody = document.createElement('tbody');
    animals.forEach(animal => {
        const row = tbody.insertRow();
        const cellName = row.insertCell(0);
        const cellLegs = row.insertCell(1);
        const cellHeads = row.insertCell(2);
        const cellSound = row.insertCell(3);

        cellName.textContent = animal.name;
        cellLegs.textContent = animal.legs + ' legs';
        cellHeads.textContent = animal.heads + ' heads';
        cellSound.textContent = animal.sound;
    });
    table.appendChild(tbody);
}

// Assuming the animal name can be extracted from the URL
const animalName = window.location.pathname.split("/").pop();
fetchAndRenderAnimal(animalName);
