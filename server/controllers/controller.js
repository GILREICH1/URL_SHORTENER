const URL = require("../models/urls");

async function saveURL({ body }, res) {
  try {
    const urlToSave = { longURL: body.longURL, visits: 0 };
    const newURL = new URL(urlToSave);
    const urlDBObject = await newURL.save();

    res.status(201).send(urlDBObject);
  } catch (err) {
    res.status(400).send("failed to save");
  }
}
const getURL = (req, res) => {
  res.status(200).send("got short URL");
};

module.exports = { saveURL, getURL };
