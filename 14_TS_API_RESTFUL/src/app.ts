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

// Swagger
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

app.use(morganMiddleware);
app.use("/api/", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// app port
const port = config.get<number>("port");

app.listen(port, async () => {
  await db();
  Logger.info(`Aplicação está funcionando na porta: ${port}`);
});
