import express from "express";
import morgan from "morgan";
import things from "../data/things.js";

export const app = express();

app.use(morgan("dev"));

app.get("/things", (req, res) => {
  res.status(200).json({ things });
});

app.get("/things/:idThing", (req, res) => {
  const { idThing } = req.params;

  const setOfThingIds = things.find((things) => things.idThing === idThing);

  if (setOfThingIds === undefined)
    res.status(404).json({ message: "Id not found" });
  res.status(200).json(setOfThingIds);
});

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});
