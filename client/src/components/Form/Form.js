import React, { useState } from "react";
import { generateShortURL } from "../../utils/api-services";
import ShortURL from "../ShortURL/ShortURL";

function Form() {
  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const urlToSave = { longURL };
    const { shortURL } = await generateShortURL(urlToSave);
    setShortURL(shortURL);
    setLongURL("");
  };

  <form className="submitForm" onSubmit={(e) => submitHandler(e)}>
    <input
      className="form__input"
      value={longURL}
      type="text"
      placeholder="Add custom task for this month"
      onChange={(e) => setLongURL(e.target.value)}
    ></input>
    {shortURL ? <ShortURL shortURL={shortURL} /> : null}
  </form>;
}

export default Form;
