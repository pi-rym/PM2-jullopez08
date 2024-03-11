const { createCard } = require("./createCard");

function loadCards() {
  const cardContainer = document.getElementById("div-card");
  cardContainer.classList.add("contenido");

  $.get("https://students-api.2.us-1.fl0.io/movies", (films) => {
    films.forEach((movie, index) => {
      const card = createCard(movie, index);
      cardContainer.appendChild(card);
      console.log("todas las tarjetas, soy una gueva ");
    });
  });
}

module.exports = { loadCards };
