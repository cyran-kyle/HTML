// Navbar toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('.primary-navbar ul');

    if (hamburger && navUl) {
        function toggleNav() {
            const open = navUl.classList.toggle('show');
            hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
        }

        hamburger.addEventListener('click', toggleNav);
        // keyboard access (Enter / Space)
        hamburger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleNav();
            }
        });

        // close menu when a nav link is clicked
        navUl.addEventListener('click', function(event) {
            if (event.target.tagName === 'A') {
                navUl.classList.remove('show');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }
});