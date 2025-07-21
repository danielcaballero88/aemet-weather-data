import { z } from "zod";

export const AemetResponseSchema = z.object({
  descripcion: z.string(),
  estado: z.number(),
  datos: z.string(),
  metadatos: z.string(),
});

export type AemetResponse = z.infer<typeof AemetResponseSchema>;

export const AemetStationSchema = z.object({
  latitud: z.string(),
  longitud: z.string(),
  altitud: z.string(),
  indicativo: z.string(),
  nombre: z.string(),
  provincia: z.string(),
});

export type AemetStation = z.infer<typeof AemetStationSchema>;

export const AemetDailyWeatherDataSchema = z.object({
  fecha: z.string(), // YYYY-MM-DD
  indicativo: z.string(), // Station code
  nombre: z.string(), // Station name
  provincia: z.string(), // Province
  tmed: z.string().optional(), // Daily average temperature (°C)
  prec: z.string().optional(), // Precipitation (mm)
  tmin: z.string().optional(), // Minimum temperature (°C)
  horatmin: z.string().optional(), // Time of minimum temperature
  tmax: z.string().optional(), // Maximum temperature (°C)
  horatmax: z.string().optional(), // Time of maximum temperature
  dir: z.string().optional(), // Dominant wind direction (degrees)
  velmedia: z.string().optional(), // Average wind speed (m/s)
  racha: z.string().optional(), // Gust wind speed (m/s)
  horaracha: z.string().optional(), // Time of gust wind speed
  sol: z.string().optional(), // Hours of sunshine
  presMax: z.string().optional(), // Maximum atmospheric pressure (hPa)
  horaPresMax: z.string().optional(), // Time of maximum pressure
  presMin: z.string().optional(), // Minimum atmospheric pressure (hPa)
  horaPresMin: z.string().optional(), // Time of minimum pressure
  // Add other fields as per AEMET API documentation if needed
});

export type AemetDailyWeatherData = z.infer<typeof AemetDailyWeatherDataSchema>;
