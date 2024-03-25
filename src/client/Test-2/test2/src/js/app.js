(function() {
    
    // Question 0
    // Use npm to install jquery and holder.js
    // Add a reference to jquery and holder.js in your index.html in the appropriate spot
    
    // Complete all steps using jquery.
    // Changes to index.html should not be necessary unless specifically mentioned

    // Question 1
    $(document).ready(function() {
        // Update page and navbar title
        // Update the page title to say "YOUR NAME - Test 2"
        $('title').text('Drashya Patel - Test 2');
        // Update the navbar title to say "YOUR NAME"
        $('.navbar-brand').text('Drashya Patel');
        // Update footer text
        // Replace the footer text with a copyright symbol and the year, using the Date object.
        $('.footer').html(`<span class="text-muted">&copy; ${new Date().getFullYear()}</span>`);
      });
      

    // Question 2
    $(document).ready(function() {
        // get a reference to the test table
        let secondRow = $('#test-table tbody tr').eq(1);
        // get a reference to the second row in the table
        // update the student number to be 100100100
        secondRow.find('td').eq(2).text('100100100');
      });
      

    // Question 3
    $(document).ready(function() {
        // create a table row with your own information
        let newRow = $('<tr>').addClass('table-info');
        // create a table delimeter and set your first name
        // add it to your table row
        newRow.append($('<td>').text('Drashya'));
        // create a table delimeter and set your last name
        // add it to your table row
        newRow.append($('<td>').text('Patel'));
        // create a table delimeter and set your banner id
        // add it to your table row
        newRow.append($('<td>').text('100863337'));
        // add your row to the test table body
        $('#test-table tbody').append(newRow);
      });
      

    // Question 4
    $(document).ready(function() {
        // remove Alice Bobberts from the table
        $('#test-table tbody tr').eq(2).remove();
      });
      

    // Question 5
    // add the .table-info class to your personal row

    // Question 6
    $(document).ready(function() {
        $('#test-table tbody tr').eq(0).removeClass('table-warning');
      });
    // remove the .table-warning class from Adam Kunz's row

    // Question 7
    $(document).ready(function() {
        // change .table-dark to .table-success for John Doe's row
        $('#test-table tbody tr').eq(1).removeClass('table-dark').addClass('table-success');
      });      

    // Question 8
    $(document).ready(function() {
        // Go to https://getbootstrap.com/docs/5.3/components/card/
        // Using jquery, add a new container div to the <main> section
        let mainContainer = $('<div>').addClass('container');
        // In that container, add a new bootstrap card. This should take several steps.
        // make a card, make an image, append the image to the card
        let card = $('<div>').addClass('card');
        let img = $('<img>').addClass('card-img-top').attr('data-src', 'holder.js/100px250?&text=Example');

        card.append(img);
      
        // make a card body, append it to the card
        let cardBody = $('<div>').addClass('card-body');
        // make a heading, a paragraph, a link, append them to the card-body
        // add a heading with your name in the card body, and a sentence or two about yourself.
        cardBody.append($('<h5>').addClass('card-title').text('Drashya Patel'));
        cardBody.append($('<p>').addClass('card-text').text('Hello, my name is Drashya and I am from India. I came to Canada for my higher studies, looking for an opportunity in the computer science field.'));
        cardBody.append($('<a>').addClass('btn btn-primary').attr({
            href: 'https://in.pinterest.com/pin/753297475146805059/',
            target: '_blank'}).text('Meme!!!!'));
        // append the card to the new container
        card.append(cardBody);
        mainContainer.append(card);
        $('main').append(mainContainer);
      
        // use holder.js to render the image in the card
        Holder.run();
      });
})();
