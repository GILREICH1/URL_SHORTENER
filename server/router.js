const router = require("express").Router();
const { saveURL } = require("./controller");

router.get("/test", saveURL);

module.exports = router;
