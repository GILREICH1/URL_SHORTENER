import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLongURL, incrementVisits } from "../../utils/api-services";
import { base_url } from "../../utils/constants";

function Redirector() {
  const { shortURL } = useParams();

  useEffect(() => {
    incrementVisits(shortURL);
  });

  useEffect(() => {
    getLongURL(shortURL).then((longURL) => {
      window.location.href = longURL;
    });
  });

  return (
    <p>
      You're short URL is {window.location.href}/short/{shortURL}
    </p>
  );
}

export default Redirector;
