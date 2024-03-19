const Movie = require("../models/moviesModels");
const axios = require("axios");

const buscar = async () => {
  const movieV = await Movie.find();
  console.log(movieV);
  return movieV;
};

class MoviesClase {
  constructor(title, year, director, duration, genre, rate, poster) {
    if (!title || typeof title !== "string" || title.trim() === "") {
      throw new Error("Error no se encontro un titulo");
    }
    if (!director || typeof director !== "string" || director.trim() === "") {
      throw new Error("Error no se encontro un director");
    }
    if (!poster || typeof poster !== "string" || poster.trim() === "") {
      throw new Error("Error no se encontro un poster");
    }
    (this.title = title),
      (this.year = year),
      (this.director = director),
      (this.duration = duration),
      (this.genre = genre),
      (this.rate = rate),
      (this.poster = poster);
  }
}
const movies = async () => {
  try {
    //const url = "https://students-api.up.railway.app/movies";
    // const { data } = await axios.get(url);

    const data = await buscar();
    const dataMovies = data.map(
      (element) =>
        new MoviesClase(
          element.title,
          element.year,
          element.director,
          element.duration,
          element.genre,
          element.rate,
          element.poster
        )
    );
    return dataMovies;
  } catch (error) {
    console.log(error);
  }
};
module.exports = { movies };
