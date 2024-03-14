let navbar = document.querySelector("header .nav-bar");
let navbarIcons = Array.from(document.querySelectorAll("header .nav-bar span > i"));
let navMenu = document.querySelector("header nav");
let copyrightYear = document.querySelector(".copyright span");

navbar.addEventListener("click", function() {
    navbarIcons.forEach((i) => {
        i.classList.toggle("active");
    })
    navMenu.classList.toggle("active");
})
navMenu.addEventListener("click", () => {
    navbarIcons.forEach((i) => {
        i.classList.toggle("active");
    })
    navMenu.classList.toggle("active");
});

Array.from(document.querySelectorAll(".boxes .box .img")).forEach((div) => {
    div.addEventListener("click", function() {
    window.open("https://www.facebook.com/merneith.eg", "_blank")
    })
});

copyrightYear.appendChild(document.createTextNode(new Date().getFullYear()));