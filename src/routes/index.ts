import { Router } from "express";
import { IndexController } from "../controllers/index";
import { DIContainer } from "../di/container";

export const router = Router();
const container = DIContainer.getInstance();
const indexController: IndexController = container.getIndexController();

router.get("/", (req, res) => {
  res.send("Welcome to the API");
});
router.get(
  "/daily-weather-data",
  indexController.getDailyWeatherData.bind(indexController)
);
