const axios = require("axios");

const genres = [
  "Ation",
  "Fantasy",
  "Comedy",
  "Drama",
  "Sci-Fi",
  "Terror",
  "Adventure",
  "Romance",
];
const title = document.getElementById("Inputitle");
const year = document.getElementById("Inputyear");
const director = document.getElementById("Inputdirector");
const duraction = document.getElementById("Inputduraction");
const option = document.getElementById("Listgenre");
const rate = document.getElementById("Inputrate");
const poster = document.getElementById("Inputimage");

function renderGenre() {
  option.innerHTML = "";
  for (const genre of genres) {
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.type = "checkbox";
    input.id = genre;
    input.name = "genre[]";
    input.value = genre;

    label.htmlFor = genre;
    label.textContent = genre;

    option.appendChild(input);
    option.appendChild(label);
  }
  return option;
}
renderGenre();

function validarcheckboxes() {
  const checkboxes = document.querySelectorAll('input [name="genre[]"]');

  for (const item of checkboxes) {
    if (item.checked) {
      item.classList.add("selected");
      return true;
    }
  }
}
validarcheckboxes();
function validarForm(event) {
  event.preventDefault();
  const genres = validarcheckboxes();
  if (
    title.value.trim() === "" &&
    year.value.trim() === "" &&
    director.value.trim() === "" &&
    duraction.value.trim() === "" &&
    genre.value.trim() === "" &&
    rate.value.trim() === "" &&
    genres.every(Boolean)
  ) {
    return alert("Faltan campos");
  }
  return alert("Pelicula enviada");
}
function limpiarForm() {
  title.value = "";
  year.value = "";
  director.value = "";
  duraction.value = "";
  rate.value = "";
  poster.value = "";
  const checkboxes = document.querySelectorAll('input[name="genre[]"]');
  for (const item of checkboxes) {
    item.checked = false;
    item.classList.remove("selected");
  }
}

const btnEnviar = document.getElementById("btnEnviar");
const limpiarbtn = document.getElementById("limpiarbtn");
limpiarbtn.addEventListener("click", limpiarForm);
btnEnviar.addEventListener("click", validarForm);

module.exports = validarForm;

//const errores = [];

//   if ) {
//
//

//   if (errores.length > 0) {
//     event.preventDefault();
//     alert(errores.join("\n"));
//   }
// }
