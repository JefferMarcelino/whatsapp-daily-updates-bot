import { latitude, longitude, ownerName, ownerNumber } from "./config.js";
import { getWeatherByCords } from "./services/weather.js";
import { getAdvice } from "./services/advice.js";
import { sendTemplateMessage } from "./services/whatsapp.js";

const main = async () => {
  try {
    const weatherData = await getWeatherByCords(latitude, longitude);
    const adviceText = await getAdvice();

    await sendTemplateMessage(
      ownerNumber, 
      "good_morning", 
      [{
        type: "body",
        parameters: [
          { type: "text", text: ownerName },
          { type: "text", text: weatherData.main.temp.toString() },
          { type: "text", text: weatherData.main.feels_like.toString()},
          { type: "text", text: weatherData.rainChance },
          { type: "text", text: adviceText }
        ]
      }]
    );

    return true;
  } catch (error) {
    console.error("An error occurred:", error.message);

    return false;
  }
};

main();
