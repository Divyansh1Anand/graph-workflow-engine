import express from "express";
import cors from "cors";
import { runEngine } from "./src/Engine.js";
import { createInitialState } from "./src/state.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/review", async (req, res) => {
  const code = req.body.code;

  const initialstate = createInitialState(code);
  const result = await runEngine(initialstate);

  res.json(result);
});

app.listen(3000, () => console.log("server running on port 3000"));
