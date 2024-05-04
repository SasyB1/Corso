const btnReturn = document.querySelectorAll(".btnReturn");
btnReturn.forEach((e) => {
  e.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
