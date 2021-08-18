const router = require("express").Router();
const { saveURL, getURL } = require("./controllers/controller");

router.get("/getURL", getURL);
router.post("/saveURL", saveURL);

module.exports = router;
