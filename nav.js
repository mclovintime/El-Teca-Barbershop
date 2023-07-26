// Toggle Mobile Navigation
const navbarMenu = document.querySelector("#navigation #navbar-menu");
const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");
const navbarLinks = navbarMenu.querySelectorAll("a");

hamburgerMenu.addEventListener('click', function() {
    navbarMenu.classList.toggle("open");
    hamburgerMenu.classList.toggle("clicked");
});

navbarLinks.forEach(function(navbarLink) {
    navbarLink.addEventListener('click', function() {
        // Close the navbarMenu and revert the hamburgerMenu state when a link is clicked
        navbarMenu.classList.remove("open");
        hamburgerMenu.classList.remove("clicked");
    });
});
