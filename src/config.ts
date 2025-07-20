import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const getConfig = () => ({
  aemetApiKey: process.env.AEMET_API_KEY || "",
  aemetUrl: "https://opendata.aemet.es",
});
