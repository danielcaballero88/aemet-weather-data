import express from "express";
import { setRoutes } from "./routes/index";
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

setRoutes(app);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
