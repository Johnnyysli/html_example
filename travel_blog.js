document.addEventListener("DOMContentLoaded", function ( ) {
    const toggleButton = document.querySelector(".navbar .mobile-links-toggle");
    const mobileMenu = document.querySelector(".navbar .mobile-links-items");

    toggleButton.addEventListener("click", function() {
        mobileMenu.classList.toggle("active");
    });
});