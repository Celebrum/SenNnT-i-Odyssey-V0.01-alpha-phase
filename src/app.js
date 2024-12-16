document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            sections.forEach(section => {
                section.style.display = 'none';
            });

            targetSection.style.display = 'block';
        });
    });

    // Show the home section by default
    document.getElementById('home').style.display = 'block';
});
