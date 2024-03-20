// main.js
const { loadCards } = require("./dataCard");

const validarForm = require("./enviarData");

const cardContainer = document.getElementById("div-card");
loadCards(cardContainer);

const botnEnviar = document.getElementById("btnEnviar");
