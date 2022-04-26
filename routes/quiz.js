import express from "express";
import Quiz from "../models/quiz3.js";

const router = express.Router();

// get everything
router.get("/", async (request, response) => {
  const data = await Quiz.find().lean().limit(1); // speeds up the response to the client

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

// Here I would like to update the quiz data
// with PATCH we partially update parts of our data
router.patch("/:id", async (request, response) => {
  try {
    await Quiz.findByIdAndUpdate(request.params.id, {
      name: request.body.name,
      numberOfQuestions: request.body.numberOfQuestions,
      questions: request.body.questions,
    });

    response.send("Successfully updated!");
  } catch (error) {
    response
      .status(500)
      .send({ message: `Error updating data, ${error.message}` });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    await Quiz.findByIdAndDelete(request.params.id);

    response.send(`Quiz ${request.params.id} deleted`);
  } catch (error) {
    response
      .status(500)
      .send({ message: `Error deleting data, ${error.message}` });
  }
});

// With PUT you are REPLACING all the data
router.put("/:id", async (request, response) => {
  try {
    await Quiz.findByIdAndUpdate(request.params.id, {
      name: request.body.name,
      numberOfQuestions: request.body.numberOfQuestions,
      questions: request.body.questions,
      quizType: request.body.quizType,
      category: request.body.category,
    });

    response.send("Successfully updated!");
  } catch (error) {
    response
      .status(500)
      .send({ message: `Error updating data, ${error.message}` });
  }
});

export default router;
