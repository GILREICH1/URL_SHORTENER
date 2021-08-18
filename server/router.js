const router = require("express").Router();
const { saveURL, getURL } = require("./controllers/controller");

router.get("/getLongURL", getURL);
router.post("/getShortURL", saveURL);

module.exports = router;
