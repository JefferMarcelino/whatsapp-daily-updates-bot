import dotenv from "dotenv";
dotenv.config();

export const latitude = process.env.LAT;
export const longitude = process.env.LON;
export const whatsappToken = process.env.WA_TOKEN;
export const whatsappId = process.env.WA_ID;
export const weatherApiKey = process.env.WEATHER_API;
export const ownerName = process.env.OWNER_NAME;
export const ownerNumber = process.env.OWNER_NUMBER;