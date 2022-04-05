import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import quizRoutes from "./routes/quiz.js";

const app = express();

// middleware
app.use(express.json()); // convert the body to JSON

app.use("/quiz", quizRoutes);

// adds the keys from my .env file into my process.env object
dotenv.config();

// connect to our database
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Database connected! 🐢");
  })
  .catch((error) => {
    console.log(error);
    console.log("There was an error connecting to the database");
  });

app.listen(3001, () => {
  console.log("The server is listening... 🐒");
});
