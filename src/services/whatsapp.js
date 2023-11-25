import axios from "axios";
import { whatsappId, whatsappToken } from "../config.js";

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ whatsappToken }`
  }
};

const sendTemplateMessage = async (number, templateName, components) => {
  const data = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: number,
    type: "template",
    template: { 
      name: templateName,
      language: { 
        code: "en_US" 
      },
      components
    }
  };

  try {
    await axios.post(`https://graph.facebook.com/v18.0/${ whatsappId }/messages`, data, axiosConfig);

    return true;
  } catch (error) {
    console.error('Error sending text message:', error);

    return false;
  };
};

export { sendTemplateMessage };