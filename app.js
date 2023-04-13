const btnMenuOpen = document.querySelector(".icone-menu");
const btnMenuClose = document.querySelector(".icone-menu-close");
const menuMobile = document.querySelector(".menu");
const body = document.querySelector(".background-cover");

btnMenuOpen.addEventListener("click", () => {
    menuMobile.classList.toggle("active")
    body.classList.toggle("active")
})

btnMenuClose.addEventListener("click", () => {
    menuMobile.classList.toggle("active")
    body.classList.toggle("active")
})