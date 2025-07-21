import { IAemetClient } from "../clients/aemet-client/types";
import { AemetDailyWeatherData, AemetStation } from "../types/aemet";

export class WeatherService {
  constructor(private aemetClient: IAemetClient) {}

  async getStationsData(subset?: string[]): Promise<AemetStation[]> {
    return this.aemetClient.getStationsData(subset);
  }

  async getDailyWeatherData(): Promise<AemetDailyWeatherData[]> {
    return this.aemetClient.getWeatherData(
      "5530E", // Example station ID for Granada Airport
      new Date("2025-07-01"),
      new Date("2025-07-08")
    );
  }
}
