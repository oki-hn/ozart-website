//? Function for mobile button menu
const navLinks = document.getElementById('nav-links');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
    console.log("Function works!");

    navLinks.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !toggleBtn.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});