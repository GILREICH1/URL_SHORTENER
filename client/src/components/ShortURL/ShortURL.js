import React from "react";
import { base_url } from "../../utils/constants";

function ShortURL({ shortURL }) {
  // TODO implement the below with <Link>
  return (
    <>
      <p>
        You're short URL is {base_url}/short/{shortURL}
      </p>
      <p>
        See your URL stats at {base_url}/stats/{shortURL}
      </p>
    </>
  );
}

export default ShortURL;
