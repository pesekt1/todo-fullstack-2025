import { Router } from "express";
import Todo from "../models/todo";
import CreateTodoDto from "../dtos/createTodoDto";

const todoRouter = Router();

todoRouter.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (error) {
    console.error("Error getting todos", error);
  }
});

todoRouter.post("/", async (req, res) => {
  const { title } = req.body as CreateTodoDto;
  try {
    const todo = new Todo({
      title,
    });
    await todo.save();
    res.send(todo).status(201);
  } catch (error) {
    console.error("Error creating todo", error);
  }
});

todoRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByIdAndDelete(id);
    res.send(todo);
  } catch (error) {
    console.error("Error deleting todo", error);
  }
});

todoRouter.put("/:id/complete", async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByIdAndUpdate(id, { completed: true });
    res.send(todo);
  } catch (error) {
    console.error("Error completing todo", error);
  }
});

export default todoRouter;
