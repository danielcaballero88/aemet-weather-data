import { WeatherService } from "./weather-service";
import {
  AemetClientMock,
  IAemetClient,
  AemetStation,
  AemetDailyWeatherData,
} from "../clients/aemet-client";

describe("WeatherService", () => {
  let weatherService: WeatherService;
  let aemetClientMock: IAemetClient;

  beforeEach(() => {
    aemetClientMock = new AemetClientMock();
    weatherService = new WeatherService(aemetClientMock);
  });

  describe("getStationsData", () => {
    it("should call aemetClient.getStationsData and return stations data", async () => {
      // Arrange
      const expectedStations: AemetStation[] = [
        {
          latitud: "394924N",
          provincia: "ILLES BALEARS",
          altitud: "490",
          indicativo: "B013X",
          nombre: "ESCORCA, LLUC",
          longitud: "025309E",
        },
      ];

      const getStationsDataSpy = jest
        .spyOn(aemetClientMock, "getStationsData")
        .mockResolvedValue(expectedStations);

      // Act
      const result = await weatherService.getStationsData();

      // Assert
      expect(getStationsDataSpy).toHaveBeenCalledWith(undefined);
      expect(result).toEqual(expectedStations);
    });

    it("should pass subset parameter to aemetClient.getStationsData", async () => {
      // Arrange
      const subset = ["5530E", "B013X"];
      const expectedStations: AemetStation[] = [];

      const getStationsDataSpy = jest
        .spyOn(aemetClientMock, "getStationsData")
        .mockResolvedValue(expectedStations);

      // Act
      await weatherService.getStationsData(subset);

      // Assert
      expect(getStationsDataSpy).toHaveBeenCalledWith(subset);
    });

    it("should handle errors from aemetClient.getStationsData", async () => {
      // Arrange
      const errorMessage = "Network error";
      jest
        .spyOn(aemetClientMock, "getStationsData")
        .mockRejectedValue(new Error(errorMessage));

      // Act & Assert
      await expect(weatherService.getStationsData()).rejects.toThrow(
        errorMessage
      );
    });
  });

  describe("getDailyWeatherData", () => {
    it("should call aemetClient.getWeatherData with correct parameters and return weather data", async () => {
      // Arrange
      const expectedWeatherData: AemetDailyWeatherData[] = [
        {
          fecha: "2025-07-01",
          indicativo: "5530E",
          nombre: "GRANADA AEROPUERTO",
          provincia: "GRANADA",
          tmed: "25.5",
          prec: "0.0",
          tmin: "18.2",
          tmax: "32.8",
        },
      ];

      const getWeatherDataSpy = jest
        .spyOn(aemetClientMock, "getWeatherData")
        .mockResolvedValue(expectedWeatherData);

      // Act
      const result = await weatherService.getDailyWeatherData();

      // Assert
      expect(getWeatherDataSpy).toHaveBeenCalledWith(
        "5530E",
        new Date("2025-07-01"),
        new Date("2025-07-08")
      );
      expect(result).toEqual(expectedWeatherData);
    });

    it("should handle errors from aemetClient.getWeatherData", async () => {
      // Arrange
      const errorMessage = "API error";
      jest
        .spyOn(aemetClientMock, "getWeatherData")
        .mockRejectedValue(new Error(errorMessage));

      // Act & Assert
      await expect(weatherService.getDailyWeatherData()).rejects.toThrow(
        errorMessage
      );
    });
  });

  describe("constructor", () => {
    it("should create an instance with the provided AemetClient", () => {
      // Arrange & Act
      const service = new WeatherService(aemetClientMock);

      // Assert
      expect(service).toBeInstanceOf(WeatherService);
    });
  });
});
