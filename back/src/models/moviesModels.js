const { Schema, model, default: mongoose } = require("mongoose");

const movieSchema = new Schema({
  title: String,
  year: Number,
  director: String,
  duration: Number,
  genre: Array,
  rate: Number,
  poster: String,
});
const Movie = model("Movie", movieSchema);
module.exports = Movie;
