import { AemetClient, IAemetClient } from "../clients/aemet-client";
import { IndexController } from "../controllers/index";
import { WeatherService } from "../services/weather-service";

export class DIContainer {
  private static instance: DIContainer;
  private aemetClient: IAemetClient;
  private weatherService: WeatherService;
  private indexController: IndexController;

  private constructor() {
    this.aemetClient = new AemetClient();
    this.weatherService = new WeatherService(this.aemetClient);
    this.indexController = new IndexController(this.weatherService);
  }

  static getInstance(): DIContainer {
    if (!DIContainer.instance) {
      DIContainer.instance = new DIContainer();
    }
    return DIContainer.instance;
  }

  getIndexController(): IndexController {
    return this.indexController;
  }
}
