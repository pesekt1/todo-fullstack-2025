import Todo from "../models/todo";

const todos = [
  new Todo({
    title: "Learn TypeScript",
  }),
  new Todo({
    title: "Learn React",
  }),
  new Todo({
    title: "Learn Node.js",
  }),
];

export default async () => {
  try {
    await Todo.deleteMany({});
    await Todo.insertMany(todos);
    console.log("Seed data created");
  } catch (error) {
    console.error("Error seeding data", error);
  }
};
