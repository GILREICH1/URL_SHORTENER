const router = require("express").Router();

router.get("/test", (req, res) => {
  res.status(400).send("hello");
});

module.exports = router;
