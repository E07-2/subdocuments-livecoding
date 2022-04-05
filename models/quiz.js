import mongoose from "mongoose";

// 1. nested paths
// simplest method for storing subdocuments
// we nest an object within the schema
// should not create a separate _id
const quizSchema = new mongoose.Schema({
  name: { type: String, required: true },
  questions: {
    question: String,
    answers: [String],
  },
});
