import mongoose from "mongoose";

// 2. nested subdocument
// We create a separate schema for the nested object
// it will create an _id for the subdocument
const questionSchema = new mongoose.Schema({
  question: String,
  answers: [String],
});

const quizSchema = new mongoose.Schema({
  name: { type: String, required: true },
  questions: questionSchema,
});
