document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector("nav");

    // Add scroll event listener
    window.addEventListener("scroll", function () {
        // Check the scroll position
        if (window.scrollY > 0) {
            // Add the 'no-shadow' class when scrolled
            navbar.classList.add("no-shadow");
        } else {
            // Remove the 'no-shadow' class when at the top
            navbar.classList.remove("no-shadow");
        }
    });
});





