import { makeGetRequest } from "./utils/requests";
import { getConfig } from "./config";
import { parseDate } from "./utils/parse";

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

  async getWeatherData(location: string, date_start: Date, date_end: Date) {
    // Station 5530E is Granada Airport
    const endpoint = `/opendata/api/valores/climatologicos/diarios/datos/fechaini/${parseDate(date_start)}/fechafin/${parseDate(date_end)}/estacion/5530E`;

    const queryParams = { api_key: this.apiKey };

    return makeGetRequest(endpoint, this.baseUrl, queryParams, {
      "cache-control": "no-cache",
    });
  }
}
