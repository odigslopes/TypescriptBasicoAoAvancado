// ENV variables

require("dotenv").config();

import express from "express";
import config from "config";

const app = express();

// JSON Middleware
app.use(express.json());

// connect - DB
import db from "../config/db";

// Router
import router from "./router";

// Logger
import Logger from "../config/logger";

// Middleware
import morganMiddleware from "./middleware/morganMiddleware";

app.use(morganMiddleware);

app.use("/api/", router);

// app port
const port = config.get<number>("port");

app.listen(port, async () => {
  await db();
  Logger.info(`Aplicação está funcionando na porta: ${port}`);
});
