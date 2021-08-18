const router = require("express").Router();
const { saveURL, getURL } = require("./controllers/controller");

router.get("/getLongURL/:shortURL", getURL);
router.post("/getShortURL", saveURL);

module.exports = router;
