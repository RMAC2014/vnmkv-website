// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add welcome message on page load
window.addEventListener('load', function() {
    console.log('Welcome to Our College Website!');
    console.log('Thank you for visiting us.');
});

// Toggle mobile menu (if needed)
function toggleMenu() {
    const nav = document.querySelector('nav');
    if (nav.style.display === 'none') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

// Form validation example
function validateContactForm(event) {
    event.preventDefault();
    const email = document.querySelector('input[type="email"]');
    const message = document.querySelector('textarea');
    
    if (email.value === '' || message.value === '') {
        alert('Please fill out all fields');
        return false;
    }
    alert('Thank you for your message!');
    return true;
}