class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
    this.confronto = function (utente) {
      if (this.age < utente.age) {
        return `${utente.firstName} ${utente.lastName} è più grande di ${this.firstName} ${this.lastName}`;
      } else {
        return `${this.firstName} ${this.lastName} è più grande di ${utente.firstName} ${utente.lastName}`;
      }
    };
  }
}

const x = new User("Salvatore", "Buonaiuto", 25, "Napoli");
const y = new User("Stefano", "Casasola", 33, "Milano");

console.log(x.confronto(y));

const pets = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
    this.home = function (padrone) {
      if (this.ownerName === padrone.ownerName) {
        return true;
      } else {
        return false;
      }
    };
  }
}

const formSubmit = document.querySelector(".formContainer");
const petNameInput = document.querySelector("#petNameInput");
const ownerNameInput = document.querySelector("#ownerNameInput");
const speciesInput = document.querySelector("#speciesInput");
const breedInput = document.querySelector("#breedInput");
const petWrapper = document.querySelector(".petWrapper");

const updatePet = function () {
  petWrapper.innerHTML = "";
  pets.forEach((animal) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("col");
    newDiv.innerHTML = `
    <div class="card">
            <div class="card-body ">
                <p class="card-title">${animal.petName}</p>
                <p class="card-title">${animal.ownerName}</p>
                <p class="card-title">${animal.species}</p>
                <p class="card-title">${animal.breed}</p>
            </div>
        </div>
    `;
    petWrapper.appendChild(newDiv);
  });
};

formSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  const newPet = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  );
  pets.push(newPet);
  petNameInput.value = "";
  ownerNameInput.value = "";
  speciesInput.value = "";
  breedInput.value = "";
  updatePet();
});
