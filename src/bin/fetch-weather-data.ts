import { AemetClient } from "../clients/aemet-client";

const aemetClient = new AemetClient();

async function main() {
  try {
    // Station 5530E is Granada Airport
    const stationId = "5530E";
    const dateStart = new Date("2023-01-01");
    const dateEnd = new Date("2023-01-31");

    const weatherData = await aemetClient.getWeatherData(
      stationId,
      dateStart,
      dateEnd
    );
    console.log(weatherData || "No data received");
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

main();
export default main;
