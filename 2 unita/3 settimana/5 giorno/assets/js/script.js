const generateCards = function (cardsArray) {
  const row = document.getElementById("events-row");
  cardsArray.forEach((card) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    newCol.innerHTML = `
    <div class="card h-100 d-flex flex-column rounded-5 text-center ">
    <img src="${card.imageUrl}" class="card-img-top" alt="Phone img">
        <div class="card-body d-flex flex-column justify-content-around">
          <h5 class="card-title">${card.name}</h5>
          <p class="card-text cardDescription" >${card.description}</p>
          <p class="card-text">${card.brand}</p>
          <p class="card-text">${card.price} €</p>
          <div class="d-flex justify-content-between m-auto">           
            <a href="details.html?eventId=${card._id}" class="btn btnColor">INFO</a>
          </div>
        </div>
      </div>
    `;
    row.appendChild(newCol);
  });
};

const spinnerWrapper = document.querySelector(".spinnerWrapper");

const getEvents = function () {
  spinnerWrapper.classList.add("spinnerShow");
  setTimeout(() => {
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
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
          switch (response.status) {
            case 400:
              throw new Error("Richiesta non valida");
              break;
            case 401:
              throw new Error("Non autorizzato");
              break;
            case 402:
              throw new Error("Pagamento richiesto");
              break;
            case 403:
              throw new Error("Accesso vietato");
              break;
            case 404:
              throw new Error("La risorsa richiesta non è stata trovata");
              break;
            case 405:
              throw new Error("Metodo non consentito");
              break;
            case 406:
              throw new Error("Non accettabile");
              break;
            case 407:
              throw new Error("Autenticazione del proxy richiesta");
              break;
            case 408:
              throw new Error("Timeout della richiesta");
              break;
            case 409:
              throw new Error("Conflitto");
              break;
            case 410:
              throw new Error("La risorsa non è più disponibile");
              break;
            case 411:
              throw new Error("È necessaria la lunghezza del contenuto");
              break;
            case 412:
              throw new Error("Precondizione fallita");
              break;
            case 413:
              throw new Error("Entità troppo grande");
              break;
            case 414:
              throw new Error("URI troppo lungo");
              break;
            case 415:
              throw new Error("Tipo di media non supportato");
              break;
            case 416:
              throw new Error("Intervallo di richiesta non soddisfacibile");
              break;
            case 417:
              throw new Error("Aspettativa fallita");
              break;
            case 418:
              throw new Error("Mi sono fatto prendere troppo sul serio");
              break;
            case 421:
              throw new Error("Destinatario non disponibile");
              break;
            case 422:
              throw new Error("Entità non processabile");
              break;
            case 423:
              throw new Error("Bloccato");
              break;
            case 424:
              throw new Error("Fallito dipendenza");
              break;
            case 425:
              throw new Error("Troppo presto");
              break;
            case 426:
              throw new Error("Aggiornamento richiesto");
              break;
            case 428:
              throw new Error("Precondizione richiesta");
              break;
            case 429:
              throw new Error("Troppe richieste");
              break;
            case 431:
              throw new Error("Campi di intestazione troppo grandi");
              break;
            case 451:
              throw new Error("Non disponibile per ragioni legali");
              break;
            case 500:
              throw new Error("La risposta del server è stata negativa");
              break;
            case 501:
              throw new Error("Non implementato");
              break;
            case 502:
              throw new Error("Gateway non valido");
              break;
            case 503:
              throw new Error("Servizio non disponibile");
              break;
            case 504:
              throw new Error("Timeout del gateway");
              break;
            case 505:
              throw new Error("Versione HTTP non supportata");
              break;
            case 506:
              throw new Error("Variant anche negoziata");
              break;
            case 507:
              throw new Error("Memoria insufficiente");
              break;
            case 508:
              throw new Error("Loop rilevato");
              break;
            case 510:
              throw new Error("Non esteso");
              break;
            case 511:
              throw new Error("Richiesta di rete richiede autenticazione");
              break;
            default:
              throw new Error(
                "Errore sconosciuto con codice: " + response.status
              );
          }
        }
      })
      .then((array) => {
        generateCards(array);
        spinnerWrapper.classList.remove("spinnerShow");
      })
      .catch((error) => {
        spinnerWrapper.classList.remove("spinnerShow");
        console.log("ERRORE!", err);
      });
  }, 300);
};

getEvents();
