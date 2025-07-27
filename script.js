console.log("JavaScript is running!");

const navLinks = document.querySelector('.nav-links');
const toggleMenu = document.querySelector('.nav-menu');

function toggleNav() {
    navLinks.classList.toggle('active');
}

document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !toggleMenu.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

toggleMenu.addEventListener('click', toggleNav);