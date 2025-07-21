import { AemetStation, AemetDailyWeatherData } from "./schemas";

export interface IAemetClient {
  getStationsData(subset?: string[]): Promise<AemetStation[]>;
  getWeatherData(
    stationId: string,
    dateStart: Date,
    dateEnd: Date
  ): Promise<AemetDailyWeatherData[]>;
}
