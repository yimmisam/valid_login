import cors from "cors";
import express from "express";
import helmet from "helmet";

import connectDB from "./database.js";
import {
  error404handler,
  errorGenericHandler,
  errorcHandler,
} from "./middleware.js";
import router from "./routes.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

await connectDB();

app.use(router);
app.use(error404handler);
app.use(errorGenericHandler);
app.use(errorcHandler);

export default app;
