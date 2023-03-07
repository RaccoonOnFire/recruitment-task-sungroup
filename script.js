//hamburger menu script

const body = document.querySelector("body");
const headerMenu = document.querySelector(".header-menu");
const hamburgerBtn = document.querySelector(".hamburger-menu");
const aboutBtn = document.querySelector(".about-btn");
const blogBtn = document.querySelector(".blog-btn");
const contactBtn = document.querySelector(".contact-btn");
const bar1 = document.querySelector("#bar1");
const bar2 = document.querySelector("#bar2");
const bar3 = document.querySelector("#bar3");

const toggleMenu = () => {
    if (
        headerMenu &&
        hamburgerBtn &&
        blogBtn &&
        contactBtn &&
        aboutBtn &&
        bar1 &&
        bar2 &&
        bar3
    ) {
        if (window.innerWidth < 821) {
            body.classList.toggle("fixed-position");
            headerMenu.classList.toggle("show-menu");
            bar1.classList.toggle("bar1-animation");
            bar2.classList.toggle("bar2-animation");
            bar3.classList.toggle("bar3-animation");
        }
    }
};

hamburgerBtn.addEventListener("click", toggleMenu);
blogBtn.addEventListener("click", toggleMenu);
contactBtn.addEventListener("click", toggleMenu);
aboutBtn.addEventListener("click", toggleMenu);

//scroll script

const header = document.querySelector(".header");
let lastScrollY = window.scrollY;

const scrollHandler = () => {
    if (lastScrollY < window.scrollY) {
        header.classList.add("header-hidden");
    } else {
        header.classList.remove("header-hidden");
    }
    lastScrollY = window.scrollY;
};
window.addEventListener("scroll", scrollHandler);

//input label script

const fname = document.querySelector("#fname");
const fnameLabel = document.querySelector(".fname-label");
const sname = document.querySelector("#sname");
const snameLabel = document.querySelector(".sname-label");
const email = document.querySelector("#email");
const emailLabel = document.querySelector(".email-label");
const tel = document.querySelector("#tel");
const telLabel = document.querySelector(".tel-label");
const txt = document.querySelector("#txt");
const txtLabel = document.querySelector(".txt-label");
const fnameFunction = () => {
    fname.value.length > 0
        ? (fnameLabel.style.opacity = 1)
        : (fnameLabel.style.opacity = 0);
};
fname.addEventListener("keyup", fnameFunction);

const snameFunction = () => {
    sname.value.length > 0
        ? (snameLabel.style.opacity = 1)
        : (snameLabel.style.opacity = 0);
};
sname.addEventListener("keyup", snameFunction);

const emailFunction = () => {
    email.value.length > 0
        ? (emailLabel.style.opacity = 1)
        : (emailLabel.style.opacity = 0);
};
email.addEventListener("keyup", emailFunction);

const telFunction = () => {
    tel.value.length > 0
        ? (telLabel.style.opacity = 1)
        : (telLabel.style.opacity = 0);
};
tel.addEventListener("keyup", telFunction);

const txtFunction = () => {
    txt.value.length > 0
        ? (txtLabel.style.opacity = 1)
        : (txtLabel.style.opacity = 0);
};
txt.addEventListener("keyup", txtFunction);

const inputSubmitBtn = document.querySelector(".input-submit-btn");

//validate form script
const fnameError = document.querySelector(".fname-error");
const snameError = document.querySelector(".sname-error");
const emailError = document.querySelector(".email-error");
const telError = document.querySelector(".tel-error");
const txtError = document.querySelector(".txt-error");

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const telRegex =
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const validateForm = (event) => {
    if (fname.value.length > 0) {
        fname.classList.remove("input-error");
        fname.classList.add("input-filled");
        fnameError.style.opacity = 0;
    } else {
        fname.classList.add("input-error");
        fnameError.style.opacity = 1;
    }

    if (sname.value.length > 0) {
        sname.classList.remove("input-error");
        sname.classList.add("input-filled");
        snameError.style.opacity = 0;
    } else {
        sname.classList.add("input-error");
        snameError.style.opacity = 1;
    }

    if (email.value.match(emailRegex)) {
        email.classList.remove("input-error");
        email.classList.add("input-filled");
        emailError.style.opacity = 0;
    } else {
        email.classList.add("input-error");
        emailError.style.opacity = 1;
    }

    if (tel.value.match(telRegex)) {
        tel.classList.remove("input-error");
        tel.classList.add("input-filled");
        telError.style.opacity = 0;
    } else {
        tel.classList.add("input-error");
        telError.style.opacity = 1;
    }

    if (txt.value.length > 0) {
        txt.classList.remove("input-error");
        txt.classList.add("input-filled");
        txtError.style.opacity = 0;
    } else {
        txt.classList.add("input-error");
        txtError.style.opacity = 1;
    }
    event.preventDefault();
};

inputSubmitBtn.addEventListener("click", validateForm);

// testimonal slider script

const leftTestimonalBtn = document.querySelector(
    ".testimonals__slider-left-btn"
);
const rightTestimonalBtn = document.querySelector(
    ".testimonals__slider-right-btn"
);

const testimonalsArray = document.querySelectorAll(".testimonal");
let currentSlideID = 0;

const nextTestimonalSlide = () => {
    if (testimonalsArray) {
        currentSlideID += 1;
        if (currentSlideID == testimonalsArray.length) {
            currentSlideID = 0;
        }
        testimonalsArray.forEach((element) =>
            element.classList.add("testimonal--hidden")
        );
        testimonalsArray[currentSlideID].classList.remove("testimonal--hidden");
    }
};
const previousTestimonalSlide = () => {
    if (testimonalsArray) {
        currentSlideID -= 1;
        if (currentSlideID == -1) {
            currentSlideID = testimonalsArray.length - 1;
        }
        testimonalsArray.forEach((element) =>
            element.classList.add("testimonal--hidden")
        );
        testimonalsArray[currentSlideID].classList.remove("testimonal--hidden");
    }
};

rightTestimonalBtn.addEventListener("click", nextTestimonalSlide);
leftTestimonalBtn.addEventListener("click", previousTestimonalSlide);
