import { Router } from "express";
import { IndexController } from "../controllers/index";

const router = Router();
const indexController = new IndexController();

export function setRoutes(app: Router) {
  app.get("/", (req, res) => {
    res.send("Welcome to the API");
  });
  app.get("/items", indexController.getItems.bind(indexController));
  app.post("/items", indexController.createItem.bind(indexController));
}
