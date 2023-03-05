//hamburger menu

const hamburgerBtn = document.querySelector(".hamburger-menu")
const headerMenu = document.querySelector(".header-menu")
const bar1 = document.querySelector("#bar1")
const bar2 = document.querySelector("#bar2")
const bar3 = document.querySelector("#bar3")

const toggleMenu = () => {
    headerMenu.classList.toggle("show-menu")
    bar1.classList.toggle("bar1-animation")
    bar2.classList.toggle("bar2-animation")
    bar3.classList.toggle("bar3-animation")
}

hamburgerBtn.addEventListener("click", toggleMenu)



