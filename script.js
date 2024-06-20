
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll functionality for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function for form validation
    function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields.');
            return false;
        }
        return true;
    }

// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Change background image based on dark mode status
    if (document.body.classList.contains('dark-mode')) {
        document.body.style.backgroundImage = 'url("/assets/dark-bg-img.webp")'; 
    } else {
        document.body.style.backgroundImage = 'url("/assets/bg_mountain.jpg")'; 
    }
});

    // Example animation: Trigger animation on scroll
    const animateOnScroll = document.querySelectorAll('.animate-on-scroll');
    
    function animateElements() {
        animateOnScroll.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2; // Adjust as needed

            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    }

    // Initial check for elements in view
    animateElements();

    // Event listener for scroll to trigger animation
    window.addEventListener('scroll', animateElements);
});

// Smooth scroll functionality for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Detect when sections come into view and animate
    function animateOnScroll() {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2; // Adjust as needed

            if (sectionPosition < screenPosition) {
                section.classList.add('active');
            }
        });
    }

    // Initial check for elements in view
    animateOnScroll();

    // Event listener for scroll to trigger animations
    window.addEventListener('scroll', animateOnScroll);

$(document).ready(function() {
    // Enable Bootstrap 4 collapse functionality for accordion
    $('.collapse').collapse();
});

// Show or hide the Go to Top button based on scroll position
window.addEventListener('scroll', function() {
    const goToTopButton = document.getElementById('goToTop');
    if (window.scrollY > 300) { // Show button after scrolling down 300px
        goToTopButton.style.display = 'block';
        goToTopButton.style.opacity = '1';
    } else {
        goToTopButton.style.display = 'none';
        goToTopButton.style.opacity = '0';
    }
});

// Smooth scroll to top when the button is clicked
document.getElementById('goToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

// Go to Top Button
const goToTopButton = document.getElementById('goToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        goToTopButton.style.display = 'block';
    } else {
        goToTopButton.style.display = 'none';
    }
});

goToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Change background image based on dark mode status
    if (document.body.classList.contains('dark-mode')) {
        document.body.style.backgroundImage = 'url("https://www.flaticon.com/free-icons/light-mode")';
    } else {
        document.body.style.backgroundImage = 'url("https://www.flaticon.com/free-icons/dark")'; 
    }
});


});
