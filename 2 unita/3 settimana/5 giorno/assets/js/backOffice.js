document.getElementById("year").innerText = new Date().getFullYear();
class Product {
  constructor(_name, _description, _brand, _image, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imageUrl = _image;
    this.price = _price;
  }
}

const submitEvent = function (e) {
  e.preventDefault();
  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("description");
  const brandInput = document.getElementById("brand");
  const imageInput = document.getElementById("image");
  const priceInput = document.getElementById("price");

  const cardFromForm = new Product(
    nameInput.value,
    descriptionInput.value,
    brandInput.value,
    imageInput.value,
    parseFloat(priceInput.value)
  );

  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    body: JSON.stringify(cardFromForm),
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZDljNjgxODQ0MjAwMTUzNzU4ODciLCJpYXQiOjE3MTUzMjk0NzksImV4cCI6MTcxNjUzOTA3OX0.z8Ow7jf05FzzZ5mzi85or2BSWaJBlPZWckU0a-e8JCM",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Prodotto creato");
        location.assign("index.html");
      } else {
        throw new Error("Errore nel salvataggio della risorsa");
      }
    })
    .catch((err) => {
      console.log("ERRORE", err);
      alert(err);
    });
};

document.getElementById("event-form").addEventListener("submit", submitEvent);
