window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}

const handleSubmit = function (e) { 
e.preventDefault();
tasto();
sottolinea();
}








function tasto() {
    var copia = document.getElementById("testo").value;
    var nuovoLi = document.createElement("li");
    nuovoLi.textContent = copia;
    document.getElementById("lista").appendChild(nuovoLi);  
    var bottone = document.createElement("button");
    nuovoLi.appendChild(bottone);
    bottone.style.float= "right";
    bottone.style.width = "40px";
    bottone.style.height = "25px";
    bottone.style.color = "red";
    var immaginebottone = document.createElement("i");
    immaginebottone.classList.add("far", "fa-trash-alt");
    bottone.appendChild(immaginebottone);
    bottone.addEventListener("click", remove);
} 

document.addEventListener("click", sottolinea);
function sottolinea() {
    var prova2 = document.getElementById("lista");
    prova2.classList.toggle("toggle");
}

function remove() {
this.parentNode.remove();
}
