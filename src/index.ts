import * as dotenv from "dotenv";
dotenv.config();
import { app } from "./server/index.js";

const port = process.env.PORT ?? 4002;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
