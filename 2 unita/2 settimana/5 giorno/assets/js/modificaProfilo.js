const btnReturn = document.querySelectorAll(".btnReturn");
btnReturn.forEach((e) => {
  e.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const imgSrc = localStorage.getItem("imgDinamicProfil");
  const imgDinamicModifyProfile = document.querySelector(".imgAccount");
  imgDinamicModifyProfile.setAttribute("src", imgSrc);
});
