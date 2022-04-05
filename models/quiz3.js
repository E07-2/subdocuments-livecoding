import mongoose from "mongoose";

// 3. Array of subdocuments
// We create a separate schema for the nested object
// ...but we wrap the schema inside an array []
// it will create a new _id for each question in the array
const questionSchema = new mongoose.Schema({
  question: String,
  answers: [String],
});

const quizSchema = new mongoose.Schema({
  name: { type: String, required: true },
  created: { type: Date, default: Date.now },
  questions: [questionSchema],
  numberOfQuestions: { type: Number, min: 1, max: 20 },
  quizType: {
    type: String,
    enum: ["multiple-choice", "timed"],
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["javascript", "html", "css", "react", "mongodb", "node"],
  },
});

const Quiz = mongoose.model("quiz", quizSchema); // quizzes

export default Quiz;
