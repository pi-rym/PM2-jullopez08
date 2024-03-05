///import tempData from "./tempData.js";
// console.log(tempData);

const newDesign = tempData.map((films) => {
  //crear el contenedor de las tarjetas y los elementos de la misma
  const card = document.getElementById("div-card");
  const Ttitle = document.createElement("h3");
  const Tyear = document.createElement("p");
  const Tdirector = document.createElement("p");
  const Tgender = document.createElement("p");
  const Tflyer = document.createElement("img");

  //conectar los elementos que debe traer del tempData
  Ttitle.innerHTML = films.title;
  Tyear.innerHTML = films.year;
  Tdirector.innerHTML = films.director;
  Tgender.innerHTML = films.genre;
  Tflyer.src = films.poster;

  //dar estilos css
  Ttitle.classList.add("title-card");
  Tyear.classList.add("year-card");
  Tdirector.classList.add("director-card");
  Tgender.classList.add("gender-card");
  Tflyer.classList.add("flyer-card");

  //agregar los elementos en el div
  card.appendChild(Ttitle);
  card.appendChild(Tyear);
  card.appendChild(Tdirector);
  card.appendChild(Tgender);
  card.appendChild(Tflyer);
  return card;
});

// console.log(newDesign);
