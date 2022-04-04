import mongoose from "mongoose";

// schema
const movieSchema = new mongoose.Schema({
  title: String,
  plot: String,
  runtime: Number,
  year: Number,
});

// model
// we are referring to a collection called "Movie"
// "Movie" becomes "movies" -> lowercase & made into plural form
// MongoDB does sanitisation to the collection name
// if the database does not exist, it creates the database
// if the collection does not exist, it creates the collection
const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
