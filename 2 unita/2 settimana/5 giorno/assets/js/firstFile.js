const cardAccounts = document.getElementsByClassName("cardAccount");
const imgAccounts = document.getElementsByClassName("imgAccount");
const titleAccounts = document.getElementsByClassName("titleAccount");

Array.from(cardAccounts).forEach((element, i) => {
  element.addEventListener("mouseover", () => {
    imgAccounts[i].classList.add("borderImageAccount");
    titleAccounts[i].classList.add("colorTitleAccount");
  });
});

Array.from(cardAccounts).forEach((element, i) => {
  element.addEventListener("mouseout", () => {
    imgAccounts[i].classList.remove("borderImageAccount");
    titleAccounts[i].classList.remove("colorTitleAccount");
  });
});

let addedIcons = true;

const buttonFirstPage = document.querySelector(".buttonFirstPage");
const buttonEdit = document.querySelectorAll(".buttonEdit");

buttonFirstPage.addEventListener("click", function () {
  if (addedIcons) {
    buttonEdit.forEach((button) => {
      const imageEdit = document.createElement("i");
      imageEdit.classList.add("bi", "bi-pencil", "editFirstImage");
      button.appendChild(imageEdit);
    });
    addedIcons = false;
  } else {
    const editIcons = document.querySelectorAll(".editFirstImage");
    editIcons.forEach((icon) => {
      icon.remove();
    });
    addedIcons = true;
  }
});
