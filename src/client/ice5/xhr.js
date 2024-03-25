document.addEventListener('DOMContentLoaded', function () {

    const getXhrButton = document.getElementById("getXhr");

    console.log('getXhrButton:', getXhrButton);

    if (getXhrButton) {
        getXhrButton.addEventListener('click', (e) => {
            getXhr("./products.json");
        });
    } else {
        console.error("Could not find one or both of the buttons with IDs 'getXhr' and 'btnXhr'.");
    }

    function getXhr(resource_url) {
        let request = new XMLHttpRequest();

        request.onreadystatechange = function (event) {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    handleSuccess(JSON.parse(this.responseText));
                } else {
                    handleError(this);
                }
            }
        };

        request.open('GET', resource_url);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();
    }

    function getFetch(resource_url) {
        fetch(resource_url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(handleSuccess)
            .catch(handleError);
    }

    function handleSuccess(data) {
        const tableContainer = document.getElementById('xhr-table');
    
        // Check if data is iterable (array)
        if (Array.isArray(data)) {
            // Creating table element
            const table = document.createElement('table');
            table.classList.add('table');
    
            // Creating table header
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
    
            // Defining header columns
            const headerColumns = ['Name', 'Price'];
    
            headerColumns.forEach((columnText) => {
                const header = document.createElement('th');
                header.textContent = columnText;
                headerRow.appendChild(header);
            });
    
            thead.appendChild(headerRow);
            table.appendChild(thead);
    
            // Creating table body
            const tbody = document.createElement('tbody');
            for (const product of data) {
                const row = document.createElement('tr');
    
                // Creating cells for each column
                headerColumns.forEach((columnName) => {
                    const cell = document.createElement('td');
                    cell.textContent = product[columnName.toLowerCase()];
                    row.appendChild(cell);
                });
    
                tbody.appendChild(row);
            }
            table.appendChild(tbody);
    
            // Appending table to container
            tableContainer.innerHTML = '';
            tableContainer.appendChild(table);
        } else {
            console.error('Data is not iterable (not an array).');
        }
    }    

    function handleError(error) {
        console.error(error);
        // Handling error as needed
    }
});
