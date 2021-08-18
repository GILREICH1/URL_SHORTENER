"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router");
const PORT = 3001;
require("./models/database");

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});
