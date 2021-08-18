"use strict";
require("dotenv").config();
const express = require("express");
const router = require("./router");
require("./models/database");

const app = express();
app.use(express.json());
app.use(router);

module.exports = app;
