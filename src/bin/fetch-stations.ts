import { AemetClient } from "../clients/aemet-client";

const aemetClient = new AemetClient();

async function main() {
  try {
    const stationsData = await aemetClient.getStationsData();
    console.log(stationsData || "No data received");
  } catch (error) {
    console.error("Error fetching stations data:", error);
  }
}

main();
export default main;
