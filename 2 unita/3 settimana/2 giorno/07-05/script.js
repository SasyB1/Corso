const formTag = document.getElementsByTagName("form")[0];
const inputText = document.querySelector(".form-control");
const titleForm = document.querySelector(".titleForm");
const buttonSave = document.querySelector(".border-success");
const buttonDelete = document.querySelector(".border-danger");

formTag.addEventListener("submit", (e) => {
  e.preventDefault();
});

buttonSave.addEventListener("click", () => {
  const inputValue = inputText.value;
  localStorage.setItem("nomeUtente", inputValue);
  titleForm.innerHTML = inputValue;
  inputText.value = "";
});

buttonDelete.addEventListener("click", () => {
  localStorage.removeItem("nomeUtente");
  titleForm.innerHTML = "Registrati";
  inputText.value = "";
});

const counterElement = document.querySelector("#counter");
let counter = parseInt(sessionStorage.getItem("counter")) || 0;

const timerInterval = setInterval(() => {
  counter++;
  counterElement.innerText = counter;
  sessionStorage.setItem("counter", counter);
}, 1000);
