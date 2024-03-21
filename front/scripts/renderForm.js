function limpiarForm() {
  const formulario = document.getElementById("movieForm");
  const limpiarBtn = document.getElementById("limpiarBtn");

  limpiarBtn.addEventListener("click", function (event) {
    event.preventDefault();
    formulario.reset();
  });
}

module.exports = limpiarForm;
