//#region BUBBLING AND CAPTURING FUNCTIONS
// function to show the innerHTML of the element bound with the click event to this function
function showElement(e) {  
    console.log(e);
    // e.cancelBubble = true;                           // prevent the bubbling up through the elements with a click on the innermost element
    // e.stopPropagation();                             // prevents bubbling and capturing
    alert("Using 'e.target': " + e.target.innerHTML);  // event is the element that recieved the click
    // alert("Using 'this': " + this.innerHTML);          // this is the element that fired the event  
    // alert("This is only only link element node...or is it?")
  }

const single_values = document.querySelector('h1');
console.log(single_values);
single_values.innerText = 'new heading';
// single_values = document.querySelector('h2');



const multi_values = document.querySelectorAll('a');
console.log(multi_values)
multi_values.forEach(function(elem, key){
    console.log(elem);
    console.log(key);
    elem.innerHTML = 'element number' + (key=1)
})

const first_list = document.getElementById('list');
console.log(first_list);

comsole.log(first_list)

const new_li = document.createElement('li');
const new_a = document.createElement('a');

new_a.innerText = 'I added this randomly.';

new_li.append(new_a);
first_list.append(new_li);

