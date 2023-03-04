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

//contact form
/*
const fname = document.querySelector("#fname")
const fnameLabel = document.querySelector(".label-fname")
const sname = document.querySelector("#sname")
const snameLabel = document.querySelector(".label")
const email = document.querySelector("#email")
const tel = document.querySelector("#tel")
const txt = document.querySelector("#txt")

const labelChange = () => {
    if(fname.value != "") {
        fnameLabel.classList.add("visible")
    }
    else {
        fnameLabel.classList.remove("visible")
    }
}

fname.addEventListener("keydown", labelChange)*/


