import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import dbConnect from "./config/mongo";
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use(router);

async function main() {
  console.log("starting server");

  try {
    dbConnect();
    app.listen(PORT);
    console.log("Server on portt ", `http://localhost:${PORT}`);
  } catch (error) {
    console.log("no se pudo connetar a la base de datos", error);
  }
}

main();
