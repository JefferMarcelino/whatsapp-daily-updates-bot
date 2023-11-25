import axios from "axios";
import { weatherApiKey } from "../config.js";

const getWeatherByCords = async (lat, lon) => {
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

  const queryParams = {
    lat: lat,
    lon: lon,
    appid: weatherApiKey,
    units: "metric",
  };

  try {
    const response = await axios.get(apiUrl, { params: queryParams });
    const weather = response.data;

    const isRainy = weather.weather.some(condition => condition.main.toLowerCase().includes('rain'));
    const rainChance = isRainy ? weather.pop : 0;
    
    return {
      ...weather,
      rainChance
    };
  } catch (error) {
    console.log(error);
    
    return null;
  };
};

export { getWeatherByCords };