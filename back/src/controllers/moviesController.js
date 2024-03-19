const { movies } = require("../services/moviesService");

const moviesController = async (req, res) => {
  const movie = await movies();
  res.status(200).json(movie);
};
module.exports = { moviesController };
