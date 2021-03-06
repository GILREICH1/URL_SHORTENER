import { base_url } from "./constants";

// TODO MEANINGFUL ERROR HANDLING
export const generateShortURL = async (newURL = {}) => {
  const jsonURL = JSON.stringify(newURL);
  const JSONresponse = await fetch(`${base_url}/saveURL`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonURL,
  });

  const response = await JSONresponse.json();
  return response.shortURL;
};

export const getLongURL = async (shortURL) => {
  const JSONresponse = await fetch(`${base_url}/getURL/${shortURL}`);
  const response = await JSONresponse.json();
  return response.longURL;
};

export const getURLStats = async (shortURL) => {
  const JSONresponse = await fetch(`${base_url}/getURL/${shortURL}`);
  const response = await JSONresponse.json();
  return response;
};

export const incrementVisits = async (shortURL) => {
  const JSONresponse = await fetch(`${base_url}/incrementVisit/${shortURL}`);
  const response = await JSONresponse.json();
  return response;
};
