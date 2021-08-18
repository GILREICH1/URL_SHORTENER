import React from "react";
import { base_url } from "../../utils/constants";

function ShortURL({ shortURL }) {
  return (
    <p>
      You're short URL is {base_url}/short/{shortURL}
    </p>
  );
}

export default ShortURL;
