let navbar = document.querySelector("header .nav-bar");
let navbarIcons = Array.from(document.querySelectorAll("header .nav-bar span > i"));
let navMenu = document.querySelector("header nav");
let headerLinks = Array.from(document.querySelectorAll("header nav .links > li > a"));
let landingImgsContainer = document.querySelector(".landing-imgs");
let firstImg = document.querySelector(".landing-imgs > div > img");
let landingImgs = document.querySelectorAll(".landing-imgs > img");
let slidesCount = landingImgs.length;
let activeSlide = 0;
let contactBtn = document.querySelector('#contact-us button');

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
})

headerLinks.forEach((link) => {
    link.addEventListener("click", function() {
        headerLinks.forEach((ele) => {
            ele.classList.remove("active");
        });
        this.classList.add("active");
    })
});

setTimeout(() => {
    firstImg.style.opacity = 0;
}, 2000);

let landingSlideshow = setInterval(() => {
    landingImgs[activeSlide].classList.remove("active");
    activeSlide++;
    if (activeSlide === slidesCount) {
        activeSlide = 0;
    }
    landingImgs[activeSlide].classList.add("active");
}, 2000);

contactBtn.onclick = function () {
    window.open("https://www.facebook.com/merneith.eg", "_blank")
}

let scrollBtn = document.createElement("span");
scrollBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';

window.onscroll = function () {
    if (this.scrollY >= 600) {
        document.querySelector(".main-container").appendChild(scrollBtn)
    } else {
        scrollBtn.remove();
    }
}

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
    headerLinks.forEach((e) => {
        e.classList.remove("active");
        headerLinks[0].classList.add("active");
    })
})