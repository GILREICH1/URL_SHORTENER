import React, { useState } from "react";
import { generateShortURL } from "../../utils/api-services";
import ShortURL from "../ShortURL/ShortURL";

function Form() {
  const [longURL, setLongURL] = useState("");
  const [newShortURL, setNewShortURL] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const urlToSave = { longURL };
    const URLShortened = await generateShortURL(urlToSave);
    setNewShortURL(URLShortened);
    setLongURL("");
  };

  return (
    <form className="submitForm" onSubmit={(e) => submitHandler(e)}>
      <input
        className="form__input"
        value={longURL}
        type="text"
        placeholder="paste in long URL here"
        onChange={(e) => setLongURL(e.target.value)}
      ></input>
      {newShortURL ? <ShortURL shortURL={newShortURL} /> : null}
    </form>
  );
}

export default Form;
