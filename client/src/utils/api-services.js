import { base_url } from "./constants";

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
