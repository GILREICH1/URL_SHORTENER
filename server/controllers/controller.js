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
    const urlDBObject = await URL.findOne({ shortURL });
    if (!urlDBObject) throw "no such URL found";
    res.status(200).send(urlDBObject);
  } catch (error) {
    res.status(404).send({ error });
  }
}

async function incrementVisit({ params }, res) {
  try {
    const { shortURL } = params;
    const urlDBObject = await URL.findOneAndUpdate(
      { shortURL },
      { $inc: { visits: 1 } }
    ).exec();
    if (!urlDBObject) throw "no such URL found";
    urlDBObject.visits = urlDBObject.visits + 1;
    res.status(200).send(urlDBObject);
  } catch (error) {
    res.status(404).send({ error });
  }
}

module.exports = { saveURL, getURL, incrementVisit };
