// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    };

    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Toggle Dark Mode';
    darkModeButton.classList.add('dark-mode-toggle');
    document.body.appendChild(darkModeButton);

    darkModeButton.addEventListener('click', toggleDarkMode);

    // Persist Dark Mode State
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animate Projects on Scroll
    const projects = document.querySelectorAll('.project');
    const revealProjects = () => {
        const triggerBottom = window.innerHeight * 0.9;
        projects.forEach(project => {
            const projectTop = project.getBoundingClientRect().top;
            if (projectTop < triggerBottom) {
                project.classList.add('visible');
            } else {
                project.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', revealProjects);
    revealProjects();

    // Form Submission Message
    const form = document.querySelector('form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        alert('Your message has been sent! Thank you.');
        form.reset();
    });

    // Project Modal Viewer

});
