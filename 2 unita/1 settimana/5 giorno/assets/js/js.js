/* NavBar */
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("header div");
  const buttonNavbar = document.querySelector("header div nav button");
  let scrollHeight = 300;
  if (window.scrollY > scrollHeight) {
    navbar.classList.add("navbarScroll");
    buttonNavbar.classList.add("navbarButtonScroll");
  } else {
    navbar.classList.remove("navbarScroll");
    buttonNavbar.classList.remove("navbarButtonScroll");
  }
});

/* Footer Button */
const appStoreButton = document.getElementById("appStoreButton");
appStoreButton.addEventListener("click", () => {
  window.location.href =
    "https://apps.apple.com/us/app/medium-read-write-stories/id828256236?ct=&pt=698524";
});

const googlePlayButton = document.getElementById("googlePlayButton");
googlePlayButton.addEventListener("click", () => {
  window.location.href =
    "https://play.google.com/store/apps/details?id=com.medium.reader&pli=1";
});
