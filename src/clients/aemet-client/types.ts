import { AemetDailyWeatherData, AemetStation } from "../../types/aemet";

export interface IAemetClient {
  getStationsData(subset?: string[]): Promise<AemetStation[]>;
  getWeatherData(
    stationId: string,
    dateStart: Date,
    dateEnd: Date
  ): Promise<AemetDailyWeatherData[]>;
}
