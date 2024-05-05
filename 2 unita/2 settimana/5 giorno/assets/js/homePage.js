// ------------------- REFRESH LOGO ----------------------------
const refreshLogo = document.querySelector("header img");
refreshLogo.addEventListener("click", function () {
  location.reload();
});

// ------------------- NAV BAR ----------------------------

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

changeProfileNavigation.addEventListener("click", () => {
  window.location.href = "index.html";
});

// ------------------- CAROUSEL ----------------------------
const imgCar = document.querySelectorAll("img");

imgCar.forEach((img) => {
  img.addEventListener("mouseover", () => {
    const carouselInner = img.closest(".carousel-inner");
    carouselInner.classList.add("carusielVisible");
  });
});

imgCar.forEach((img) => {
  img.addEventListener("mouseout", () => {
    const carouselInner = img.closest(".carousel-inner");
    carouselInner.classList.remove("carusielVisible");
  });
});
