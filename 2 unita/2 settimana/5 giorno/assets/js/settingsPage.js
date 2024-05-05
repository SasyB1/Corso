const navbarNav = document.querySelectorAll(".navbar-nav li a");

navbarNav.forEach((navGenere) => {
  navGenere.addEventListener("mouseover", () => {
    navGenere.classList.add("navFocus");
  });
});
navbarNav.forEach((navGenere) => {
  navGenere.addEventListener("mouseout", () => {
    navGenere.classList.remove("navFocus");
  });
});

const searchIcon = document.querySelector(".bi.bi-search");
const searchInput = document.querySelector(".bi.bi-search input");

searchIcon.addEventListener("click", () => {
  searchInput.classList.add("navSearch");
});

const homepageOptions = document.querySelector(
  ".dropdown-menu.bg-netflixSecond"
);
const profileNavigation = homepageOptions.querySelector("li:first-child");
const settingsNavigation = homepageOptions.querySelector("li:nth-child(2)");
const changeProfileNavigation =
  homepageOptions.querySelector("li:nth-child(3)");

profileNavigation.addEventListener("click", () => {
  window.location.href = "modificaProfilo.html";
});
settingsNavigation.addEventListener("click", () => {
  window.location.href = "settingsPage.html";
});
changeProfileNavigation.addEventListener("click", () => {
  window.location.href = "index.html";
});

const imgDinamicModifyProfile = document.querySelectorAll(
  ".profileImageHomepage"
);
document.addEventListener("DOMContentLoaded", function () {
  imgDinamicModifyProfile.forEach((img) => {
    const imgSrc = localStorage.getItem("imgDinamicProfil");
    img.setAttribute("src", imgSrc);
  });
});

const kidInterface = document.querySelector(".kidsInterface");
kidInterface.addEventListener("click", () => {
  imgDinamicModifyProfile.forEach((img) => {
    img.setAttribute("src", "./assets/image/kids_icon.png");
  });
});

const footerButton = document.querySelector("footer button");
footerButton.addEventListener("click", () => {
  window.location.href = "homePage.html";
});
