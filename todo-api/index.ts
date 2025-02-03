import express from "express";
import "dotenv/config";
import dbConnect from "./startup/dbConnect";
import seed from "./startup/seed";
import todoRouter from "./routes/todoRouter";
import cors from "cors";

dbConnect();
seed();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/todos", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
