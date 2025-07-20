import axios from "axios";
import axiosRetry from "axios-retry";
import { z } from "zod";

import { getConfig } from "./config";
import { parseDate, parseUrl } from "./utils/parse";

axiosRetry(axios, { retries: 3 });

import {
  AemetStationSchema,
  type AemetStation,
  AemetDailyWeatherDataSchema,
  type AemetDailyWeatherData,
  AemetResponseSchema,
  AemetResponse,
} from "./models/aemet";

export class AemetClient {
  private baseUrl: string;
  private apiKey: string;
  constructor() {
    const config = getConfig();
    this.baseUrl = config.aemetUrl;
    this.apiKey = config.aemetApiKey;
    if (!this.baseUrl) {
      throw new Error("AEMET BASE URL is not configured.");
    }
    if (!this.apiKey) {
      throw new Error("AEMET API KEY is not configured.");
    }
  }

  async getStationsData(subset?: string[]): Promise<AemetStation[]> {
    const endpoint =
      "/opendata/api/valores/climatologicos/inventarioestaciones/todasestaciones";
    const queryParams = { api_key: this.apiKey };

    // First request to get the URL for the actual data
    let firstResponse: AemetResponse;
    try {
      const url = parseUrl(endpoint, this.baseUrl, queryParams);
      const response = await axios.get(url);
      firstResponse = z.parse(AemetResponseSchema, response.data);
    } catch (error) {
      console.error("Error fetching station data:", error);
      throw new Error(
        `Failed to retrieve station data (first request): ${error instanceof Error ? error.message : String(error)}`
      );
    }

    // Second request to get the actual station data
    try {
      const response = await axios.get(firstResponse.datos);
      const stations = z.parse(AemetStationSchema.array(), response.data);

      // TODO: Handle this in the request directly, this is overfetching and then filtering
      if (subset && subset.length > 0) {
        // Filter stations if a subset is provided
        return stations.filter((station) =>
          subset.includes(station.indicativo)
        );
      }

      return stations;
    } catch (error) {
      console.error("Error fetching station data:", error);
      throw new Error(
        `Failed to retrieve station data (second request): ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }

  async getWeatherData(
    stationId: string,
    dateStart: Date,
    dateEnd: Date
  ): Promise<AemetDailyWeatherData[]> {
    const endpoint = `/opendata/api/valores/climatologicos/diarios/datos/fechaini/${parseDate(dateStart)}/fechafin/${parseDate(dateEnd)}/estacion/${stationId}`;

    const queryParams = { api_key: this.apiKey };

    // First request to get the URL for the actual data
    let firstResponse: AemetResponse;
    try {
      const url = parseUrl(endpoint, this.baseUrl, queryParams);
      const response = await axios.get(url);
      firstResponse = z.parse(AemetResponseSchema, response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw new Error(
        `Failed to retrieve weather data for station ${stationId}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
    // Second request to get the actual weather data
    try {
      const response = await axios.get(firstResponse.datos);

      const weatherData = z.parse(
        AemetDailyWeatherDataSchema.array(),
        response.data
      );

      return weatherData;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw new Error(
        `Failed to retrieve weather data for station ${stationId}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }
}
