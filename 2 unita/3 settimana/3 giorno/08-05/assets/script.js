const generateList = function (arrayOfFilm) {
  const list = document.querySelector(".row");
  arrayOfFilm.forEach((singleCard) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("col");

    cardWrapper.innerHTML = `
        <div class="card  mb-3">
          <img src="${singleCard.img}" class="card-img-top " alt="Film">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${singleCard.title}</h5>
            <p class="card-text">${singleCard.category}</p>
            <p class="card-text">${singleCard.price}</p>
            <a href="#"  class="btn btn-primary discard">Scarta</a>
            <a href="#"  class="btn btn-primary buyNow mt-1">Compra ora</a>
          </div>
        </div>
      `;

    list.appendChild(cardWrapper);
  });
};

const getFilm = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("F");
      }
    })
    .then((arrayOfFilm) => {
      generateList(arrayOfFilm);
      buttonEventListener();
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};

getFilm();

const buttonEventListener = function () {
  const discardButtons = document.querySelectorAll(".discard");
  discardButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const cardDad = button.closest(".col");
      cardDad.remove();
    });
  });

  const addButtonFunctionalityToClonedButtons = () => {
    const buttonFirstClones = document.querySelectorAll(
      ".offcanvas-body .discard"
    );
    buttonFirstClones.forEach((button) => {
      button.classList.add("hidden");
    });

    const buttonSecondClones = document.querySelectorAll(
      ".offcanvas-body .buyNow"
    );
    buttonSecondClones.forEach((button2) => {
      button2.innerText = "Rimuovi dal carrello";
      button2.addEventListener("click", () => {
        const cardCloneDad = button2.closest(".card");
        cardCloneDad.remove();
      });
    });
  };

  const buyButtons = document.querySelectorAll(".buyNow");
  buyButtons.forEach((buyButton) => {
    buyButton.addEventListener("click", (event) => {
      const cardDaddy = event.currentTarget.closest(".card");
      const cloneCard = cardDaddy.cloneNode(true);
      document.querySelector(".offcanvas-body").appendChild(cloneCard);
      addButtonFunctionalityToClonedButtons();
    });
  });
};
