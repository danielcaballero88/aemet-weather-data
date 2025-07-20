import { AemetClient } from "./aemet-client";

const aemetClient = new AemetClient();

async function main() {
  try {
    const location = "Granada Airport";
    const date_start = new Date("2023-01-01");
    const date_end = new Date("2023-01-31");

    const weatherData = await aemetClient.getWeatherData(
      location,
      date_start,
      date_end
    );
    console.log(weatherData?.data || "No data received");
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

main();
export default main;
