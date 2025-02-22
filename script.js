// Initialize EmailJS
(function() {
    emailjs.init("uuSSWER-Oh7S4OsL6"); // Account Public Key
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading state
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;

    // Prepare the email parameters
    const templateParams = {
        from_name: this.querySelector('input[name="name"]').value,
        from_email: this.querySelector('input[name="email"]').value,
        subject: this.querySelector('input[name="subject"]').value,
        message: this.querySelector('textarea[name="message"]').value,
        to_email: 'saasindumaleesha000@gmail.com'
    };

    // Send the email
    emailjs.send('service_ojwalwb', 'template_r09bmvf', templateParams)
        .then(function() {
            // Show success message
            document.getElementById('success').style.display = 'block';
            document.getElementById('error').style.display = 'none';
            // Reset form
            document.getElementById('contact-form').reset();
        }, function(error) {
            // Show error message
            document.getElementById('success').style.display = 'none';
            document.getElementById('error').style.display = 'block';
            console.error('Email failed to send:', error);
        })
        .finally(function() {
            // Reset button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to top button functionality
const scrollBtn = document.querySelector('.scroll-btn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mobile menu functionality
const menuBtn = document.querySelector('.menu-btn');
const navBox = document.querySelector('.nav-box');

menuBtn.addEventListener('click', () => {
    navBox.style.display = navBox.style.display === 'flex' ? 'none' : 'flex';
});

// Handle resize events for mobile menu
window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
        navBox.style.display = 'flex';
    } else {
        navBox.style.display = 'none';
    }
});

// Scroll to contact section
function scrollToContact() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add intersection observer for animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-box, .portfolio-item').forEach(el => {
    observer.observe(el);
});
