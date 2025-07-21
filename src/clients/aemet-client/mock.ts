import { AemetStation, AemetDailyWeatherData } from "../../types/aemet";
import { IAemetClient } from "./types";

export class AemetClientMock implements IAemetClient {
  async getStationsData(subset?: string[]): Promise<AemetStation[]> {
    throw new Error("getStationsData should be mocked in tests");
  }

  async getStationData(stationId: string): Promise<AemetStation[]> {
    throw new Error("getStationData should be mocked in tests");
  }

  async getWeatherData(
    stationId: string,
    dateStart: Date,
    dateEnd: Date
  ): Promise<AemetDailyWeatherData[]> {
    throw new Error("getWeatherData should be mocked in tests");
  }
}
