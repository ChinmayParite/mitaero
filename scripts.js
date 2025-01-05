// Hamburger Menu Toggle
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

//document.addEventListener('contextmenu', (event) => event.preventDefault());

document.addEventListener('keydown', (event) => {
    if (
        event.key === 'F12' || // Block F12
        (event.ctrlKey && event.shiftKey && event.key === 'I') || // Block Ctrl+Shift+I
        (event.ctrlKey && event.key === 'U') // Block Ctrl+U (View Source)
    ) {
        event.preventDefault();
    }
});

const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', () => {
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
});
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var homeSection = document.querySelector('.hero-section');
    var homeSectionBottom = homeSection.getBoundingClientRect().bottom;

    // Add blur effect to navbar when the user scrolls past the hero section
    if (homeSectionBottom <= 0) {
        nav.style.backdropFilter = 'blur(10px)'; // Apply blur when scrolling past the hero section
    } else {
        nav.style.backdropFilter = 'none'; // Remove blur when in the hero section
    }
});
