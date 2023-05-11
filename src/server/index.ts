import express from "express";
import morgan from "morgan";
import things from "../data/things.js";

export const app = express();

app.use(morgan("dev"));

app.get("/things", (req, res) => {
  res.status(200).json({ things });
});

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});
