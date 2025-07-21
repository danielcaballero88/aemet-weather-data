import { AemetClient } from "../clients/aemet-client";
import { AemetDailyWeatherData } from "../types/aemet";

export class WeatherService {
  constructor(private aemetClient: AemetClient) {}

  async getDailyWeatherData(): Promise<AemetDailyWeatherData[]> {
    return this.aemetClient.getWeatherData(
      "5530E", // Example station ID for Granada Airport
      new Date("2025-07-01"),
      new Date("2025-07-08")
    );
  }
}
