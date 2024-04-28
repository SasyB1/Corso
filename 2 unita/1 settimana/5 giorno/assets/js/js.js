/* NavBar Scroll */
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("header div");
  const buttonNavbar = document.querySelector("header div nav button");
  let scrollHeight = 250;
  if (window.scrollY > scrollHeight) {
    navbar.classList.add("navbarScroll");
    buttonNavbar.classList.add("navbarButtonScroll");
  } else {
    navbar.classList.remove("navbarScroll");
    buttonNavbar.classList.remove("navbarButtonScroll");
  }
});

/* navBar Logo  */
const refreshLogo = document.querySelector("header img");
refreshLogo.addEventListener("click", function () {
  location.reload();
});

/* Popup */
const popupFunction = function () {
  const popupContainer = document.createElement("div");
  popupContainer.id = "popupContainer";
  const popupWrapper = document.createElement("div");
  popupWrapper.id = "popupWrapper";
  const closeButton = document.createElement("button");
  closeButton.id = "closeButton";
  closeButton.classList.add("close-button");
  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fas", "fa-times");
  closeButton.appendChild(closeIcon);

  closeButton.addEventListener("click", function () {
    popupContainer.style.display = "none";
  });

  const p = document.createElement("p");
  p.textContent = "Join Medium.";
  const buttonGoogle = document.createElement("button");
  buttonGoogle.id = "buttonGoogle";
  buttonGoogle.textContent = " Sign up with Google";
  buttonGoogle.classList.add("fab", "fa-google");
  buttonGoogle.addEventListener("click", () => {
    window.open("https://www.google.com/", "_blank");
  });
  const buttonFacebook = document.createElement("button");
  buttonFacebook.id = "buttonFacebook";
  buttonFacebook.textContent = " Sign up with Facebook";
  buttonFacebook.classList.add("fab", "fa-facebook");
  buttonFacebook.addEventListener("click", () => {
    window.open("https://www.facebook.com/", "_blank");
  });
  const buttonEmail = document.createElement("button");
  buttonEmail.id = "buttonEmail";
  buttonEmail.textContent = " Sign up with  Email";
  buttonEmail.classList.add("fa-solid", "fa-envelope");
  buttonEmail.addEventListener("click", () => {
    window.open("https://mail.google.com/", "_blank");
  });
  popupWrapper.appendChild(closeButton);
  popupWrapper.appendChild(p);
  popupWrapper.appendChild(buttonGoogle);
  popupWrapper.appendChild(buttonFacebook);
  popupWrapper.appendChild(buttonEmail);
  popupContainer.appendChild(popupWrapper);
  popSpawn.appendChild(popupContainer);
};

/* navBar alert */
const navBarMenu = document.querySelector("header div nav");
const popSpawn = document.querySelector("#popSpawn");
navBarMenu.addEventListener("click", () => {
  if (window.innerWidth > 1200) {
    popupFunction();
  } else {
    alert("Registrati");
  }
});

/* button h1 */
const buttonH1 = document.querySelector("#spotlightContainer button");
buttonH1.addEventListener("click", () => {
  if (window.innerWidth > 1200) {
    popupFunction();
  } else {
    alert("Registrati");
  }
});

/* M */

document.addEventListener("DOMContentLoaded", function () {
  const mContainer = document.querySelector("svg > g ");
  const mWrapper = mContainer.querySelectorAll("[aria-label]");
  mWrapper.forEach((singleM) => {
    singleM.classList.add("mHidden");
  });
});

/* Article Top */
const articleTop1 = document.querySelector("#firstArticle");
articleTop1.addEventListener("click", () => {
  window.location.href =
    "https://medium.com/@x_TomCooper_x/ukraine-war-24-march-2023-5a13dd739a13";
});

const articleTop2 = document.querySelector("#secondArticle");
articleTop2.addEventListener("click", () => {
  window.location.href =
    "https://medium.com/entrepreneur-s-handbook/are-we-there-yet-bfa982ef9a7f";
});

const articleTop3 = document.querySelector("#thirdArticle");
articleTop3.addEventListener("click", () => {
  window.location.href =
    "https://medium.com/slackjaw/oh-so-no-one-liked-how-i-danced-at-gammys-funeral-a5a3e04344a0";
});

const articleTop4 = document.querySelector("#fourthArticle");
articleTop4.addEventListener("click", () => {
  window.location.href =
    "https://medium.com/the-riff/the-left-bankes-walk-away-ren%C3%A9e-was-set-in-brooklyn-d6f4ad86e658";
});

const articleTop5 = document.querySelector("#fifthArticle");
articleTop5.addEventListener("click", () => {
  window.location.href =
    "https://medium.com/towards-data-science/how-to-make-basic-visualizations-in-python-without-coding-f1da689d838e";
});

const articleTop6 = document.querySelector("#sixthArticle");
articleTop6.addEventListener("click", () => {
  window.location.href =
    "https://medium.com/javascript-in-plain-english/getting-started-with-the-javascript-url-object-e5de2ea67a92";
});

/* Aside */
const asideTopItems = document.querySelectorAll("#asideTop ul li");
asideTopItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth > 1200) {
      popupFunction();
    } else {
      alert("Registrati");
    }
  });
});
const asideBotItems = document.querySelectorAll("#navbarMiddle nav ul li");
asideBotItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth > 1200) {
      popupFunction();
    } else {
      alert("Registrati");
    }
  });
});

/* Article Bottom */
const articleBottom1 = document.querySelector("#seventhArticle");
articleBottom1.addEventListener("click", () => {
  window.location.href = "https://medium.com/p/a24c4f903b95";
});

const articleBottom2 = document.querySelector("#eighthArticle");
articleBottom2.addEventListener("click", () => {
  window.location.href =
    "https://medium.com/@taru-anniina/is-taylor-swift-allowed-to-speak-about-fat-90716696b311";
});

const articleBottom3 = document.querySelector("#ninthArticle");
articleBottom3.addEventListener("click", () => {
  window.location.href =
    "https://medium.com/@drpicox/dont-screw-up-you-will-be-found-guilty-95b673319f78";
});

const articleBottom4 = document.querySelector("#tenthArticle");
articleBottom4.addEventListener("click", () => {
  window.location.href =
    "https://medium.com/microsoft-design/leave-no-trace-12551b3d51b3";
});

const articleBottom5 = document.querySelector("#eleventhArticle");
articleBottom5.addEventListener("click", () => {
  window.location.href =
    "https://medium.com/better-humans/variability-not-repetition-is-the-key-to-mastery-68c33a3c7989";
});

const articleBottom6 = document.querySelector("#twelfhArticle");
articleBottom6.addEventListener("click", () => {
  window.location.href =
    "https://medium.com/human-parts/things-overheard-as-an-escape-room-actor-ace5eaf954a6";
});

const articleBottom7 = document.querySelector("#thirteenthArticle");
articleBottom7.addEventListener("click", () => {
  window.location.href =
    "https://medium.com/@kimmalonescott/6-steps-for-setting-measurable-goals-to-avoid-productivity-paranoia-e1e16da00546";
});

/* Footer */

const footerInfo = document.querySelectorAll("footer div ul li");
footerInfo.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth > 1200) {
      popupFunction();
    } else {
      alert("Registrati");
    }
  });
});

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
