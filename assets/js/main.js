/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    console.log("toggle clicked");
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    console.log("close clicked");
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 10 of the viewport
  this.scrollY >= 10
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);
