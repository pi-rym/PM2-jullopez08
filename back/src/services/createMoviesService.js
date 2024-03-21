const { Movie } = require("../models/moviesModels");

async function createMovie(data) {
  try {
    const newMovie = await Movie.create(data);
    return newMovie;
  } catch (error) {
    throw new Error("Error al crear la película");
  }
}

module.exports = { createMovie };
