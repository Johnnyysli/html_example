document.addEventListener('DOMContentLoaded', function(){
    const toggleButton = this.documentElement('.navbar .mobile-menu-toggle');
    const mobileMenu =document.querySelector(".navbar .mobile-menu-items");

    toggleButton.addEventListener("click", function(){
        mobileMenu.classList.toggle("active");
    });
});