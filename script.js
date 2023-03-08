//hamburger menu script

const body = document.querySelector("body");
const headerMenuContainer = document.querySelector(".header__menu-container");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const headerMenuAboutBtn = document.querySelector(".header__menu-about-btn");
const headerMenuBlogBtn = document.querySelector(".header__menu-blog-btn");
const headerMenuContactBtn = document.querySelector(".header__menu-contact-btn");
const hamburgerMenuBar1 = document.querySelector("#hamburger-menu__bar1");
const hamburgerMenuBar2 = document.querySelector("#hamburger-menu__bar2");
const hamburgerMenuBar3 = document.querySelector("#hamburger-menu__bar3");

const toggleMenu = () => {
    if (
        headerMenuContainer &&
        hamburgerMenu &&
        headerMenuBlogBtn &&
        headerMenuContactBtn &&
        headerMenuAboutBtn &&
        hamburgerMenuBar1 &&
        hamburgerMenuBar2 &&
        hamburgerMenuBar3
    ) {
        if (window.innerWidth < 821) {
            body.classList.toggle("hidden-overlow");
            headerMenuContainer.classList.toggle("header__menu--show-menu");
            hamburgerMenuBar1.classList.toggle("hamburger-menu__bar1-animation");
            hamburgerMenuBar2.classList.toggle("hamburger-menu__bar2-animation");
            hamburgerMenuBar3.classList.toggle("hamburger-menu__bar3-animation");
        }
    }
};

hamburgerMenu.addEventListener("click", toggleMenu);
headerMenuBlogBtn.addEventListener("click", toggleMenu);
headerMenuContactBtn.addEventListener("click", toggleMenu);
headerMenuAboutBtn.addEventListener("click", toggleMenu);

//scroll script

const header = document.querySelector(".header");
let lastScrollY = window.scrollY;

const scrollHandler = () => {
    if (lastScrollY < window.scrollY) {
        header.classList.add("header--hidden");
    } else {
        header.classList.remove("header--hidden");
    }
    lastScrollY = window.scrollY;
};
window.addEventListener("scroll", scrollHandler);

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

//input label script

const firstNameInput = document.querySelector("#first-name-input");
const firstNameLabel = document.querySelector(".first-name-label");
const secondNameInput = document.querySelector("#second-name-input");
const secondNameLabel = document.querySelector(".second-name-label");
const emailInput = document.querySelector("#email-input");
const emailLabel = document.querySelector(".email-label");
const telInput = document.querySelector("#tel-input");
const telLabel = document.querySelector(".tel-label");
const textInput = document.querySelector("#txt-input");
const textLabel = document.querySelector(".txt-label");
const fnameFunction = () => {
    firstNameInput.value.length > 0
        ? (firstNameLabel.style.opacity = 1)
        : (firstNameLabel.style.opacity = 0);
};
firstNameInput.addEventListener("keyup", fnameFunction);

const snameFunction = () => {
    secondNameInput.value.length > 0
        ? (secondNameLabel.style.opacity = 1)
        : (secondNameLabel.style.opacity = 0);
};
secondNameInput.addEventListener("keyup", snameFunction);

const emailFunction = () => {
    emailInput.value.length > 0
        ? (emailLabel.style.opacity = 1)
        : (emailLabel.style.opacity = 0);
};
emailInput.addEventListener("keyup", emailFunction);

const telFunction = () => {
    telInput.value.length > 0
        ? (telLabel.style.opacity = 1)
        : (telLabel.style.opacity = 0);
};
telInput.addEventListener("keyup", telFunction);

const txtFunction = () => {
    textInput.value.length > 0
        ? (textLabel.style.opacity = 1)
        : (textLabel.style.opacity = 0);
};
textInput.addEventListener("keyup", txtFunction);

const inputSubmitBtn = document.querySelector(".input-submit-btn");

//validate form script
const firstNameInputError = document.querySelector(".input__first-name-error");
const secondNameInputError = document.querySelector(".input__second-name-error");
const emailInputError = document.querySelector(".input__email-error");
const telInputError = document.querySelector(".input__tel-error");
const textInputError = document.querySelector(".input__text-error");

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const telRegex =
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const validateForm = (event) => {
    if (firstNameInput.value.length > 0) {
        firstNameInput.classList.remove("input--error");
        firstNameInput.classList.add("input--filled");
        firstNameInputError.style.opacity = 0;
    } else {
        firstNameInput.classList.add("input--error");
        firstNameInputError.style.opacity = 1;
    }

    if (secondNameInput.value.length > 0) {
        secondNameInput.classList.remove("input--error");
        secondNameInput.classList.add("input--filled");
        secondNameInputError.style.opacity = 0;
    } else {
        secondNameInput.classList.add("input--error");
        secondNameInputError.style.opacity = 1;
    }

    if (emailInput.value.match(emailRegex)) {
        emailInput.classList.remove("input--error");
        emailInput.classList.add("input--filled");
        emailInputError.style.opacity = 0;
    } else {
        emailInput.classList.add("input--error");
        emailInputError.style.opacity = 1;
    }

    if (telInput.value.match(telRegex)) {
        telInput.classList.remove("input--error");
        telInput.classList.add("input--filled");
        telInputError.style.opacity = 0;
    } else {
        telInput.classList.add("input--error");
        telInputError.style.opacity = 1;
    }

    if (textInput.value.length > 0) {
        textInput.classList.remove("input--error");
        textInput.classList.add("input--filled");
        textInputError.style.opacity = 0;
    } else {
        textInput.classList.add("input--error");
        textInputError.style.opacity = 1;
    }
    event.preventDefault();
};

inputSubmitBtn.addEventListener("click", validateForm);

