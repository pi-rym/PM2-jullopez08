const cardContainer = document.getElementById("div-card");

function createCard(movie, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = "card" + index;

  const cardFragment = document.createDocumentFragment();

  const elements = ["title", "year", "director", "genre"];
  elements.forEach((element) => {
    const elementNode = document.createElement(
      element === "title" ? "h3" : "p"
    );
    elementNode.innerHTML = movie[element];
    cardFragment.appendChild(elementNode);
  });

  const flyer = document.createElement("img");
  flyer.classList.add("card-img-top");
  flyer.src = movie.poster;
  cardFragment.appendChild(flyer);

  card.appendChild(cardFragment);
  return card;
}
cardContainer.classList.add("contenido");

module.exports = { createCard };
