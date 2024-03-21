const { movies } = require("../services/moviesService");
const { createMovie } = require("../services/createMoviesService");

const moviesController = async (req, res) => {
  const movie = await movies();
  res.status(200).json(movie);
};
const movieCreate = async (req, res) => {
  const { title, year, director, duration, rate, genre, poster } = req.body;

  try {
    const newMovies = await createMovie({
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
    res.status(201).json({
      message: "se creo una pelucula",
      pelicula: newMovies,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la película" });
  }
};
module.exports = { moviesController, movieCreate };
