import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const config = {
  aemetApiKey: process.env.AEMET_API_KEY || "",
};
