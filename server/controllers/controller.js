const saveURL = (req, res) => {
  res.status(201).send("saved URL");
};

const getURL = (req, res) => {
  res.status(200).send("got short URL");
};

module.exports = { saveURL, getURL };
