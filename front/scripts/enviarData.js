const axios = require("axios");

function limpiarForm() {
  // Seleccionar todos los inputs del formulario
  const inputs = document.querySelectorAll("input");

  // Iterar sobre los inputs y vaciar sus valores
  inputs.forEach((input) => {
    input.value = "";
  });
}

async function enviarForm(event) {
  try {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Seleccionar todos los inputs del formulario
    const inputs = document.querySelectorAll("input");

    // Validar que todos los campos estén completos
    let form = true;
    inputs.forEach((input) => {
      if (!input.value) {
        form = false;
      }
    });

    // Si el formulario está completo, enviar los datos al servidor
    if (form) {
      const title = document.getElementById("title").value;
      const year = document.getElementById("year").value;
      const director = document.getElementById("director").value;
      const duration = document.getElementById("duration").value;
      const genre = document.getElementById("genre").value;
      const rate = document.getElementById("rate").value;
      const poster = document.getElementById("poster").value;

      // Enviar los datos del formulario al servidor utilizando Axios
      const response = await axios.post("http://localhost:3000/movies", {
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });

      alert("La película se ha guardado");
    } else {
      alert("formulario incompleto. ");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("la pelicula no se guardo, inténtalo de nuevo.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const clearButton = document.getElementById("btnlimpiar");
  clearButton.addEventListener("click", limpiarForm);

  const form = document.getElementById("form");
  form.addEventListener("submit", enviarForm);
});
