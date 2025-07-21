import { Request, Response } from "express";
import { WeatherService } from "../services/weather-service";

export class IndexController {
  constructor(private weatherService: WeatherService) {}

  public async getDailyWeatherData(req: Request, res: Response): Promise<void> {
    try {
      const weatherData = await this.weatherService.getDailyWeatherData();
      res.status(200).json(weatherData);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching weather data",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
}
