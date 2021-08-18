import React from "react";

function ShortURL({ shortURL }) {
  // TODO implement the below with <Link>
  return (
    <>
      <p>
        You're short URL is {window.location.href}short/{shortURL}
      </p>
      <p>
        See your URL stats at {window.location.href}stats/{shortURL}
      </p>
    </>
  );
}

export default ShortURL;
