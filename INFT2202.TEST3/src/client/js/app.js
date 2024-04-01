/*
Name: Drashya Patel
Date: April 1st, 2024
Banner ID: 10086337
Course Code: INFT-2202-01
*/

/* 
 * This line should configure the submit handler for your form.
 * It should use the submitAnimalForm method below.
 */
// put your code here
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('createAnimalForm').addEventListener('submit', submitAnimalForm);
    
    /* 
    * This line should get the list of available animals, then render the table when the page loads.
    * It should use the getAnimals and renderAnimalTable methods below.
    */
   // put your code here
   getAnimals();
});

/* 
 * renderAnimalTable
 * This method should take an array of animals, and display a table of them.
 * If the array is empty, it should hide the table and instead show a message that there are currently no animals.
 * @param Animal[];
 * @return void
 */
function renderAnimalTable(arrayOfAnimals) {
    const table = document.getElementById('animalsTable');
    const body = table.getElementsByTagName('tbody')[0];
    const messageArea = document.getElementById('animalsMessageArea');
    if (arrayOfAnimals.length === 0) {
        messageArea.innerHTML = '<div class="alert alert-info">NO animals Found in records.</div>';
        table.style.display = 'none';
    } else {
        messageArea.innerHTML = ''; // Clearing the message area
        table.style.display = '';
        body.innerHTML = ''; // Clearing the present rows
        arrayOfAnimals.forEach(animal => {
            const row = `<tr>
                            <td>${animal.name}</td>
                            <td>${animal.heads}</td>
                            <td>${animal.legs}</td>
                            <td>${animal.sound}</td>
                         </tr>`;
            body.innerHTML += row;
        });
    }
}

/* 
 * submitAnimalForm
 * This method should be what gets called when your form is submitted.
 * It should utilize the fetch methods below.
 * It should hide or show an error message if there is a problem.
 * If it is successful, it should do something to update the list of animals.
 * @param event;
 * @return void
 */
async function submitAnimalForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const animal = Object.fromEntries(formData);
    try {
        const response = await postAnimal(animal);
        if (response.error) {
            throw new Error(response.error);
        }
        // If the animal is added successfully, refresh the table so it shows the correct data from the records.
        getAnimals();
        document.getElementById('createFormMessageArea').innerHTML = '<div class="alert alert-success">Animal added successfully!!!!!</div>';
    } catch (error) {
        // If adding the animal is unsuccessful, show an error in the form.
        document.getElementById('createFormMessageArea').innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
    }
}

/* 
 * postAnimal
 * This method should use fetch to post a new animal to the server.
 * It should only return a successful response from the server, or an object with an error message.
 * It should not modify the dom at all.
 * For full points, your fetch methods should utilize the URL, Headers, and Request classes.
 * @param event;
 * @return Animal | Error
 */
async function postAnimal(animal) {
    try {
        const response = await fetch('/api/animal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(animal)
        });
        if (!response.ok) {
            throw new Error('Failed to add the animal');
        }
        return await response.json();
    } catch (error) {
        return { error: error.message };
    }
}

/* 
 * getAnimal
 * This method should use fetch to get a list of animals from the server.
 * It should only return an array of animals, or an object with an error message.
 * It should not modify the dom at all.
 * For full points, your fetch methods should utilize the URL, Headers, and Request classes.
 * @param event | null;
 * @return Animal[] | Error
 */
async function getAnimals() {
    try {
        const response = await fetch('/api/animal   ');
        if (!response.ok) {
            throw new Error('Failed to retrieve animals');
        }
        const animals = await response.json();
        renderAnimalTable(animals);
    } catch (error) {
        document.getElementById('animalsMessageArea').innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
    }
}