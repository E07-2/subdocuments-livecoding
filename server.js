import dotenv from "dotenv";
import mongoose from "mongoose";
import Movie from "./models/movie.js";

dotenv.config();

console.log(process.env.MONGODB);

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Database connection, successful!");
  })
  .catch((error) => {
    console.log("Unable to connect to database");
    console.log(error);
  });

async function createNewMovie() {
  try {
    const newMovie = {
      title: "Vegetable",
      plot: "a film about veggies",
      runtim: 150,
      year: 1977,
    };

    await Movie.create(newMovie);
  } catch (error) {
    console.log(error);
  }
}

createNewMovie();
