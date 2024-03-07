const cardContainer = document.getElementById("div-card");

$.get("https://students-api.2.us-1.fl0.io/movies", (films) => {
  films.forEach((movie, index) => {
    const cardFragment = document.createDocumentFragment();
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = "card" + index;
    //crear el contenedor de las tarjetas y los elementos de la misma
    const Ttitle = document.createElement("h3");
    const Tyear = document.createElement("p");
    const Tdirector = document.createElement("p");
    const Tgender = document.createElement("p");
    const Tflyer = document.createElement("img");
    Tflyer.classList.add("card-img-top");
    //conectar los elementos que debe traer del tempData
    Ttitle.innerHTML = movie.title;
    Tyear.innerHTML = movie.year;
    Tdirector.innerHTML = movie.director;
    Tgender.innerHTML = movie.genre;
    Tflyer.src = movie.poster;

    //agregar los elementos en el div
    cardFragment.appendChild(Ttitle);
    cardFragment.appendChild(Tyear);
    cardFragment.appendChild(Tdirector);
    cardFragment.appendChild(Tgender);
    cardFragment.appendChild(Tflyer);

    cardContainer.appendChild(card);
    card.appendChild(cardFragment);
    return cardContainer;
  });
});
cardContainer.classList.add("contenido");
