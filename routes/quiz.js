import express from "express";
import Quiz from "../models/quiz3.js";

const router = express.Router();

// get everything
router.get("/", async (request, response) => {
  const data = await Quiz.find();

  response.send(data);
});

// gets a quiz based on the id
router.get("/:id", async (request, response) => {
  try {
    const data = await Quiz.findById(request.params.id);

    response.send(data);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// get quiz based on category
router.get("/category/:category", async (request, response) => {
  // I want to find all the quizzes that match the category

  const data = await Quiz.find({ category: request.params.category });

  response.send(data);
});

// create new quiz
router.post("/", async (request, response) => {
  try {
    await Quiz.create({
      name: request.body.name,
      questions: request.body.questions,
      quizType: request.body.quizType,
      category: request.body.category,
      numberOfQuestions: request.body.numberOfQuestions,
    });

    response.send("ok");
  } catch (error) {
    response
      .status(500)
      .send({ message: `Error saving data, ${error.message}` });
  }
});

export default router;
