const router = require("express").Router();
const { saveURL, getURL, incrementVisit } = require("./controllers/controller");

router.get("/getURL/:shortURL", getURL);
router.get("/incrementVisit/:shortURL", incrementVisit);
router.post("/saveURL", saveURL);

module.exports = router;
