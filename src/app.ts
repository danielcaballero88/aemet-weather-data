import express from "express";
import { router } from "./routes/index";
import {
  errorHandler,
  requestLogger,
  validateRequest,
} from "./middleware/index";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);
app.use(validateRequest);

app.use("/api", router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
