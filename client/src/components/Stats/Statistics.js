import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getURLStats } from "../../utils/api-services";
import { base_url } from "../../utils/constants";
import "./Statistic.css";

function Statistics() {
  const [URLStats, setURLStats] = useState({});
  const { shortURL } = useParams();
  useEffect(() => {
    getURLStats(shortURL).then((stats) => setURLStats(stats));
  });

  return (
    <>
      <h2>Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Short URL</th>
            <th>Long URL</th>
            <th>visits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {base_url}/short/{shortURL}
            </td>
            <td>{URLStats.longURL}</td>
            <td>{URLStats.visits}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Statistics;
