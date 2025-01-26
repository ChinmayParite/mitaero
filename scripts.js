// Hamburger Menu Toggle
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Disable Right-Click
document.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // Prevent the context menu from appearing
    
});

// Disable Keyboard Shortcuts for DevTools
document.addEventListener("keydown", (event) => {
    // Disable F12 (DevTools)
    if (event.key === "F12") {
        event.preventDefault();
    }

    // Disable Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+U (View Source)
    if (
        (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J")) ||
        (event.ctrlKey && event.key === "U")
    ) {
        event.preventDefault();
    }

    // Disable Ctrl+S (Save) and Ctrl+P (Print)
    if (event.ctrlKey && (event.key === "S" || event.key === "P")) {
        event.preventDefault();
    }
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

document.addEventListener('contextmenu', (event) => event.preventDefault());

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

//home
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var nav = document.querySelector('nav');
        var homeSection = document.querySelector('.hero-section');
        var homeSectionBottom = homeSection.getBoundingClientRect().bottom;

        // Get the value of the CSS variable '--accent-color'
        var accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();

        if (homeSectionBottom <= 100) {
            nav.style.backgroundColor = accentColor;  // Apply accent color from the CSS variable
        } else {
            nav.style.backgroundColor = 'transparent';  // Set background to transparent
        }
    });
});


//funding
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var nav = document.querySelector('nav');
        var fundSection = document.querySelector('.fund');
        var fundSectionBottom = fundSection.getBoundingClientRect().bottom;

        // Get the value of the CSS variable '--accent-color'
        var accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();

        if (fundSectionBottom <= 100) {
            nav.style.backgroundColor = accentColor;  // Apply accent color from the CSS variable
        } else {
            nav.style.backgroundColor = 'transparent';  // Set background to transparent
        }
    });
});

//sponsors
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var nav = document.querySelector('nav');
        var sponsorsSection = document.querySelector('.sponsors');
        var sponsorsSectionBottom = sponsorsSection.getBoundingClientRect().bottom;

        // Get the value of the CSS variable '--accent-color'
        var accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();

        if (sponsorsSectionBottom <= 100) {
            nav.style.backgroundColor = accentColor;  // Apply accent color from the CSS variable
        } else {
            nav.style.backgroundColor = 'transparent';  // Set background to transparent
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('a[href="funding.html"]').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        window.location.href = 'funding.html'; // Navigate to crowdfunding.html
    });
});

// Select the Sponsors link and add an event listener
document.querySelector('a[href="sponsors.html"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior
    window.location.href = 'sponsors.html'; // Navigate to sponsors.html
});

// Select the Sponsors link and add an event listener
document.querySelector('a[href="index.html"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior
    window.location.href = 'index.html'; // Navigate to sponsors.html
});

// Select the Sponsors link and add an event listener
document.querySelector('a[href="achievements.html"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior
    window.location.href = 'achievements.html'; // Navigate to sponsors.html
});

// Select the Sponsors link and add an event listener
document.querySelector('a[href="team.html"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior
    window.location.href = 'team.html'; // Navigate to sponsors.html
});

// Select the Sponsors link and add an event listener
document.querySelector('a[href="aero-alumni.html"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior
    window.location.href = 'aero-alumni.html'; // Navigate to sponsors.html
});
