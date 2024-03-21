const { createCard } = require("./createCard");
const axios = require("axios");

async function loadCards() {
  const cardContainer = document.getElementById("div-card");
  cardContainer.classList.add("contenido");

  const { data } = await axios.get("http://localhost:3000/movies");
  try {
    data.forEach((movie, index) => {
      const card = createCard(movie, index);
      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
}
module.exports = { loadCards };
