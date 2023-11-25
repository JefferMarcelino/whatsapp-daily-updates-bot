import axios from "axios";

const getAdvice = async () => {
  const apiUrl = "https://api.adviceslip.com/advice";

  try {
    const response = await axios.get(apiUrl);
    const advice = response.data;
    
    return advice.slip.advice;
  } catch (error) {
    console.log(error);
    
    return null;
  };
};

export { getAdvice };