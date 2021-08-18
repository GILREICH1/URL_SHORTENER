import React from "react";
import { useParams } from "react-router-dom";

function Statistics() {
  const { shortURL } = useParams();
  return (
    <>
      <h2>Statistics</h2>
      <h3>{shortURL}</h3>
    </>
  );
}

export default Statistics;
