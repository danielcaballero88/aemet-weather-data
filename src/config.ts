import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const config = {
  aemetApiKey: process.env.AEMET_API_KEY || '',
}

module.exports = config;
