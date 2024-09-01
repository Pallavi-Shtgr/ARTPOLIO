function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect

const texts = [
    "ARTIST",
    "DESIGNER",
    "YOUTUBER"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter
document.getElementById('phone').addEventListener('input', function (e) {
    // Store the current value of the input
    let currentValue = this.value;

    // Check if the value contains non-numeric characters
    if (/[^0-9]/.test(currentValue)) {
        // Display an error message
        alert('Please enter only numbers.');

        // Remove non-numeric characters from the input
        this.value = currentValue.replace(/[^0-9]/g, '');
    }
});

function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
}

function cancel() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.remove('show');
}
function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
}

function cancel() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.remove('show');
}

// Optional: Close dropdown if clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown');
    const hamburg = document.querySelector('.hamburg');
    if (!dropdown.contains(event.target) && !hamburg.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});


    function hamburg() {
        document.querySelector('.dropdown').classList.toggle('show');
    }

    function cancel() {
        document.querySelector('.dropdown').classList.remove('show');
    }

    document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('.dropdown .links a');

        links.forEach(link => {
            link.addEventListener('click', () => {
                links.forEach(l => l.classList.remove('active')); // Remove active class from all links
                link.classList.add('active'); // Add active class to the clicked link
            });
        });
    });

    // script.js
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-container .link a');
    const dropdownLinks = document.querySelectorAll('.dropdown .links a');

    // Function to remove active class from all links
    function removeActiveClass() {
        links.forEach(link => link.classList.remove('active'));
        dropdownLinks.forEach(link => link.classList.remove('active'));
    }

    // Add event listener for desktop menu
    links.forEach(link => {
        link.addEventListener('click', function() {
            removeActiveClass();
            this.classList.add('active');
        });
    });

    // Add event listener for mobile menu (dropdown)
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function() {
            removeActiveClass();
            this.classList.add('active');
            // Optionally close the dropdown menu
            document.querySelector('.dropdown').classList.remove('show');
        });
    });

    // Handling the hamburger menu
    window.hamburg = function() {
        document.querySelector('.dropdown').classList.add('show');
    }

    // Handling the cancel button in dropdown
    window.cancel = function() {
        document.querySelector('.dropdown').classList.remove('show');
    }
});



