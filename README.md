# Weather Spain

A TypeScript client for fetching weather data from the Spanish meteorological agency AEMET (Agencia Estatal de Meteorología).

## Features

- 🌦️ Fetch weather stations across Spain
- 📊 Get daily weather data for specific stations and date ranges
- 🔄 Built-in retry mechanism for API requests
- ✅ Full TypeScript support with Zod validation
- 🧪 Jest testing setup

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your AEMET API key:
   ```env
   AEMET_API_KEY=your_api_key_here
   AEMET_URL=https://opendata.aemet.es
   ```

## Usage

### Fetch all weather stations

```bash
npm run bin:fetch-stations
```

### Fetch weather data for a specific station

```bash
npm run bin:fetch-weather
```

### Development

```bash
npm run dev          # Run in development mode
npm run build        # Build TypeScript
npm run test         # Run tests
npm run lint         # Lint code
```

## API

The `AemetClient` class provides:

- `getStationsData(subset?)` - Get weather stations data
- `getWeatherData(stationId, dateStart, dateEnd)` - Get daily weather data

## Requirements

- Node.js
- AEMET API key (free registration at [AEMET OpenData](https://opendata.aemet.es))
