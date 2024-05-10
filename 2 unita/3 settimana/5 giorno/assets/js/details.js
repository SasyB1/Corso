const addressBarContent = new URLSearchParams(location.search);
const eventId = addressBarContent.get("eventId");

const nameCard = document.getElementById("name");
const description = document.getElementById("description");
const brand = document.getElementById("brand");
const image = document.getElementById("image");
const price = document.getElementById("price");

const titleModal = document.getElementById("staticBackdropLabel");
const nameModal = document.getElementById("nameModal");
const descriptionModal = document.getElementById("descriptionModal");
const brandModal = document.getElementById("brandModal");
const imageModal = document.getElementById("imageModal");
const priceModal = document.getElementById("priceModal");

const getItemCard = function () {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${eventId}`, {
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZDljNjgxODQ0MjAwMTUzNzU4ODciLCJpYXQiOjE3MTUzMjk0NzksImV4cCI6MTcxNjUzOTA3OX0.z8Ow7jf05FzzZ5mzi85or2BSWaJBlPZWckU0a-e8JCM",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel recupero dei dettagli dell'evento");
      }
    })
    .then((card) => {
      nameCard.innerText = card.name;
      description.innerText = card.description;
      brand.innerText = card.brand;
      image.src = card.imageUrl;
      price.innerText = card.price + "€";
      description.classList.remove("cardDescription");
      modalLife(card);
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};

getItemCard();

const modalLife = function (card) {
  titleModal.value = card.name;
  nameModal.value = card.name;
  descriptionModal.value = card.description;
  brandModal.value = card.brand;
  imageModal.value = card.imageUrl;
  priceModal.value = card.price;
};

const modifyCard = function () {
  const updatedCard = {
    name: nameModal.value,
    description: descriptionModal.value,
    brand: brandModal.value,
    imageUrl: imageModal.value,
    price: priceModal.value,
  };

  if (
    !updatedCard.name ||
    !updatedCard.description ||
    !updatedCard.brand ||
    !updatedCard.imageUrl ||
    !updatedCard.price
  ) {
    alert("Per favore, completa tutti i campi prima di modificare la carta.");
    return;
  }

  fetch(`https://striveschool-api.herokuapp.com/api/product/${eventId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZDljNjgxODQ0MjAwMTUzNzU4ODciLCJpYXQiOjE3MTUzMjk0NzksImV4cCI6MTcxNjUzOTA3OX0.z8Ow7jf05FzzZ5mzi85or2BSWaJBlPZWckU0a-e8JCM",
    },
    body: JSON.stringify(updatedCard),
  })
    .then((response) => {
      if (response.ok) {
        if (confirm("Sei sicuro di voler modificare questa card?")) {
          nameCard.innerText = updatedCard.name;
          description.innerText = updatedCard.description;
          brand.innerText = updatedCard.brand;
          image.src = updatedCard.imageUrl;
          price.innerText = updatedCard.price + "€";
          alert("Card modificata con successo");
          location.assign("index.html");
        }
      } else {
        alert("ERRORE - Modifica della card non riuscita");
      }
    })
    .catch((err) => {
      console.log("ERR", err);
    });
};

const buttonModify = document
  .getElementById("buttonModify")
  .addEventListener("click", modifyCard);

const resetCard = function () {
  if (confirm("Sei sicuro di voler resettare la carta?")) {
    nameModal.value = "";
    descriptionModal.value = "";
    brandModal.value = "";
    imageModal.value = "";
    priceModal.value = "";
  }
};

const buttonReset = document
  .getElementById("buttonReset")
  .addEventListener("click", resetCard);

const deleteCard = function () {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${eventId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZDljNjgxODQ0MjAwMTUzNzU4ODciLCJpYXQiOjE3MTUzMjk0NzksImV4cCI6MTcxNjUzOTA3OX0.z8Ow7jf05FzzZ5mzi85or2BSWaJBlPZWckU0a-e8JCM",
    },
  })
    .then((response) => {
      if (response.ok) {
        if (confirm("Sei sicuro di voler eliminare questa card?")) {
          location.assign("index.html");
        }
      } else {
        alert("ERRORE - Card non eliminata");
      }
    })
    .catch((err) => {
      console.log("ERR", err);
    });
};

const buttonDelete = document
  .getElementById("buttonDelete")
  .addEventListener("click", deleteCard);
