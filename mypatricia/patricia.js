var sideMenu = document.querySelector(".fa-bars");
var navLinks = document.querySelector(".nav_div");
var buttons = document.querySelector(".header_buttons")
var header = document.querySelector("header");


sideMenu.addEventListener("click", () => {
    header.classList.toggle("header");
    navLinks.classList.toggle("nav-div");
    navLinks.classList.toggle("nav_div");
    buttons.classList.toggle("header_buttons")
    buttons.classList.toggle("header-buttons")
 
});    