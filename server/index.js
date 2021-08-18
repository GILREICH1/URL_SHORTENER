"use strict";
const express = require("express");
const app = express();
const router = require("./router");
const PORT = 3001;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});
