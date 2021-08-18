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
async function getURL({ params }, res) {
  try {
    const { shortURL } = params;
    const { longURL } = await URL.findOne({ shortURL });
    res.status(200).send(longURL);
  } catch (err) {
    res.status(404).send({ error: "no such URL found" });
  }
}

module.exports = { saveURL, getURL };
